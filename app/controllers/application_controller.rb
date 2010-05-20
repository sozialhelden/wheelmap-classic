class ApplicationController < ActionController::Base
  protect_from_forgery
  filter_parameter_logging :password, :password_confirmation, :old_password
  rescue_from 'ActiveRecord::RecordInvalid', :with => :form_validation_error
  rescue_from 'ActiveRecord::StatementInvalid', :with => :form_validation_error

  helper :all
  helper_method :current_user_session, :current_user, :logged_in?
  
  def logged_in?
    not session[:oauth_token].nil?
  end
  
  def require_user
    unless logged_in?
      if request.xhr?
        render :nothing => true, :status => :forbidden
      else
        store_location
        flash[:notice] = t('application.require_user.notice')
        redirect_to new_oauth_path
      end
      return false
    end
  end
  
  def store_location
    session[:return_to] = request.request_uri
  end
  
  def redirect_back_or_default(default)
    redirect_to(session[:return_to] || default)
    session[:return_to] = nil
  end
  
  def require_no_user
    if logged_in?
      store_location
      flash[:notice] = t('application.require_no_user.notice')
      redirect_to root_url
      return false
    end
  end
  
  def form_validation_error
    flash[:error] = t('application.form_validation_error.error')
    render :action => 'edit'
  end
  
  def consumer
    @consumer ||= OAuth::Consumer.new(
        OAUTH_KEY,
        OAUTH_SECRET,
        {
          :site => 'http://' + OSM_HOST,
          :request_token_path => '/oauth/request_token', 
          :access_token_path => '/oauth/access_token', 
          :authorize_path=> '/oauth/authorize'
        }
      )
  end
  
  def access_token
    @access_token || OAuth::AccessToken.new(consumer, session[:token], session[:secret])
  end
end
