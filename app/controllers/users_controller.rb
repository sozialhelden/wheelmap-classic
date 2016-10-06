class UsersController < ApplicationController

  include AuthenticateUserFromToken

  skip_before_filter :verify_authenticity_token, :only => :authenticate

  before_filter :authenticate_user!,        :except => [:authenticate, :signed_in]
  before_filter :authenticate_mobile_user,  :only => :authenticate
  before_filter :authenticate_mobile_app,   :only => :authenticate

  before_filter :remove_password_from_params_if_blank, :only => :update

  rescue_from OAuth::Unauthorized, :with => :unauthorized

  def show
    @user = current_user
  end

  def newsletter
    @user = current_user
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    @user.attributes = user_params
    email_changed = @user.email_changed?
    if @user.save
      flash[:notice] = t('flash.actions.update.notice', :resource_name => User.model_name.human)
      flash[:notice] = t('devise.confirmations.send_instructions') if email_changed
      sign_in(@user, :bypass => true)
      redirect_to edit_profile_path
    else
      flash.now[:alert] = @user.errors.full_messages.to_sentence
      render :action => 'edit'
    end
  end

  def widgets
    @widget = current_user.widget || current_user.widget = Widget.new
  end

  def photos
    @user = current_user
    @photos = @user.photos.page(params[:page]).per_page(18)
  end

  def signed_in
    render :json => (current_user ? true : false).to_json, :status => 200
  end

  def signed_in_token
      @user = current_user
      render :template => 'users/after_signup_success'
  end

  def after_signup_edit
    @user ||= current_user
  end

  def after_signup_update
    @user = current_user
    if @user.update_attributes(user_params)
      flash[:notice] = t('devise.confirmations.send_instructions') if @user.email.present?
      # Send welcome email if user set an email for the first time.
      if @user.email_provided_for_the_first_time?
        UserMailer.welcome(@user).deliver
      end
      redirect_to after_sign_in_path_for(:user)
    else
      flash.now[:alert] = @user.errors.full_messages.to_sentence
      render :template => 'users/after_signup_edit'
    end
  end

  def authenticate
    render :json => {:id => @user.id}.to_json, :status => 200
  end

  def terms
    @accepted = (params[:user][:terms] == "1")
    @privacy_accepted = (params[:user][:privacy_policy] == "1")

    # TERMS ACCEPTED?
    if @accepted
      current_user.terms = @accepted
    else
      # show terms page again if user did not accept terms
      current_user.errors.add(:terms, :accepted)
    end

    # PRIVACY POLICY ACCEPTED?
    if @privacy_accepted
      current_user.privacy_policy = @privacy_accepted
    else
      # show terms page again if user did not accept terms
      current_user.errors.add(:privacy_policy, :accepted)
    end


    if current_user.errors.empty?
      current_user.save(:validation => false)
      redirect_to session.delete(:user_return_to) || :back
    else
      flash.now[:alert] = current_user.errors.full_messages.to_sentence
      render :template => 'terms/index'
    end
  end

  def reset_token
    # Clearing this triggers `ensure_authentication_token` which
    # generates a new token.
    current_user.update_attribute(:authentication_token, nil)
    redirect_to edit_profile_path
    return
  end

  protected

  def require_owner
    unless params[:id].to_i == current_user.id
      flash[:alert] = t('devise.failure.invalid_token')
      case params[:action]
      when 'after_signup_edit', 'after_signup_update'
        redirect_to after_signup_edit_profile_path(current_user)
      else
        redirect_to edit_profile_path
      end
    end
  end

  def authenticate_mobile_user
    unless @user = User.authenticate(params[:email], params[:password])
      render :text => 'Authorization failed', :status => 400
    end
  end

  def authenticate_mobile_app
    unless @user.app_authorized?
      render :json => {:id => @user.id, :message => 'Application needs to be authorized', :url => edit_profile_url}.to_json, :status => 403
    end
  end

  def remove_password_from_params_if_blank
    if user_params[:password].blank?
      params[:user].delete(:password)
    end

    if user_params[:password_confirmation].blank?
      params[:user].delete(:password_confirmation)
    end
  end

  protected

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end
