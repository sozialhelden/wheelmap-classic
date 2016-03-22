require 'rails_helper'
require 'shared_context/omniauth'

# Feature: User must accept terms
feature 'Terms feature' do
  include_context "OmniAuth"
  # And a user: "editor" exists with email: "editor@wheelmap.org", password: "123456", password_confirmation: "123456", confirmed_at: "10.10.1999", oauth_token: "oauth_token", oauth_secret: "oauth_secret", osm_id: "174", terms: "false", privacy_policy: "false"
  given(:user) { FactoryGirl.create(:user,
        email: "editor@wheelmap.org",
        password: "123456",
        password_confirmation: "123456",
        confirmed_at: "10.10.1999",
        oauth_token: "oauth_token",
        oauth_secret: "oauth_secret",
        osm_id: "174",
        terms: false,
        privacy_policy: true,
      )}
  # Given a provider "stiftung" exists with name: "Stiftung Gesundheit"
  given(:provider) { FactoryGirl.create(:provider, name: "Stiftung Gesundheit") }
  # And 1 valid pois exist
  given(:poi) { FactoryGirl.create(:poi) }

  # And user "editor" should be app_authorized
  scenario 'User is app_authorized' do
    expect(user.app_authorized?).to eq(true)
  end

  # And user "editor" should not be terms
  scenario 'User has not accepted terms' do
    expect(user.terms).to eq(false)
  end
end
