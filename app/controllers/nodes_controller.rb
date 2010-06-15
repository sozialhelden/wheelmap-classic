class NodesController < ApplicationController
  
  before_filter :authenticate_user!,    :only => [:create, :new]
  before_filter :check_update_params,   :only => :update
  before_filter :check_create_params,   :only => :create
  before_filter :set_session_amenities, :only => :index
  
  rescue_from OpenStreetMap::NotFound,    :with => :not_found
  rescue_from OpenStreetMap::Gone,        :with => :gone
  rescue_from OpenStreetMap::Unavailable, :with => :timeout
  rescue_from Timeout::Error,             :with => :timeout

  layout 'nodes'
  
  def index
    @places = Cloudmade.nodes(params[:bbox],params[:object_types])
    respond_to do |wants|
      wants.json{ render :json => @places }
      wants.html{ redirect_to root_path }
    end
  end
  
  def show
    @node = OpenStreetMap.get_node(params[:id])
  end

  def update
    Delayed::Job.enqueue(UpdatingJob.new(params[:id], params[:wheelchair], default_user.id))
    render :text => 'OK'
  end
  
  def create
    @node = OpenStreetMap::Node.new(params[:node])
    if @node.valid?
      Delayed::Job.enqueue(CreatingJob.new(params[:node], default_user.id))
      flash[:notice] = I18n.t('node.create.success')
      redirect_to root_path
    else
      render :action => :new
    end
  end
  
  def new
    @node = OpenStreetMap::Node.new({})
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
  
  def check_update_params
    render( :text => 'Params missing', :status => 400 ) if params[:wheelchair].blank?
  end
  
  def check_create_params
    render( :text => 'Params missing', :status => 400 ) if params[:node].blank?
  end
end