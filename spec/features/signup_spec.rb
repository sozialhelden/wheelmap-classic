require 'rails_helper'

describe "Signup feature" do
  before do
    User.delete_all

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
  end

  describe "I want to sign up" do
    before do
      visit root_path
      first(:link, "Login").click
      first(:link, "Einloggen mit OpenstreetMap").click
      visit '/users/auth/osm/callback'
    end

    specify 'a new user exists' do
      expect(User.count).to eq 1
    end
  end

  after do
    OmniAuth.config.test_mode = false
  end
end
