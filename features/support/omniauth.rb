Before('@omniauth_test') do
  OmniAuth.config.test_mode = true

  # the symbol passed to mock_auth is the same as the name of the provider set up in the initializer
  OmniAuth.config.mock_auth[:osm] = OmniAuth::AuthHash.new(
     'provider' => 'osm',
     'uid' => '174',
     'credentials' => {
       'token' => 'token',
       'secret' => 'secret'
     },
     'info' => {
       'permissions' => ['allow_read_prefs', 'allow_write_api']
     }
   )
   # request.env["devise.mapping"] = Devise.mappings[:user]
   # request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:osm]

end

After('@omniauth_test') do
  OmniAuth.config.test_mode = false
end
