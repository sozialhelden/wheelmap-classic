class Api::UsersController < Api::ApiController
  
  custom_actions :collection => :authenticate  
  
  before_filter :authenticate_mobile_user,  :only => :authenticate
  before_filter :authenticate_mobile_app,   :only => :authenticate
  
  def authenticate
    respond_to do |format|
      format.json{render_for_api :simple, :json => @user}
      format.xml{ render_for_api :simple, :xml => @user}
    end
  end
end