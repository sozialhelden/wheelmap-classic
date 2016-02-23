require 'rails_helper'
require 'shared_context/omniauth'

describe "Create a new node via website" do
  include_context "OmniAuth"

  before do
    FactoryGirl::create(:node, osm_key: "amenity", osm_value: "bar", identifier: "bar")
  end

  describe "Create a new node" do
    before do
      FactoryGirl::create(:user, email: "creator@wheelmap.org", password: "123456", password_confirmation: "123456", confirmed_at: "10.10.1999", oauth_token: "oauth_token", oauth_secret: "oauth_secret", osm_id: "174")
      FactoryGirl::create(:node_type, identifier: 'bar', osm_key: 'amenity', osm_value: 'bar')

      visit new_user_session_path
      visit '/users/auth/osm'
      visit '/users/auth/osm/callback'
    end

    specify "the current page is the home page" do
      expect(current_path(page.current_url)).to eq root_path
    end

    describe "The new node page" do
      before do
        first(:link, "Ort hinzufügen").click
      end

      specify "the current page is the new node page" do
        expect(current_path(page.current_url)).to eq new_node_path
      end
    end
  end
end
