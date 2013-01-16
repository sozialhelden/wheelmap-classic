class Api::UsersController < Api::ApiController

  custom_actions :collection => :authenticate

  skip_before_filter :authenticate_by_token, :only => [:authenticate]

  before_filter :authenticate_mobile_user,  :only => :authenticate
  before_filter :authenticate_mobile_app,   :only => :authenticate
  before_filter :analyze_accepted,          :only => :accept_terms

  def authenticate
    respond_to do |format|
      format.json{render_for_api :api_simple, :json => @user}
      format.xml{ render_for_api :api_simple, :xml => @user}
    end
  end

  def accept_terms
    current_user.update_attribute(:terms, @terms_accepted) unless @terms_accepted.nil?

    respond_to do |format|
      format.json{render_for_api :api_simple, :json => current_user}
      format.xml{ render_for_api :api_simple, :xml => current_user}
    end
  end

  protected

  def analyze_accepted
    @terms_accepted = case params[:terms_accepted]
    when 'true', 'yes', '1' then true
    when 'false', 'no', '0' then false
    else
      nil
    end
  end
end