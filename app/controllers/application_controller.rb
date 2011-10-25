class ApplicationController < ActionController::Base
  protect_from_forgery

  helper :all

  before_filter :redirect_to_default_locale

  before_filter :set_last_location

  rescue_from Errno::ETIMEDOUT, :with => :timeout
  rescue_from Timeout::Error,   :with => :timeout

  protected

  def redirect_to_default_locale
    match = /^\/#{I18n.default_locale}\b/
    redirect_to request.fullpath.gsub(match, '') if request.fullpath =~ match
  end

  def url_includes_default_locale?
    # /de
    !(request.path =~ /^\/#{I18n.default_locale}($|\/)?/).nil?
  end

  def default_url_options(options = nil)
    {:locale => I18n.locale}
  end

  def authenticate_application!
    unless current_user.app_authorized?
      if mobile_app?
        render :json => {:id => current_user.id, :message => 'Application needs to be authorized', :url => edit_user_url(current_user)}.to_json, :status => 403
      else
        respond_to do |format|
          format.html{
            flash[:error] = I18n.t('nodes.flash.authorize_wheelmap')
            redirect_to edit_user_path(current_user)
          }
          format.json{render_exception(Exception.new(I18n.t('nodes.flash.authorize_wheelmap')), 403)}
          format.xml{render_exception(Exception.new(I18n.t('nodes.flash.authorize_wheelmap')), 403)}
        end
      end
    end
  end

  def after_sign_in_path_for(resource)
    if params[:controller] =~ /registration/
      edit_profile_path(current_user.id)
    else
      root_path
    end
  end

  def after_sign_up_path_for(user)
     registration_successful_path
  end

  def after_inactive_sign_up_path_for(user)
    registration_successful_path
  end

  def stored_location_for(resource_or_scope)
    location = super
    return location unless location =~ /geojson/
  end

  def wheelmap_visitor
    User.find_by_email('visitor@wheelmap.org')
  end

  def mobile_app?
    request.user_agent.start_with?('Wheelmap') rescue false
  end

  def default_user
    current_user || wheelmap_visitor
  end

  def timeout(exception)
    HoptoadNotifier.notify(exception,:component => self.class.name, :parameters => params)

    @message = I18n.t('nodes.errors.not_available')
    render :template => 'shared/error', :status => 503
  end

  def error(exception)
    HoptoadNotifier.notify(exception,:component => self.class.name, :parameters => params)

    @message = I18n.t('nodes.errors.default')
    render :template => 'shared/error', :status => 400
  end


  def set_last_location
    cookies['last_lat'] = params[:lat] if params[:lat]
    cookies['last_lon'] = params[:lon] if params[:lon]
  end

  def authenticate_mobile_user
    unless @user = User.authenticate(params[:email], params[:password])
      render :text => 'Authorization failed', :status => 400
    end
  end

  def authenticate_mobile_app
    unless @user.app_authorized?
      render :json => {:id => @user.id, :message => 'Application needs to be authorized', :url => edit_user_url(@user)}.to_json, :status => 403
    end
  end

end
