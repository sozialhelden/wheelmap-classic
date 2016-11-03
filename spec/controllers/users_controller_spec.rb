require 'rails_helper'

describe UsersController do


  before(:each) do
    User.destroy_all
    @user = FactoryGirl.create(:user, :email => 'email@wheelmap.org',
                                          :password => 'password',
                                          :password_confirmation => 'password',
                                          :oauth_token => 'a_token',
                                          :oauth_secret => 'a_secret')
  end

  it "should authenticate user successfully with given credentials" do
    expect(@user).to be_app_authorized
    post :authenticate, :email => 'email@wheelmap.org', :password => 'password'
    expect(response.code).to eq('200')
  end

  it "should authenticate user successfully but app not connected" do
    @user.oauth_token = nil
    @user.oauth_secret = nil
    @user.save!
    expect(@user).not_to be_app_authorized
    post :authenticate, :email => 'email@wheelmap.org', :password => 'password'
    expect(response.code).to eq('403')
    expect(response.body).to match /Application needs to be authorized/
  end

  it "should not authenticate user with wrong credentials" do
    post :authenticate, :email => 'horst@yahoo.com', :password => 'gibberish'
    expect(response.code).to eq('400')
  end

  it "should reset a users authentication token when requested" do
    sign_in @user
    old_token = @user.authentication_token
    post :reset_token
    expect(@user.reload.authentication_token).not_to eq(old_token)
  end

  context "widget" do
    let(:user){
      FactoryGirl.create(:user, :email => 'widget@wheelmap.org',
                                            :password => 'password',
                                            :password_confirmation => 'password',
                                            :oauth_token => 'a_token',
                                            :oauth_secret => 'a_secret')
    }

    before :each do
      sign_in user
    end

    it "will be assigned to the current user" do
      get :widgets
      expect(response.code).to eq('200')
      expect(assigns(:widget))
    end

  end
end
