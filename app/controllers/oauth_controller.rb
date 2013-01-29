require 'oauth'

class OauthController < ApplicationController
  def register_osm
    redirect_to fresh_user_registration_url
  end

  private
  def fresh_user_registration_url
    consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key,
                                   OpenStreetMapConfig.oauth_secret,
                                   :site => OpenStreetMapConfig.oauth_site)
    request_token = consumer.get_request_token
    base_url = URI.parse(OpenStreetMapConfig.oauth_site + '/user/new')
    base_url.query = { :referer => request_token.authorize_url, :locale => I18n.locale }.to_param
    base_url.to_s
  end
end
