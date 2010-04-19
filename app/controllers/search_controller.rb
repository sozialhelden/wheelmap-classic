class SearchController < ApplicationController
  
  def search
    render :xml => Net::HTTP.get_response(URI.parse(osm_url)).body
  end
  
private
  
  def osm_url
    q = URI.escape(params[:q])
    "http://nominatim.openstreetmap.org/search?q=#{ q }&format=xml"
  end
  
end
