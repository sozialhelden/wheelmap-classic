require 'rails_helper'
require 'shared_context/omniauth'

feature 'Terms feature' do
  include_context "OmniAuth"
  given!(:user) { FactoryGirl.create(:user,
        email: "editor@wheelmap.org",
        password: "123456",
        password_confirmation: "123456",
        confirmed_at: "10.10.1999",
        oauth_token: "oauth_token",
        oauth_secret: "oauth_secret",
        osm_id: "174",
        terms: false,
        privacy_policy: false
      )}
  given!(:provider) { FactoryGirl.create(:provider, name: "Stiftung Gesundheit") }
  given!(:poi) { FactoryGirl.create(:poi) }

  background do
    visit new_user_session_path
    visit '/users/auth/osm'
    visit '/users/auth/osm/callback'
    visit node_path(poi)
    expect(user.app_authorized?).to eq(true)
  end

  scenario "I must be redirected to the terms page before uploading pictures" do
    click_link("Hinzufügen")
    expect(page.current_path).to eq(terms_path)
  end

  scenario "I must accept terms before editing nodes" do
    click_link("Bearbeiten")
    expect(page.current_path).to eq(terms_path)
    check("user_terms")
    uncheck("user_privacy_policy")
    click_button('Speichern')
    expect(page.current_path).to eq(terms_profile_path)
  end

  scenario "I must accept privacy before editing nodes" do
    click_link("Bearbeiten")
    expect(page.current_path).to eq(terms_path)
    uncheck("user_terms")
    check("user_privacy_policy")
    click_on('Speichern')
    expect(page.current_path).to eq(terms_profile_path)
  end

  scenario "I must accept terms and privacy before editing nodes" do
    click_link("Bearbeiten")
    expect(page.current_path).to eq(terms_path)
    check("user_terms")
    check("user_privacy_policy")
    click_on('Speichern')
    expect(page.current_path).to eq(node_path(poi))
  end

end
