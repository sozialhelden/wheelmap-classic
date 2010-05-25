class DataController < ApplicationController

  def index
    Cloudmade.api_key = 'ff94b6ad4b174d648b9c491706f13579'
    @places = Cloudmade.nodes(params[:bbox],params[:object_types])
    render :json => @places
  end

  def update
    ChangeSet.update(params[:id], params[:wheelchair])
    render :text => 'OK'
  end
end
