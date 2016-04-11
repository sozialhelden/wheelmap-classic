require 'rails_helper'
require 'shared_context/omniauth'

feature 'User on profile edit page feature', :js => true do
  include_context "OmniAuth"

  given!(:user) { FactoryGirl.create(:user,
    first_name: 'horst',
    email: 'horst@wheelmap.org',
    password: 'password',
    password_confirmation: 'password',
    confirmed_at: '10.10.1999',
    osm_id: 174
  )}

  background do
    visit new_user_session_path
    visit '/users/auth/osm'
    visit '/users/auth/osm/callback'
    visit edit_profile_path
  end

  # Scenario: I want to edit my profile
  scenario "I want to edit my profile" do
    expect(page).to have_content("E-Mail")
    expect(page).to have_content("Vorname")
    expect(page).to have_content("Nachname")
    expect(page).to have_content("Passwort")
    expect(page).to have_content("Passwort wiederholen")
  end

  # Scenario: I want to change my password
  scenario "I want to change my password" do
    within("#edit_user") do
      fill_in 'Passwort', with: "new_password"
      fill_in 'Passwort wiederholen', with: "new_password"
      fill_in "E-Mail", with: "horst@wheelmap.org"
    end
    click_button 'Speichern'
    pending("Bug: Flash notification is not visible, text not displayed")
    expect(page).to have_content("Benutzer wurde erfolgreich aktualisiert.")
    expect(page.current_path).to eq(edit_profile_path)
  end

  # Scenario: I changed my email address
  scenario "I changed my email address" do
    within("#edit_user") do
      fill_in 'Passwort', with: "new_password"
      fill_in 'Passwort wiederholen', with: "new_password"
      fill_in "E-Mail", with: "peter@wheelmap.org"
    end
    click_button 'Speichern'
    pending("Bug: Flash notification is not visible, text not displayed")
    expect(page).to have_content("Du bekommst in wenigen Minuten eine E-Mail mit einem Link.")
  end
end
