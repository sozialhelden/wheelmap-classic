require 'rails_helper'
require 'shared_context/omniauth'
require 'email_spec'

feature 'User feature' do
  include_context "OmniAuth"

  describe "User is logged in" do
    given!(:user) { FactoryGirl.create(:user,
      first_name: 'horst',
      email: 'horst@wheelmap.org',
      password: 'password',
      password_confirmation: 'password',
      confirmed_at: '10.10.1999',
      osm_id: 174
    )}

    # given!(:user2) { FactoryGirl.create(:user,
    #   first_name: 'peter',
    #   email: 'peter@wheelmap.org',
    #   password: "",
    #   password_confirmation: "",
    #   confirmed_at: '10.10.1999',
    #   osm_id: 174
    # )}
    #
    # given!(:user3) { FactoryGirl.create(:user,
    #   first_name: 'horst2',
    #   email: 'horst2@wheelmap.org',
    #   password: "",
    #   password_confirmation: "",
    #   confirmed_at: '10.10.1999',
    #   osm_id: 174
    # )}

    background do
      visit new_user_session_path
      visit '/users/auth/osm'
      visit '/users/auth/osm/callback'
    end

    describe "On after signup edit profile page" do
      before do
        visit after_signup_edit_profile_path
      end

      # Scenario: I set my email after signup with existing password
      scenario "I set my email after signup with another email address" do # text corrected
        within("#user_email_input") do
          fill_in "user_email", with: "peter@wheelmap.org" # peter@wheelmap.org
        end
        click_button 'Fertigstellen'
        # Then 1 email should be delivered to "peter@wheelmap.org"
        binding.pry
        expect(last_email_sent).to deliver_to(user.email)
        expect(last_email_sent).to have_subject("Noch einen Schritt zur Aktivierung deines Benutzerkontos")
        expect(page.current_path).to eq(root_path)
      end

      scenario "I set my email after signup without an email" do # added test
        within("#user_email_input") do
          fill_in "user_email", with: ""
        end
        click_button 'Fertigstellen'
        pending("JS alert with 'Du bekommst in wenigen Minuten eine E-Mail mit einem Link, um deine E-Mail-Adresse zu bestätigen.' instead of error message 'Bitte gib eine E-Mail-Adresse ein.'!")
        # expect(page).to raise_error("Bitte hinterlege eine E-Mail-Adresse vor dem Speichern.")
      end

       # Scenario: I set my email after signup without any prior email and get an welcome email
      scenario "I set my email after signup without any prior email and get an welcome email" do
        within("#user_email_input") do
         fill_in "user_email", with: "peter@wheelmap.org"
        end
        click_button 'Fertigstellen'
        expect(last_email_sent).to deliver_to(user.email)
        expect(page.current_path).to eq(root_path)
        # Then 2 email should be delivered to "peter@wheelmap.org"
      end

      # Scenario: I set my password after signup
      scenario "I set my password after signup" do
        # binding.pry
        within("#user_email_input") do
         fill_in "user_email", with: ""
        end
        pending("No password setting possible on after signup edit page")
        click_button 'Fertigstellen'
      end
    end

    describe "On profile edit page" do
      before do
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
        pending("Flash notification is not visible, text not displayed")
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
        pending("Flash notification is not visible, text not displayed")
        expect(page).to have_content("Du bekommst in wenigen Minuten eine E-Mail mit einem Link.")
      end
    end
  end

  # "This test case is currently ignored, because registration/Login executes through OSM authentication and new user password page is not used anymore" :
  # describe "User is logged out" do
  #     scenario "I set my email after signup without any prior password" do
  #       visit destroy_user_session_path
  #       # When I am on the new user password page
  #       # When I fill in "E-Mail" with "horst@wheelmap.org"
  #       # And I press "Passwort neu setzen"
  #       # And PENDING: make cached flash testable
  #       # And I should see "Du bekommst in wenigen Minuten eine E-Mail mit Informationen wie du dein Passwort neu setzen kannst."
  #     end
  # end
end
