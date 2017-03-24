require 'rails_helper'
require 'capybara/poltergeist'

feature 'User login feature' do
  describe 'Api clients do not get a session' do
    given!(:user) do
      FactoryGirl.create(:user,
                         first_name: 'Wheelmap',
                         email: 'horst@wheelmap.org',
                         password: 'password',
                         password_confirmation: 'password',
                         confirmed_at: '10.10.1999',
                         osm_id: 174)
    end

    before do
      visit "/api/nodes/?api_key=#{user.authentication_token}"
      visit root_path
    end

    # We ensure that we are not logged in with following tests:
    specify 'I see the login button.' do
      expect(page).to have_content('Login')
    end

    specify 'I can not see the logout button.' do
      expect(page).to_not have_content('Logout')
    end
  end
end
