class NodesController < ApplicationController
  require 'float'
  
  skip_before_filter :verify_authenticity_token
  
  before_filter :authenticate_user!,              :only => [:new, :create, :edit, :update]
  before_filter :authenticate_application!,       :only => [:new, :create, :edit, :update]
  before_filter :check_create_params,             :only => :create
  before_filter :check_update_params,             :only => :update
  before_filter :check_update_wheelchair_params,  :only => :update_wheelchair
  before_filter :check_bbox_param,                :only => :index

  # Manually compress geojson output
  after_filter :compress,                         :only => :index, :if => lambda {|c| c.request.format.try(:geojson?)}

  rescue_from ActiveRecord::RecordNotFound,     :with => :not_found
  rescue_from OpenStreetMap::NotFound,          :with => :not_found
  rescue_from OpenStreetMap::Gone,              :with => :gone
  rescue_from OpenStreetMap::Unavailable,       :with => :timeout

  def index
    if params[:bbox]
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
    @limit = params[:limit].try(:to_i) || 300

    @places = Poi.within_bbox(@left, @bottom, @right, @top).including_category.order('updated_at DESC').limit(@limit) if @left

    respond_to do |wants|
      wants.js{       render :file => "#{Rails.root}/app/views/nodes/index.js.erb"}
      wants.json{     render }
      wants.geojson{  render :content_type => "application/json; subtype=geojson; charset=utf-8" }
      wants.html{ redirect_to root_path }
    end
  end
  
  def show
    @node = Poi.find(params[:id])
  end
  
  def update_wheelchair
    user = wheelmap_visitor
    client = OpenStreetMap::OauthClient.new(user.access_token)
    Delayed::Job.enqueue(UpdateSingleAttributeJob.new(params[:id], user, client, :wheelchair => params[:wheelchair]))
    @node = Poi.find(params[:id])
    respond_to do |wants|
      wants.js{ render :json => {:message => t('nodes.update_wheelchair.successfull', :status => t("wheelchairstatus.#{params[:wheelchair]}"), :name => @node.headline), :wheelchair => params[:wheelchair] }.to_json}
      wants.html{ render :text => t('nodes.update_wheelchair.successfull') }
    end
  end

  def update
    node_id = params[:id]
    node_params = params[:node].reverse_merge(:id => node_id)
    @node = OpenStreetMap::Node.new(node_params.stringify_keys!)
    if @node.valid?
      client = OpenStreetMap::OauthClient.new(current_user.access_token) if current_user.oauth_authorized?
      Delayed::Job.enqueue(UpdatingJob.new(@node, current_user, client))
      respond_to do |wants|
        wants.js{ render :text => 'OK' }
        wants.html{
          flash[:track]  = "'Data', 'Update', '#{@node.wheelchair}'"
          flash[:notice] = I18n.t('nodes.update.flash.successfull')
          redirect_to node_path(@node)
        }
      end
    else
      # raise @node.errors.inspect
      respond_to do |wants|
        wants.js{ render :text => 'FAIL', :status => 406 }
        wants.html{
          flash[:error] = I18n.t('nodes.update.flash.not_successfull')
          render :action => :edit
        }
      end
    end
  end
  
  def create
    @node = OpenStreetMap::Node.new(params[:node].stringify_keys!)
    if @node.valid?
      client = OpenStreetMap::OauthClient.new(current_user.access_token) if current_user.app_authorized?
      Delayed::Job.enqueue(CreatingJob.new(@node, current_user, client))
      flash[:track]  = "'Data', 'Create', '#{@node.wheelchair}'"
      flash[:notice] = I18n.t('nodes.create.flash.successfull')
      redirect_to root_path(:layers => 'BT', :lat => @node.lat, :lon => @node.lon, :zoom => 18)
    else
      render :action => :new, :layers => 'BT', :lat => @node.lat, :lon => @node.lon
    end
  end
  
  def new
    @node = OpenStreetMap::Node.new({'lat' => params[:lat], 'lon' => params[:lon]})
  end
  
  def edit
    @node = OpenStreetMap.get_node(params[:id])
  end
  
  # Before filter
  protected
  
  def gone(exception)
#    HoptoadNotifier.notify(exception,:component => self.class.name, :parameters => params)
    @message = I18n.t('nodes.errors.not_existent')
    render :template => 'shared/error', :status => 410
  end
  
  def not_found(exception)
#    HoptoadNotifier.notify(exception,:component => self.class.name, :parameters => params)
    @message = I18n.t('nodes.errors.not_found')
    render :template => 'shared/error', :status => 404
  end
  
  def set_default_user
    current_user ||= User.find_by_email('visitor@wheelmap.org')
  end
  
  def check_bbox_param
    params[:bbox] ||= "13.395536804199,52.516078290477,13.404463195801,52.517321704317" 
  end
  
  def check_update_wheelchair_params
    render( :text => 'Params missing', :status => 406 ) if params[:wheelchair].blank?
  end
  
  def check_update_params
    render( :text => 'Params missing', :status => 406 ) if params[:node].blank?
  end
  
  def check_create_params
    render( :text => 'Params missing', :status => 406 ) if params[:node].blank?
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
end