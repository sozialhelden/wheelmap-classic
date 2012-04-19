class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def osm
    osm_id = request.env['omniauth.auth']['uid']
    user = User.find_by_osm_id(osm_id)
    if user

      set_flash_message :notice, :success, :kind => 'OpenStreetMap'
      sign_in user
      raise "TODO save oauth data"
      redirect_to root_url # maybe to somewhere else after_signin_url blah
    else
      # OSM user not in wheelmap db
      @user = User.create(:osm_id => osm_id, :oauth_token => 'sds')
      raise "TODO save oauth data"
      redirect_to edit_user_path()
      failure "OSM user not found"
    end
  end

  def failure(message = nil)
    set_flash_message :alert, :failure, :kind => :osm, :reason => (message || failure_message)
    redirect_to after_omniauth_failure_path_for(:user)
  end
end
