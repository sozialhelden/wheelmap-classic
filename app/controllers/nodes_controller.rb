class NodesController < ApplicationController
  
  def show
    @node = OpenStreetMap.get_node(params[:id])
  end
  
  def update
    Delayed::Job.enqueue(UpdatingJob.new(params[:id], params[:wheelchair], default_user.id))
    render :text => 'OK'
  end
end