class ApplicationController < ActionController::Base
  protect_from_forgery

  helper :all

  before_filter :set_locale
  before_filter :set_last_location
  
  rescue_from Errno::ETIMEDOUT, :with => :timeout
  rescue_from Timeout::Error,   :with => :timeout

  def set_locale
    parsed_locale = params[:locale].try(:to_sym)
    puts "PARSED: #{parsed_locale}"
    if parsed_locale.nil?
      I18n.locale = I18n.default_locale
    elsif I18n.available_locales.include?(parsed_locale)
      I18n.locale = parsed_locale
    else
      flash[:error] = I18n.t('errors.language.not_supported')
      redirect_to root_url
    end
    puts "SET TO: #{I18n.locale}"
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
  
  def stored_location_for(resource_or_scope)
    location = super
    return location unless location =~ /geojson/
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
    
  def timeout(exception)
    @message = I18n.t('nodes.errors.not_available')
    render :template => 'shared/error', :status => 503
  end
  
  def error(exception)
    @message = I18n.t('nodes.errors.default')
    render :template => 'shared/error', :status => 400
  end
  
  
  def set_last_location
    cookies['last_lat'] = params[:lat] if params[:lat]
    cookies['last_lon'] = params[:lon] if params[:lon]
  end
  
end
