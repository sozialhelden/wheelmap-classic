class ApplicationController < ActionController::Base
  protect_from_forgery

  helper :all
  
  before_filter :redirect_to_default_locale, :if => :url_includes_default_locale?

  before_filter :set_locale_from_params
  before_filter :set_locale_from_cookies,             :unless => :locale_already_set?
  before_filter :redirect_to_best_locale_or_default,  :unless => :locale_already_set?
  
  before_filter :set_last_location
  
  rescue_from Errno::ETIMEDOUT, :with => :timeout
  rescue_from Timeout::Error,   :with => :timeout

  protected
  
  def redirect_to_default_locale
    uri = URI.parse(request.url)
    uri.path = uri.path.gsub(/^\/#{I18n.default_locale}/, "")
    cookies[:locale] = I18n.default_locale
    redirect_to uri.to_s
  end
  
  def locale_already_set?
    !I18n.locale.blank?
  end
  
  def url_includes_default_locale?
    uri = URI.parse(request.url)
    # /de
    !(uri.path =~ /^\/#{I18n.default_locale}($|\/)?/).nil?
  end

  def default_url_options(options = nil)
    {:locale => I18n.locale}
  end
  
  def set_locale_from_params
    locale = params[:locale].try(:to_sym)
    if locale.nil?
      I18n.locale = locale
    else
      if I18n.available_locales.include?(locale)
        I18n.locale = locale      
        cookies[:locale] = locale
      else
        flash[:error] = I18n.t('errors.language.not_supported')
        redirect_to root_url(:locale => I18n.default_locale)
      end
    end
    locale
  end

  def set_locale_from_cookies
    locale = cookies[:locale].try(:to_sym)
    unless locale.nil?
      if I18n.available_locales.include?(locale)
        I18n.locale = locale      
        cookies[:locale] = locale
      else
        cookies.delete(:locale)
        flash[:error] = I18n.t('errors.language.not_supported')
        redirect_to root_url(:locale => I18n.default_locale)
      end
    end
    locale
  end
  
  def redirect_to_best_locale_or_default
    locale = request.preferred_language_from(I18n.available_locales) # find preferred
    locale = request.compatible_language_from(I18n.available_locales) unless locale # find compatible
    locale = I18n.default_locale unless locale # use default
    
    uri = URI.parse(request.url)
    uri.path = uri.path.gsub(/^(.*)$/, "/#{I18n.locale}"+'\1')
    
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
