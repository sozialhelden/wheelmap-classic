require 'rails_helper'
require 'shared_context/omniauth'
require 'email_spec'

feature 'User after signup feature', :js => true do
  include_context "OmniAuth"

  describe "User is logged in" do
    background do
      visit new_user_session_path
      visit '/users/auth/osm'
      visit '/users/auth/osm/callback'
      visit after_signup_edit_profile_path
    end

    context "when user = horst, email = horst@wheelmap.org, password = password" do
      given!(:user) { FactoryGirl.create(:user,
        first_name: 'horst',
        email: 'horst@wheelmap.org',
        password: 'password',
        password_confirmation: 'password',
        confirmed_at: '10.10.1999',
        osm_id: 174
      )}

      scenario "I set my email after signup without an email" do # added test
        within("#user_email_input") do
          fill_in "user_email", with: ""
        end
        # pending("JS alert: 'Du bekommst in wenigen Minuten eine E-Mail mit einem Link' instead of error")
        click_button 'Fertigstellen'
        # expect(page).to raise_error("Bitte hinterlege eine E-Mail-Adresse vor dem Speichern.")
      end
    end

    context "when user = horst2, email = horst@wheelmap.org, password = ''" do
      given!(:user) { FactoryGirl.create(:user,
        first_name: 'horst2',
        email: 'horst@wheelmap.org',
        password: "",
        password_confirmation: "",
        confirmed_at: '10.10.1999',
        osm_id: 174
      )}

      # Scenario: I set my password after signup
      scenario "I set my password after signup" do
        # binding.pry
        within("#user_email_input") do
         fill_in "user_email", with: ""
        end
        # pending("Error: No password setting possible on after signup edit page. Needs correction!")
        click_button 'Fertigstellen'
        expect(page).to have_content("Email muss ausgefüllt werden")
      end

      # Scenario: I set my email after signup with existing password
      scenario "I set my email after signup with another email address" do # text corrected
        within("#user_email_input") do
          fill_in "user_email", with: "peter@wheelmap.org" # peter@wheelmap.org
        end
        pending
        click_button 'Fertigstellen'
        expect(page.current_path).to eq(root_path)
        # Then 1 email should be delivered to "peter@wheelmap.org"
        expect(last_email_sent).to deliver_to(user.email)
        expect(last_email_sent).to have_subject("Noch einen Schritt zur Aktivierung deines Benutzerkontos")
      end
    end

    context "when user = horst, email = "", password = ''" do
      given!(:user) { FactoryGirl.create(:user,
        first_name: 'horst',
        email: "",
        password: "",
        password_confirmation: "",
        confirmed_at: '10.10.1999',
        osm_id: 174
      )}

      # Scenario: I set my email after signup without any prior email and get an welcome email
      scenario "I set my email after signup without any prior email and get an welcome email" do
        within("#user_email_input") do
         fill_in "user_email", with: "peter@wheelmap.org"
        end
        pending
        click_button 'Fertigstellen'
        expect(page.current_path).to eq(root_path)
        expect(last_email_sent).to deliver_to(user.email)
        # Then 2 email should be delivered to "peter@wheelmap.org"
      end
    end
  end

  describe "User is not logged in" do
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
end
