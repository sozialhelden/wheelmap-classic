class ApplicationController < ActionController::Base
  include CacheableFlash
  protect_from_forgery

  helper :all

  before_filter :redirect_to_default_locale

  before_filter :set_last_location

  before_filter :set_ab_tester

  before_filter :store_iphone_stats, if: [:get_request?, :mobile_app?]

  before_filter :set_geoip_cookie

  rescue_from Errno::ETIMEDOUT, with: :timeout
  rescue_from Timeout::Error,   with: :timeout
  rescue_from Net::ReadTimeout, with: :timeout

  protected

  def set_geoip_cookie
    cookies['geoip_lat'] = request.headers['HTTP_GEOIP_LATITUDE']
    cookies['geoip_lon'] = request.headers['HTTP_GEOIP_LONGITUDE']
  end

  def user_is_a_bot?
    @bot ||= !(request.user_agent =~ /\b(Baidu|Gigabot|Googlebot|libwww-perl|lwp-trivial|msnbot|SiteUptime|Slurp|WordPress|Yodao|ZIBB|ZyBorg)\b/i).nil?
  end

  def redirect_to_default_locale
    match = /^\/#{I18n.default_locale}\b/
    redirect_to request.fullpath.gsub(match, '') if request.fullpath =~ match
  end

  def default_url_options(_options = nil)
    { locale: I18n.locale }
  end

  def authenticate_terms!
    current_user.errors.add(:terms, :accepted) unless current_user.terms
    current_user.errors.add(:privacy_policy, :accepted) unless current_user.privacy_policy
    unless current_user.errors.empty?
      respond_to do |format|
        format.html do
          flash[:alert] = current_user.errors.full_messages.to_sentence
          redirect_to terms_path
        end
        format.json { render_exception(Exception.new(current_user.errors.full_messages.to_sentence), 403) }
        format.xml { render_exception(Exception.new(current_user.errors.full_messages.to_sentence), 403) }
      end
    end
  end

  def authenticate_application!
    unless current_user.app_authorized?
      if mobile_app?
        render json: { id: current_user.id, message: 'Application needs to be authorized', url: edit_profile_url }.to_json, status: 403
      else
        respond_to do |format|
          format.html do
            flash[:alert] = I18n.t('nodes.flash.authorize_wheelmap')
            redirect_to edit_profile_path
          end
          format.json { render_exception(Exception.new(I18n.t('nodes.flash.authorize_wheelmap')), 403) }
          format.xml { render_exception(Exception.new(I18n.t('nodes.flash.authorize_wheelmap')), 403) }
        end
      end
    end
  end

  def after_sign_in_path_for(resource)
    if params[:controller] =~ /registration/
      edit_profile_path
    else
      super
    end
  end

  helper_method :after_sign_in_path_for

  def stored_location_for(resource_or_scope)
    location = super
    return location unless location =~ /geojson/
  end

  def wheelmap_visitor
    User.wheelmap_visitor
  end

  def mobile_app?
    request.user_agent.start_with?('Wheelmap', 'org.wheelmap.android')
  rescue
    false
  end

  def iphone?
    request.user_agent.downcase.include?('ios')
  rescue
    false
  end

  def default_user
    current_user || wheelmap_visitor
  end

  def timeout(exception)
    @message = I18n.t('nodes.errors.not_available')
    render template: 'shared/error', status: 503
  end

  def error(exception)
    @message = I18n.t('nodes.errors.default')
    render template: 'shared/error', status: 400
  end

  def set_ab_tester
    # Tester dont't participate, if they already saw the splash screen
    session['_ab_tester'] = cookies['_wheelmap_splash_seen'].blank? if session['_ab_tester'].blank?
  end

  def set_last_location
    cookies['last_lat'] = params[:lat] if params[:lat]
    cookies['last_lon'] = params[:lon] if params[:lon]
  end

  def authenticate_mobile_user
    unless @user = User.authenticate(params[:email], params[:password])
      render text: 'Authorization failed', status: 400
    end
  end

  def authenticate_mobile_app
    unless @user.app_authorized?
      render json: { id: @user.id, message: 'Application needs to be authorized', url: edit_profile_url }.to_json, status: 403
    end
  end

  def not_found(_exception)
    @message = I18n.t('nodes.errors.not_found')
    render template: 'shared/error', status: 404
  end

  def check_update_wheelchair_params
    render(text: 'Params missing', status: 406) if params[:wheelchair].blank?
  end

  def get_request?
    request.method == 'GET'
  end

  def store_iphone_stats
    if iphone?
      @iphone_headers ||= request.env.each_with_object({}) do |(k, v), h|
        if k =~ /^(HTTP|CONTENT)_/
          h[k.sub(/^HTTP_/, '').dasherize.gsub(/([^\-]+)/) { Regexp.last_match(1).capitalize }] = v
        end
      end

      unless @iphone_headers.empty?
        Rails.logger.info "iOS User Agent: '#{@iphone_headers['User-Agent']}'"
        Rails.logger.info "iOS Install ID: '#{@iphone_headers['Install-Id']}'"
        iphone_counter = IphoneCounter.find_or_initialize_by(install_id: @iphone_headers['Install-Id'])
        iphone_counter.app_version    = @iphone_headers['User-Agent'].gsub(%r{\AWheelmap( iOS)?\/(\d+\.?\d?.?\d*)(\s|.|\z)*}, '\2')
        iphone_counter.os_version     = @iphone_headers['Os-Version']
        iphone_counter.device_version = @iphone_headers['Device-Model'].try(:gsub, /,/, '_')
        iphone_counter.save if iphone_counter.new_record? || iphone_counter.changed?
      end
    end
  end

  def track_page_view(url)
    flash[:view] = url
  end

  def track_event(params)
    flash[:track] = params
  end
end
