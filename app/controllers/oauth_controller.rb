require 'oauth'

class OauthController < ApplicationController
  before_filter :authenticate_user!

  # rescue_from OAuth::Unauthorized, :with => :unauthorized

  def new
    @consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => OpenStreetMapConfig.oauth_site)
    request_token = @consumer.get_request_token
    current_user.update_attribute(:oauth_request_token, request_token)
    redirect_to request_token.authorize_url
  end

  def osm_register
    @consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => OpenStreetMapConfig.oauth_site)
    request_token = @consumer.get_request_token
    current_user.update_attribute(:oauth_request_token, request_token)
    host = URI.parse(OpenStreetMapConfig.oauth_site).host
    redirect_url = url_for(:host => host, :controller => 'user', :action => 'new', :referer => "/oauth/authorize?oauth_token=#{request_token.token}")
    redirect_to redirect_url
  end

  def revoke
    token = current_user.oauth_token
    current_user.revoke_oauth_credentials
    redirect_to "#{OpenStreetMapConfig.oauth_site}/oauth/revoke?token=#{token}"
  end

  def callback
    current_user.set_oauth_credentials(params[:oauth_verifier])
    store_osm_id unless current_user.osm_id
    flash[:notice] = t('oauth.callback.notice', :user => current_user.email)
    flash[:view] = '/osm/connect/done'
    redirect_to root_url
  end

  protected
  def unauthorized
    @message = I18n.t('nodes.errors.not_authorized')
    render :template => 'shared/error', :status => 400
  end

  def store_osm_id
    begin
      api = current_user.create_authorized_api
      current_user.update_attribute(:osm_id, api.find_user.id)
    rescue Rosemary::StandardError
    end
  end
end
