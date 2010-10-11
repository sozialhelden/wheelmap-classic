class FeedsController < ApplicationController
  
  def index
    @nodes = Poi.fully_accessible.find(:all, :limit => 100) #paginate(:page => params[:page], :per_page => 1000)
    respond_to do |wants|
      wants.geojson{render}
      wants.rss{render}
    end
  end
end