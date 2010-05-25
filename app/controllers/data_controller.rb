class DataController < ApplicationController

  def index
    @places = Cloudmade.nodes(params[:bbox],params[:object_types])
    render :json => @places
  end

  def update
    Delayed::Job.enqueue(UpdatingJob.new(params[:id], params[:wheelchair]))
    render :text => 'OK'
  end
end
