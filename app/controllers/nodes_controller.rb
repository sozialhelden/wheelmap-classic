class NodesController < ApplicationController
  
  before_filter :authenticate_user!,  :only => :create
  before_filter :check_update_params, :only => :update
  before_filter :check_create_params, :only => :create
  
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