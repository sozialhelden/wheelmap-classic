class NodesController < ApplicationController
  
  skip_before_filter :verify_authenticity_token
  
  before_filter :authenticate_user!,              :only => [:new, :create, :edit, :update]
  before_filter :check_update_params,             :only => :update
  before_filter :check_update_wheelchair_params,  :only => :update_wheelchair
  before_filter :check_create_params,             :only => :create
  before_filter :set_session_amenities,           :only => :index
  
  rescue_from OpenStreetMap::NotFound,    :with => :not_found
  rescue_from OpenStreetMap::Gone,        :with => :gone
  rescue_from OpenStreetMap::Unavailable, :with => :timeout
  rescue_from Timeout::Error,             :with => :timeout

  layout 'nodes'
  
  def index
    @places = OpenStreetMap.nodes(params[:bbox],params[:object_types])
    # @places = Cloudmade.nodes(params[:bbox],params[:object_types])
    respond_to do |wants|
      wants.js{ render :json => @places }
      wants.json{ render :json => @places }
      wants.html{ redirect_to root_path }
    end
  end
  
  def show
    @node = OpenStreetMap.get_node(params[:id])
  end
  
  def update_wheelchair
    client = OpenStreetMap::BasicAuthClient.new(OpenStreetMapConfig.user, OpenStreetMapConfig.password)
    Delayed::Job.enqueue(UpdateSingleAttributeJob.new(params[:id], client, :wheelchair => params[:wheelchair]))
    respond_to do |wants|
      wants.js{ render :text => 'OK' }
      wants.html{ render :text => 'OK' }
    end
  end

  def update
    @node = OpenStreetMap::Node.new(params[:node].stringify_keys!)
    if @node.valid?
      client = OpenStreetMap::BasicAuthClient.new(current_user.osm_username, current_user.osm_password) if current_user.basic_authorized?
      client = OpenStreetMap::OauthClient.new(current_user.access_token) if current_user.oauth_authorized?
      Delayed::Job.enqueue(UpdatingJob.new(@node, client))
      respond_to do |wants|
        wants.js{ render :text => 'OK' }
        wants.html{
          flash[:notice] = I18n.t('nodes.update.flash.successfull')
          redirect_to node_path(@node)
        }
      end
    else
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
      client = OpenStreetMap::BasicAuthClient.new(current_user.osm_username, current_user.osm_password) if current_user.basic_authorized?
      client = OpenStreetMap::OauthClient.new(current_user.access_token) if current_user.oauth_authorized?
      Delayed::Job.enqueue(CreatingJob.new(@node, client))
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
    RAILS_DEFAULT_LOGGER.debug("UID: #{@node.uid}")
  end

  # Before filter
  protected
  
  def gone(exception)
    @message = I18n.t('nodes.errors.not_existent')
    render :action => 'error', :status => 410
  end
  def timeout(exception)
    @message = I18n.t('nodes.errors.not_available')
    render :action => 'error', :status => 503
  end
  
  def not_found(exception)
    @message = I18n.t('nodes.errors.not_found')
    render :action => 'error', :status => 404
  end
  
  def set_session_amenities
    object_types = params[:object_types].split(',') if params[:object_types]
    session['amenities'] = object_types.flatten.compact.uniq unless object_types.blank?
  end
  
  def set_default_user
    current_user ||= User.find_by_email('visitor@wheelmap.org')
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
end