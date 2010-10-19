class ApplicationController < ActionController::Base
  protect_from_forgery
  filter_parameter_logging :password, :password_confirmation, :old_password, :key, :secret

  helper :all

  before_filter :set_locale
  before_filter :set_default_amenities

  def set_locale
    I18n.locale = extract_locale_from_subdomain
  end
  
  def authenticate_application!
    unless current_user.app_authorized?
      if mobile_app?
        render :json => {:id => current_user.id, :message => 'Application needs to be authorized', :url => edit_user_url(current_user)}.to_json, :status => 403
      else
        flash[:error] = I18n.t('nodes.flash.authorize_wheelmap')
        redirect_to edit_user_path(current_user)
      end
    end
  end
  
  
  
  def after_sign_in_path_for(resource)
    if request.session[:return_to].is_a? String
      request.session[:return_to]
    else
      super
    end
  end
  
  def set_default_amenities
    session['amenities'] = ['subway', 'light_rail', 'fast_food', 'restaurant', 'bar', 'cafe']
  end
  
  def wheelmap_visitor
    User.find_by_email('visitor@wheelmap.org')
  end
  
  def mobile_app?
    request.user_agent.start_with?('Wheelmap')
  end
  
  def default_user
    current_user || wheelmap_visitor
  end
  
  def extract_locale_from_subdomain
    parsed_locale = request.subdomains.first.try(:to_sym)
    (I18n.available_locales.include? parsed_locale) ? parsed_locale  : extract_locale_from_params
  end

  def extract_locale_from_params
    parsed_locale = params[:locale].try(:to_sym)
    (I18n.available_locales.include? parsed_locale) ? parsed_locale  : I18n.default_locale
  end
  
end
