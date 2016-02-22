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

  describe "I want to signup, too" do
    before do
      visit new_user_session_path
      visit '/users/auth/osm'
      visit '/users/auth/osm/callback'
    end

    specify "a user exists" do
      expect(User.count).to eq 1
    end
  end

  describe "I want to signup and register my email" do
    before do
      visit new_user_session_path
      visit '/users/auth/osm'
      visit '/users/auth/osm/callback'
    end

    specify 'there is a user' do
      expect(User.count).to eq 1
    end

    describe "Email" do
      before do
        visit "/profile/after_signup_edit"

        fill_in("E-Mail", :with => "alana.engel.s@gmail.com")
        click_button("Fertigstellen")
      end

      specify "current page is home page" do
        expect(current_path(current_url)).to eq root_path
      end

      specify "there is a user with email alana.engel.s@gmail.com" do
        expect(User.find_by_email("alana.engel.s@gmail.com")).to_not be nil
      end
    end
  end

  after do
    OmniAuth.config.test_mode = false
  end
end
