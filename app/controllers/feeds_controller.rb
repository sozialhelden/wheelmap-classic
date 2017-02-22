class FeedsController < ApplicationController
  def index
    @page = params[:page].try(:to_i) || 1
    @nodes = Poi.fully_accessible.paginate(page: params[:page], per_page: 100) # paginate(:page => params[:page], :per_page => 1000)
    respond_to do |wants|
      wants.geojson { render }
      wants.rss { render }
    end
  end
end
