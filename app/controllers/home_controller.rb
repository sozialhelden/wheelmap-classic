class HomeController < ApplicationController
  caches_page :index
  
  def index
    session['amenities'] ||= ['subway', 'light_rail', 'fast_food', 'restaurant', 'bar']
  end
end
