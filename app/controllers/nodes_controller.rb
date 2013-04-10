class NodesController < ApplicationController
  require 'float'
  require 'yajl'
  include ActionView::Helpers::CacheHelper
  include ActionView::Helpers::AssetTagHelper
  include NewRelic::Agent::MethodTracer


  skip_before_filter :verify_authenticity_token

  before_filter :authenticate_user!,              :only => [:new, :create, :edit, :update]
  before_filter :authenticate_application!,       :only => [:new, :create, :edit, :update]
  # TODO reenable feature terms
  before_filter :authenticate_terms!,             :only => [:new, :create, :edit, :update], :unless => :mobile_app?
  before_filter :check_create_params,             :only => :create
  before_filter :check_update_params,             :only => :update
  before_filter :check_update_wheelchair_params,  :only => :update_wheelchair
  before_filter :check_bbox_param,                :only => :index

  # Manually compress geojson output
  after_filter :compress,                         :only => :index, :if => lambda {|c| c.request.format.try(:geojson?)}

  rescue_from ActiveRecord::RecordNotFound, :with => :not_found
  rescue_from Rosemary::Gone,               :with => :gone
  rescue_from Rosemary::Unavailable,        :with => :timeout

  def index
    normalize_bbox if params[:bbox]
    @limit = params[:limit].try(:to_i) || 300

    @places = Poi.within_bbox(@left, @bottom, @right, @top).including_category.limit(@limit) if @left

    respond_to do |wants|
      wants.js{ render :json => @places.as_api_response(:iphone) }
      wants.geojson do
        render :file => "#{Rails.root}/app/views/nodes/index.geojson.erb", :content_type => "application/json; subtype=geojson; charset=utf-8"
      end
      wants.html{     redirect_to root_path }
    end
  end

  def show
    @node = Poi.find(params[:id])
    @node.photos.build if @node.photos.blank?
  end

  def edit
    @node ||= Poi.find(params[:id])
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

  def update
    @node = Poi.find(params[:id])
    @node.attributes = params[:node]
    @node.photos.map(&:save) # save photos regardless if poi is valid
    if @node.valid?
      UpdateTagsJob.enqueue(@node.osm_id.abs, @node.osm_type, @node.tags, current_user, source('update'))

      respond_to do |wants|
        wants.js   { render :text => 'OK' }

        wants.html {
          flash[:track]  = "'Data', 'Update', '#{@node.wheelchair}'"
          flash[:notice] = I18n.t('nodes.update.flash.successfull')
          redirect_to node_path(@node)
        }
      end
    else
      respond_to do |wants|
        wants.js   { render :text => 'FAIL', :status => 406 }

        wants.html {
          flash[:alert] = I18n.t('nodes.update.flash.not_successfull')
          render :action => :edit
        }
      end
    end
  end

  def new
    @node = Poi.new
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
      render :action => :new, :layers => 'BT', :lat => @node.lat, :lon => @node.lon, :zoom => (params[:zoom] || 18)
    end
  end

  helper_method :prepare_nodes
  helper_method :generate_json

  def claim
  end

  # Before filter
  protected

  def load_and_instantiate_nodes
    @places
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
  add_method_tracer :normalize_bbox, 'Custom/normalize_bbox'

  def gone(exception)
#    HoptoadNotifier.notify(exception,:component => self.class.name, :parameters => params)
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
end
