class HomeController < ApplicationController
  caches_page :index
  
  def index
    RAILS_DEFAULT_LOGGER.debug("amenities: #{session['amenities'].join(',')}")
  end
end
