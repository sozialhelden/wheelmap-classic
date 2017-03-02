shared_context 'OmniAuth' do
  before do
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
        'permissions' => %w(allow_read_prefs allow_write_api)
      }
    )
  end

  after do
    OmniAuth.config.test_mode = false
  end
end
