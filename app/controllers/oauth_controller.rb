require 'oauth'

class OauthController < ApplicationController
  def register_osm
    redirect_to user_omniauth_authorize_path(:osm)
  end
end
