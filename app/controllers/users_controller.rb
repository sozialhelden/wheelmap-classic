class UsersController < ApplicationController
  before_filter :authenticate_user!, :only => :show
  
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
  
  protected
  
  def remove_password_from_params_if_blank
    if params[:user][:osm_password].blank?
      params[:user].delete(:osm_password)
    end

  end
end