class ApplicationController < ActionController::Base
  protect_from_forgery
  filter_parameter_logging :password, :password_confirmation, :old_password, :key, :secret

  helper :all

  before_filter :set_locale
  before_filter :set_last_location
  
  rescue_from Errno::ETIMEDOUT, :with => :timeout

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
    root_path
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
  
  def timeout(exception)
    @message = I18n.t('nodes.errors.not_available')
    render :action => 'error', :status => 503, :layout => 'sessions'
  end
  
  def set_last_location
    cookies['last_lat'] = params[:lat] if params[:lat]
    cookies['last_lon'] = params[:lon] if params[:lon]
  end
  
end
