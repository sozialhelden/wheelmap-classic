class PlacesController < ApplicationController
  before_filter :require_user, :only => [:update]
  
  def update
    
  end
  
end
