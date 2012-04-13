class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def osm
    osm_id = request.env['omniauth.auth']['uid']
    user = User.find_by_osm_id(osm_id)
    if user
      set_flash_message :notice, :success, :kind => 'OpenStreetMap'
      sign_in user
      redirect_to root_url
    else
      failure "OSM user not found"
    end
  end

  def failure(message = nil)
    set_flash_message :alert, :failure, :kind => :osm, :reason => (message || failure_message)
    redirect_to after_omniauth_failure_path_for(:user)
  end
end
