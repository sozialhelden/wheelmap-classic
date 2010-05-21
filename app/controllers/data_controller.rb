class DataController < ApplicationController

  def data
    # @places = OpenStreetMap.nodes(params[:bbox].first)
    Cloudmade.api_key = 'ff94b6ad4b174d648b9c491706f13579'
    @places = Cloudmade.nodes(params[:bbox].first)
    logger.warn("Found #{@places.size} places")
    render :json => @places
  end

  def update
    node = Node.find(params[:osmid])
    node.wheelchair = params[:wheelchair]
    if node.save_by!(:email => params[:email], :password => params[:password])
      # redirect
    else
      # redirect & flash
    end
  rescue
    # redirect & flash
  end

end
