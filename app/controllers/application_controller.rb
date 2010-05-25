class ApplicationController < ActionController::Base
  protect_from_forgery
  filter_parameter_logging :password, :password_confirmation, :old_password

  helper :all
  
  before_filter :set_default_amenities
  
  def set_default_amenities
    session['amenities'] ||= ['subway', 'light_rail', 'fast_food', 'restaurant', 'bar']
  end
end
