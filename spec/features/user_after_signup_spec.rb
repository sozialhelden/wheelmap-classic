require 'rails_helper'
require 'shared_context/omniauth'
require "email_spec"
require 'capybara/poltergeist'
require 'pry'

feature 'User feature after signup', js: true do
  include_context "OmniAuth"

  describe "User is logged in & on after signup edit page" do
    background do
      visit new_user_session_path
      visit '/users/auth/osm'
      visit '/users/auth/osm/callback'
      visit after_signup_edit_profile_path
    end

    context "when first_name, email & password are given " do
      given!(:user) { FactoryGirl.create(:user,
        first_name: 'horst',
        email: 'horst@wheelmap.org',
        password: 'password',
        password_confirmation: 'password',
        confirmed_at: '10.10.1999',
        osm_id: 174
      )}

      # additional test
      scenario "I want to finalize my signup and click on button without changing the email" do
        within("#user_email_input") do
          fill_in "user_email", with: ""
        end
        click_button 'Fertigstellen'
        pending("Bug: 'Du bekommst in wenigen Minuten eine E-Mail mit einem Link' instead of 'Email muss ausgefüllt werden'")
        fail
        expect { raise StandardError, 'Email muss ausgefüllt werden' }.to raise_error('Email muss ausgefüllt werden')
      end
    end

    context "when first_name & email are given" do
      given!(:user) { FactoryGirl.create(:user,
        first_name: 'horst2',
        email: 'horst@wheelmap.org',
        password: "",
        password_confirmation: "",
        confirmed_at: '10.10.1999',
        osm_id: 174
      )}

      # Scenario: I set my password after signup
      scenario "I set my password" do
        within("#user_email_input") do
         fill_in "user_email", with: ""
        end
        click_button 'Fertigstellen'
        skip("Bug: No password setting possible on after signup edit page. Needs correction!")
        fail
      end

      # Scenario: I set my email after signup with existing password
      scenario "I set my email after signup with email address" do
        within("#user_email_input") do
          fill_in "user_email", with: 'peter@wheelmap.org'
        end
        click_button 'Fertigstellen'
        expect(last_email_sent).to deliver_to('peter@wheelmap.org')
      end
    end

    # needs correction, because this case should not be possible
    context "when only first_name is given" do
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
    scenario "I set my email after signup without any prior password" do
      pending("BUG: This test case needs a revision since '/users/password/new' is not used anymore")
      expect(current_path).to eq(new_user_password_path)
      # When I am on the new user password page
      # When I fill in "E-Mail" with "horst@wheelmap.org"
      # And I press "Passwort neu setzen"
      # And PENDING: make cached flash testable
      # And I should see "Du bekommst in wenigen Minuten eine E-Mail mit Informationen wie du dein Passwort neu setzen kannst."
    end
  end
end
