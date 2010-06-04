class ApplicationController < ActionController::Base
  protect_from_forgery
  filter_parameter_logging :password, :password_confirmation, :old_password, :key, :secret

  helper :all
  
  before_filter :set_default_amenities
  
  def set_default_amenities
    session['amenities'] ||= ['subway', 'light_rail', 'fast_food', 'restaurant', 'bar']
  end
  
  def default_user
    current_user || User.find_by_email('visitor@wheelmap.org')
  end
  
end
