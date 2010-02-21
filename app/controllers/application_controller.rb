class ApplicationController < ActionController::Base
  protect_from_forgery
  filter_parameter_logging :password, :password_confirmation, :old_password
  rescue_from 'ActiveRecord::RecordInvalid', :with => :form_validation_error
  rescue_from 'ActiveRecord::StatementInvalid', :with => :form_validation_error

  helper :all
  helper_method :current_user_session, :current_user, :logged_in?

  def current_user_session
    return @current_user_session if defined?(@current_user_session)
    @current_user_session = UserSession.find
  end

  def current_user
    return @current_user if defined?(@current_user)
    @current_user = current_user_session && current_user_session.user
  end
  
  def logged_in?
    not current_user.nil?
  end
  
  def require_user
    unless current_user
      store_location
      flash[:notice] = t('application.require_user.notice')
      redirect_to new_user_session_url
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
    if current_user
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
end
