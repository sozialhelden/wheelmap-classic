class OauthController < ApplicationController
  
  def new
    request_token = consumer.get_request_token(:oauth_callback => root_url)
    session[:request_token] = request_token
    session[:token] = request_token.token
    session[:secret] = request_token.secret
    redirect_to request_token.authorize_url
  end
  
  def callback
    flash[:notice] = t('oauth.callback.notice')
    redirect_to root_url
  end
  
end
