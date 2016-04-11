require 'rails_helper'
require 'shared_context/omniauth'
require 'email_spec'
require 'capybara/poltergeist'
require 'pry'

feature 'User after signup feature', :js => true do
  include_context "OmniAuth"

  describe "User is logged in" do
    background do
      visit new_user_session_path
      visit '/users/auth/osm'
      visit '/users/auth/osm/callback'
      visit after_signup_edit_profile_path
    end

    context "when first_name is horst, email is horst@wheelmap.org & password is password" do
      given!(:user) { FactoryGirl.create(:user,
        first_name: 'horst',
        email: 'horst@wheelmap.org',
        password: 'password',
        password_confirmation: 'password',
        confirmed_at: '10.10.1999',
        osm_id: 174
      )}

      scenario "I set my email after signup without an email" do
        within("#user_email_input") do
          fill_in "user_email", with: ""
        end
        click_button 'Fertigstellen'
        pending("Bug: 'Du bekommst in wenigen Minuten eine E-Mail mit einem Link' instead of error message")
        # Test suggestion:
        # expect { raise StandardError, 'Email muss ausgefüllt werden' }.to raise_error('Email muss ausgefüllt werden')
      end
    end

    context "when first_name is horst2, email is horst@wheelmap.org & password is empty" do
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
        within("#user_email_input") do
         fill_in "user_email", with: ""
        end
        click_button 'Fertigstellen'
        pending("Bug: No password setting possible on after signup edit page. Test implementation needs correction!")
      end

      # Scenario: I set my email after signup with existing password
      scenario "I set my email after signup with email address" do
        within("#user_email_input") do
          fill_in "user_email", with: "peter@wheelmap.org"
        end
        click_button 'Fertigstellen'
        expect(page.current_path).to eq(root_path)
        expect(last_email_sent).to deliver_to('peter@wheelmap.org')
      end
    end

    context "when first_name is horst, email and password are left empty" do
      given!(:user) { FactoryGirl.create(:user,
        first_name: 'horst',
        email: "",
        password: "",
        password_confirmation: "",
        confirmed_at: '10.10.1999',
        osm_id: 174
      )}

      # Scenario: I set my email after signup without any prior email and get an welcome email
      scenario "I set my email after signup without any prior email" do
        within("#user_email_input") do
         fill_in "user_email", with: "peter@wheelmap.org"
        end
        click_button 'Fertigstellen'
        expect(page.current_path).to eq(root_path)
        expect(last_email_sent).to deliver_to('peter@wheelmap.org')
        expect(last_email_sent).to have_subject("Willkommen bei wheelmap.org")
      end
    end
  end

  describe "is not logged in" do
  # "This test case is currently ignored, because registration/Login executes through OSM authentication and new user password page is not used anymore" :
  # describe "User is not logged in" do
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
