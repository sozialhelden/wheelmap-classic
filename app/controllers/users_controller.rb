class UsersController < ApplicationController

  skip_before_filter :verify_authenticity_token, :only => :authenticate

  before_filter :authenticate_user!,        :except => :authenticate
  before_filter :authenticate_mobile_user,  :only => :authenticate
  before_filter :authenticate_mobile_app,   :only => :authenticate
  before_filter :require_owner, :only => [:edit, :update, :reset_token, :after_signup_edit, :after_signup_update, :terms]

  before_filter :remove_password_from_params_if_blank, :only => :update

  before_filter :authenticate_admin!, :only => :newsletter

  rescue_from OAuth::Unauthorized, :with => :unauthorized

  def index
    @user = current_user
  end

  def newsletter
    newsletter = FasterCSV.generate(:encoding => 'u', :col_sep => ',') do |csv|
      csv << ["Email","Newsletter"]
      User.order('wants_newsletter ASC, email ASC').each do |user|
        csv << [user.email, user.wants_newsletter? ? 'Ja' : 'Nein' ]
      end
    end
    send_data(newsletter, :filename => "newsletter_#{Date.today.strftime('%Y_%m_%d')}.csv", :type => :csv, :encoding => 'utf8')
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.attributes = params[:user]
    email_changed = @user.email_changed?
    if @user.save
      flash[:notice] = t('flash.actions.update.notice', :resource_name => User.model_name.human)
      flash[:notice] = t('devise.confirmations.send_instructions') if email_changed
      sign_in(@user, :bypass => true)
      redirect_to edit_profile_path(@user.id)
    else
      flash.now[:alert] = @user.errors.full_messages.to_sentence
      render :action => 'edit'
    end
  end


  def after_signup_edit
    @user ||= current_user
  end

  def after_signup_update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      flash[:notice] = t('devise.confirmations.send_instructions') if @user.email.present?
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
    current_user.reset_authentication_token! if current_user.authentication_token
    redirect_to edit_profile_path(current_user.id)
    return
  end

  protected

  def require_owner
    unless params[:id].to_i == current_user.id
      flash[:alert] = t('devise.failure.invalid_token')
      case params[:action]
      when 'after_signup_edit', 'after_signup_update'
        redirect_to after_signup_edit_user_path(current_user)
      else
        redirect_to edit_user_path(current_user)
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
      render :json => {:id => @user.id, :message => 'Application needs to be authorized', :url => edit_user_url(@user)}.to_json, :status => 403
    end
  end

  def remove_password_from_params_if_blank
    if params[:user][:password].blank?
      params[:user].delete(:password)
    end

    if params[:user][:password_confirmation].blank?
      params[:user].delete(:password_confirmation)
    end
  end
end