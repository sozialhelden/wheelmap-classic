class NodesController < ApplicationController
  
  before_filter :authenticate_user!,    :only => :create
  before_filter :check_update_params,   :only => :update
  before_filter :check_create_params,   :only => :create
  before_filter :set_session_amenities, :only => :index
  
  def index
    @places = Cloudmade.nodes(params[:bbox],params[:object_types])
    render :json => @places
  end
  
  def show
    @node = OpenStreetMap.get_node(params[:id])
  end
  
  def update
    Delayed::Job.enqueue(UpdatingJob.new(params[:id], params[:wheelchair], default_user.id))
    render :text => 'OK'
  end
  
  def create
    Delayed::Job.enqueue(CreatingJob.new(params[:node], default_user.id))
    render :text => 'OK', :status => 201
  end
  
  # Before filter
  
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