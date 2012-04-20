require 'spec_helper'

describe OmniauthCallbacksController do
  include Devise::TestHelpers

  before do
    OmniAuth.config.test_mode = true
    OmniAuth.config.mock_auth[:osm] = {
       'provider' => 'osm',
       'uid' => '174',
       'credentials' => {
         'token' => 'token',
         'secret' => 'secret'
       }
     }
    request.env["devise.mapping"] = Devise.mappings[:user]
    request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:osm]
  end

  after do
    OmniAuth.config.test_mode = false
  end

  context "known user" do
    let :user do
      Factory.create(:user, :osm_id => 174)
    end

    before do
      User.should_receive(:find_by_osm_id).with("174").and_return(user)
    end

    it "should update access token" do
      user.should_receive(:update_oauth_credentials).with({
        'token' => 'token',
        'secret' => 'secret'
      })
      get :osm
    end

    it "should sign in user" do
      user.stub!(:update_oauth_credentials)
      get :osm
      controller.current_user.should == user
    end

    it "redirects" do
      user.stub!(:update_oauth_credentials)
      get :osm
      response.should be_redirect
    end
  end

  context "new user" do
    let :user do
      Factory.build(:user)
    end

    before do
      User.should_receive(:find_by_osm_id).with("174").and_return(nil)
    end

    it "should create a user" do
      User.should_receive(:create).and_return(user)
      get :osm
    end

    it "sets osm_id on new user" do
      User.should_receive(:create).and_return(user)
      get :osm
      user.osm_id.should == 174
      user.should_not be_changed # implies persisted
    end

    it "sets oauth data on new user" do
      User.should_receive(:create).and_return(user)
      user.should_receive(:update_oauth_credentials).with({
        'token' => 'token',
        'secret' => 'secret'
      })

      get :osm
    end
  end

  context "failure" do

    it "doesn't login user when no uid is provided via oauth" do
      OmniAuth.config.mock_auth[:osm] = {
      'provider' => 'osm',
        'credentials' => {
          'token' => 'token',
          'secret' => 'secret'
        }
      }

      request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:osm]
      User.should_not_receive(:find_by_osm_id)
      get :osm

      controller.current_user.should be_nil
      response.should redirect_to new_user_session_url
    end

    it "should redirect to login page on failure" do
      get :failure
      response.should be_redirect user_sign_in_path
    end
  end
end