require 'oauth'

class OauthController < ApplicationController
  # LEAVE THIS IN HERE, CAUSE iphone 2 depends on this URL
  def register_osm
    redirect_to user_omniauth_authorize_path(:osm)
  end
end
