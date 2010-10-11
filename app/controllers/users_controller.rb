class UsersController < ApplicationController
  
  # skip_before_filter :verify_authenticity_token
  
  before_filter :authenticate_user!, :except => :authenticate
  
  filter_parameter_logging :oauth_token, :oauth_secret, :osm_username, :osm_password
  
  before_filter :remove_password_from_params_if_blank, :only => :update
  
  def index
    @user = current_user
  end
  
  def edit
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    logger.debug(params.inspect)
    @user.update_attributes(params[:user])
    redirect_to edit_user_path(@user)
  end
  
  def authenticate
    if user = User.authenticate_with_http(params[:email], params[:password])
      if user.app_authorized?
        render :json => {:id => user.id}.to_json, :status => 200
      else
        render :status => 403, :json => {:id => user.id, :message => 'Application needs to be authorized', :url => edit_user_url(user)}.to_json
      end
    else
      render :text => 'Authorization failed', :status => 401
    end
  end
  
  protected
  
  def remove_password_from_params_if_blank
    if params[:user][:osm_password].blank?
      params[:user].delete(:osm_password)
    end

  end
end