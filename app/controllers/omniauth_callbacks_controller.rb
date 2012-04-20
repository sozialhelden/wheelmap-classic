class OmniauthCallbacksController < Devise::OmniauthCallbacksController


  before_filter :check_for_valid_permissions, :only => :osm

  def osm
    user = find_or_create_user
    user.update_oauth_credentials(request.env['omniauth.auth']['credentials'])

    if user.sign_in_count == 0
      set_flash_message :notice, :success, :kind => 'OpenStreetMap'
      redirect_to after_sign_in_path_for(:user)
    else
      # OSM user not in wheelmap db
      redirect_to edit_user_path(user)
    end
    sign_in user
  end

  def failure
    set_flash_message :alert, :failure, :kind => 'OpenStreetMap', :reason => (params[:message] || failure_message)
    redirect_to after_omniauth_failure_path_for(:user)
  end

  private

  def check_for_valid_permissions
    osm_id = request.env['omniauth.auth']['uid']
    unless osm_id
      params[:message] = t('devise.omniauth_callbacks.permission_missing')
      failure
    end
  end

  def find_or_create_user
    User.find_or_create_by_osm_id(request.env['omniauth.auth']['uid'])
  end

end
