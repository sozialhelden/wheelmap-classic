class Api::UsersController < Api::ApiController
  custom_actions collection: :authenticate

  skip_before_filter :authenticate_by_token, only: [:authenticate]

  before_filter :authenticate_mobile_user,  only: :authenticate
  before_filter :authenticate_mobile_app,   only: :authenticate

  def authenticate
    respond_to do |format|
      format.json { render_for_api :api_simple, json: @user }
      format.xml { render_for_api :api_simple, xml: @user }
    end
  end

  def accept_terms
    current_user.update_attribute(:terms, terms_accepted) unless terms_accepted.nil?
    current_user.update_attribute(:privacy_policy, privacy_accepted) unless privacy_accepted.nil?

    respond_to do |format|
      format.json { render_for_api :api_simple, json: current_user }
      format.xml { render_for_api :api_simple, xml: current_user }
    end
  end

  protected

  def terms_accepted
    analyze_accepted(params[:terms_accepted])
  end

  def privacy_accepted
    analyze_accepted(params[:privacy_accepted])
  end

  def analyze_accepted(param)
    case param
    when 'true', 'yes', '1' then true
    when 'false', 'no', '0' then false
    end
  end
end
