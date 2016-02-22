class NodesController < ApplicationController
  require 'float'
  require 'yajl'
  include ActionView::Helpers::CacheHelper
  include ActionView::Helpers::AssetTagHelper
  include NewRelic::Agent::MethodTracer
  include NodesHelper

  skip_before_filter :verify_authenticity_token

  before_filter :authenticate_user!,              :only => [:new, :create, :edit, :update, :validate]
  before_filter :authenticate_application!,       :only => [:new, :create, :edit, :update, :validate]
  # TODO reenable feature terms
  before_filter :authenticate_terms!,             :only => [:new, :create, :edit, :update, :validate], :unless => :mobile_app?
  before_filter :check_create_params,             :only => :create
  before_filter :check_update_params,             :only => :update
  before_filter :check_update_wheelchair_params,  :only => :update_wheelchair
  before_filter :convert_xyz,                     :only => :index
  before_filter :check_bbox_param,                :only => :index
  before_filter :load_custom_node,                :only => :index
  # This is to handle clustering mode on the test page but not on main map.
  before_filter :cluster_switch_on,               :only => :index
  after_filter  :cluster_switch_off,              :only => :index

  # Manually compress geojson output
  after_filter :compress,                         :only => :index, :if => lambda {|c| c.request.format.try(:geojson?)}

  rescue_from ActiveRecord::RecordNotFound, :with => :not_found
  rescue_from Rosemary::Gone,               :with => :gone
  rescue_from Rosemary::Unavailable,        :with => :timeout

  def index
    expires_in 1.minute, :public => true

    if params[:bbox].present?
      normalize_bbox
    end
    
    @limit = params[:limit].try(:to_i) || 300
    # Allow max 1000 Pois per request.
    @limit = [@limit, 1000].min

    @count = Poi.within_bbox(@left, @bottom, @right, @top).group(:status).count
    @sum = @count.length > 0 ? @count.values.reduce(:+) : @count.length
    @places = []
    unless FeatureSwitch.clustering_enabled? && @sum < 50
      @places = Poi.within_bbox(@left,@bottom,@right,@top)
        .including_category
        .including_region
        .including_providers.limit(@limit) if @left

      # If a node_id is given and could be found, make sure it is included in the collection
      if @custom_node && !@places.map(&:osm_id).include?(params[:node_id])
        @places << @custom_node
      end
    end
    respond_to do |wants|
      wants.js{ render :json => @places.as_api_response(:iphone).to_json }
      wants.geojson{
        render :content_type => "application/json; subtype=geojson; charset=utf-8"
      }
      wants.html{ redirect_to root_path }
    end
  end

  def show
    @node = Poi.find(params[:id])
    @node.photos.build if @node.photos.blank?

    respond_to do |wants|
      wants.html
      wants.json{ render_node_json }
    end
  end

  def edit
    @node = Poi.find(params[:id])
  end

  def update_wheelchair
    @node = Poi.find(params[:id])
    updating_user = (user_signed_in? && current_user.app_authorized?) ? current_user : wheelmap_visitor
    UpdateTagsJob.enqueue(@node.osm_id.abs, @node.osm_type, { 'wheelchair' => params[:wheelchair] }, updating_user, source('tag'))

    respond_to do |wants|
      wants.js{ render :json => {:message => t('nodes.update_wheelchair.successfull', :status => t("wheelchairstatus.#{params[:wheelchair]}"), :name => @node.headline), :wheelchair => params[:wheelchair] }.to_json}
      wants.html{ render :text => t('nodes.update_wheelchair.successfull') }
    end
  end

  def update_toilet
    @node = Poi.find(params[:id])
    updating_user = (user_signed_in? && current_user.app_authorized?) ? current_user : wheelmap_visitor
    UpdateTagsJob.enqueue(@node.osm_id.abs, @node.osm_type, { 'toilets:wheelchair' => params[:toilet] }, updating_user, source('toilet'))

    respond_to do |wants|
      wants.js{ render :json => {:message => t('nodes.update_wheelchair.successfull', :status => t("toiletstatus.#{params[:toilet]}"), :name => @node.headline), :toilet => params[:toilet] }.to_json}
      wants.html{ render :text => t('nodes.update_toilet.successfull') }
    end
  end

  def update
    @node = Poi.find(params[:id])
    @node.attributes = node_params
    @node.photos.map(&:save) # save photos regardless if poi is valid
    if @node.valid?
      UpdateTagsJob.enqueue(@node.osm_id.abs, @node.osm_type, @node.tags, current_user, source('update'), @node.tags_to_be_deleted)

      respond_to do |wants|
        wants.js   { render :text => 'OK' }
        wants.json { render_node_json }

        wants.html {
          flash[:track]  = "'Data', 'Update', '#{@node.wheelchair}'"
          flash[:notice] = I18n.t('nodes.update.flash.successfull')
          redirect_to node_path(@node)
        }
      end
    else
      respond_to do |wants|
        wants.js   { render text: 'FAIL', status: 406 }
        wants.json { render json: { errors: @node.errors }, status: 406 }

        wants.html {
          flash[:error] = I18n.t('nodes.update.flash.not_successfull')
          render action: :edit
        }
      end
    end
  end

  def new
  end

  def validate
    node = Poi.new(params[:node])

    if node.valid?
      render json: {}, status: 200
    else
      render json: { errors: node.errors }, status: 422
    end
  end

  def create
    @node = Poi.new(params[:node])

    if @node.valid?
      CreateNodeJob.enqueue(@node.lat, @node.lon, @node.tags, current_user, source('create'))

      respond_to do |wants|
        wants.json{ render :status => 200, :json => {} } # iphone wants 200. nothing more.
        wants.html do
          flash[:track]  = "'Data', 'Create', '#{@node.wheelchair}'"
          flash[:view] = '/nodes/created'
          flash[:notice] = I18n.t('nodes.create.flash.successfull')
          redirect_to root_path(:layers => 'BT', :lat => @node.lat, :lon => @node.lon, :zoom => 18)
        end
      end
    else
      render :action => :new, status: 406
    end
  end

  helper_method :prepare_nodes
  helper_method :generate_json
  helper_method :middle_point
  helper_method :generate_graph_data

  def generate_graph_data
    status_hash = {}
    Poi::WHEELCHAIR_STATUS_VALUES.each { |k, v| status_hash[v] = k }
    @count.map {|key, value| {:value=> value, :status=>key, :title => I18n.t("wheelchairstatus.#{status_hash[key]}")}}
  end

  def middle_point
    #todo - this could be the reason the graph is rendered in the wrong position
    p = Bbox.new(@left, @bottom, @right, @top).center()
    [p.x, p.y]
  end
  add_method_tracer :middle_point, "Custom/middle_point"

  def claim
  end

  def popover
    @node = Poi.find(params[:id])
  end

  # Before filter
  protected

  # If a node_id is given additionally, make sure it is loaded
  def load_custom_node
    if !params[:node_id].blank?
      @custom_node = Poi.find(params[:node_id]) rescue nil
    end
  end

  def load_and_instantiate_nodes
    params[:provider_id].present? ? @places.where(:providers => {:id => params[:provider_id]}) : @places
  end
  add_method_tracer :load_and_instantiate_nodes, "Custom/load_and_instantiate_nodes"

  def prepare_nodes
    load_and_instantiate_nodes.map(&:to_geojson)
  end
  add_method_tracer :prepare_nodes, "Custom/prepare_nodes"

  def generate_json(h)
    Yajl::Encoder.encode(h, :pretty => (false && Rails.env.development?))
  end
  add_method_tracer :generate_json, "Custom/generate_json"

  def normalize_bbox
    @left, @bottom, @right, @top = params[:bbox].split(',').map(&:to_f)
    unless FeatureSwitch.clustering_enabled?
      @left = @left.floor_to(3)
      @bottom = @bottom.floor_to(3)
      @right = @right.ceil_to(3)
      @top = @top.ceil_to(3)
      if @right == @left
        @left   -= 0.001
        @right  += 0.001
      end
      if @top   == @bottom
        @bottom -= 0.001
        @top    += 0.001
      end
    end
    [@left, @bottom, @right, @top]
  end
  add_method_tracer :normalize_bbox, 'Custom/normalize_bbox'

  def gone(exception)
#   Airbrake.notify(exception,:component => self.class.name, :parameters => params)
    @message = I18n.t('nodes.errors.not_existent')
    render :template => 'shared/error', :status => 410
  end

  def set_default_user
    current_user ||= User.find_by_email('visitor@wheelmap.org')
  end

  def check_bbox_param
    params[:bbox] ||= "13.395536804199,52.516078290477,13.404463195801,52.517321704317"
  end

  def block_way_updates
    render( :text => 'Can not update ways', :status => 406 ) if params[:id].to_i <= 0
  end

  def check_update_params
    render( :text => 'Params missing', :status => 406 ) if params[:node].blank?
  end

  def check_create_params
    render( :text => 'Params missing', :status => 406 ) if params[:node].blank?
  end

  def cluster_switch_on
    FeatureSwitch.clustering_enabled = 'true' if params[:clustering_enabled] == 'true'
  end

  def cluster_switch_off
    FeatureSwitch.clustering_enabled = 'false' if params[:clustering_enabled].present?
  end

  def convert_xyz
    if params[:x].present? && params[:y].present? && params[:z].present?
      params['bbox'] = tile2bbox(params[:x].to_f, params[:y].to_f, params[:z].to_f)
    end
  end

  def xyz_cache_key
    'xyz_cache_' + [params[:x], params[:y], params[:z]].join('_')
  end

  helper_method :xyz_cache_key

  def render_node_json
    render :status => 200, :json => {
      node: @node.as_api_response(:ember),
      node_types: [@node.node_type.as_api_response(:ember)]
    }
  end

  def source(prefix='tag')
    @source ||= [prefix,mobile_app? ? 'iphone' : 'website'].join('_')
  end

  def compress
    if self.request.env['HTTP_ACCEPT_ENCODING'] and self.request.env['HTTP_ACCEPT_ENCODING'].match(/gzip/)
      if self.response.headers["Content-Transfer-Encoding"] != 'binary'
        begin
          ostream = StringIO.new
          gz = Zlib::GzipWriter.new(ostream)
          gz.write(self.response.body)
          self.response.body = ostream.string
          self.response.headers['Content-Encoding'] = 'gzip'
        ensure
          gz.close
        end
      end
    end
  end
  add_method_tracer :compress, "Custom/compress"
  add_method_tracer :check_bbox_param, "Custom/check_bbox_param"

  def controller
    self
  end

  private

  def node_params
    params.require(:node).permit(:name, :node_type_id, :street, :housenumber, :postcode, :city, :website, :phone, :wheelchair_description)
  end
end
