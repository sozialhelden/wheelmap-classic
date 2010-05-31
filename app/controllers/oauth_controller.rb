require 'oauth'
require 'oauth/consumer'
require 'oauth/request_proxy/action_controller_request'
require 'oauth/signature/rsa/sha1'
require 'oauth/signature/hmac/sha1'
class OauthController < ApplicationController
  before_filter :authenticate_user!

  def new
    @consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => OpenStreetMapConfig.oauth_site)
    request_token = @consumer.get_request_token
    session[:request_token] = request_token
    redirect_to request_token.authorize_url
  end
  
  def osm_register
    @consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => OpenStreetMapConfig.oauth_site)
    request_token = @consumer.get_request_token
    session[:request_token] = request_token
    redirect_url = url_for(:host => 'www.openstreetmap.org', :controller => 'user', :action => 'new', :referer => "/oauth/authorize?oauth_token=#{request_token.token}")
    redirect_to redirect_url
  end

  def callback
    request_token = session[:request_token]
    access_token = request_token.get_access_token
    current_user.oauth_token = access_token.token
    current_user.oauth_secret = access_token.secret
    current_user.save!
    flash[:notice] = t('oauth.callback.notice')
    redirect_to root_url
  end
end
