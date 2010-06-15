class HomeController < ApplicationController
  
  def index
    RAILS_DEFAULT_LOGGER.debug("amenities: #{session['amenities'].join(',')}")
  end
end
