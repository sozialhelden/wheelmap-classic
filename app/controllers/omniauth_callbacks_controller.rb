class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def osm
    osm_id = request.env['omniauth.auth']['uid']
    user = User.find_by_osm_id(osm_id)
    if user
      sign_in user
      user.update_oauth_credentials(request.env['omniauth.auth']['credentials'])
      set_flash_message :notice, :success, :kind => 'OpenStreetMap'
      redirect_to after_sign_in_path_for(:user)
    else
      # OSM user not in wheelmap db
      user = User.create
      sign_in user
      user.update_attribute(:osm_id, osm_id)
      user.update_oauth_credentials(request.env['omniauth.auth']['credentials'])
      redirect_to edit_user_path(user)
    end
  end

  def failure(message = nil)
    set_flash_message :alert, :failure, :kind => :osm, :reason => (message || failure_message)
    redirect_to after_omniauth_failure_path_for(:user)
  end
end
