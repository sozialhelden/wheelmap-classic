class DataController < ApplicationController

  def data
    @places = OpenStreetMap.nodes(params[:bbox].first)
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
