require 'rails_helper'

describe Api::UsersController do


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
    response_hash = ActiveSupport::JSON.decode(response.body)
    expect(response_hash["user"]["api_key"]).not_to be_empty
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

  it "should set terms accepted to true" do
    expect(@user.terms).to be_truthy
    post :accept_terms, :terms_accepted => 'true', :api_key => @user.authentication_token
    expect(@user.reload.terms).to be_truthy
  end

  it "should set terms accepted to false" do
    expect(@user.terms).to be_truthy
    post :accept_terms, :terms_accepted => 'false', :api_key => @user.authentication_token
    expect(@user.reload.terms).to be_falsey
  end

  it "should not set terms accepted if wrong value" do
    expect(@user.terms).to be_truthy
    post :accept_terms, :terms_accepted => 'foo', :api_key => @user.authentication_token
    expect(@user.reload.terms).to be_truthy
  end

  it "should set privacy accepted to true" do
    expect(@user.terms).to be_truthy
    post :accept_terms, :privacy_accepted => 'true', :api_key => @user.authentication_token
    expect(@user.reload.privacy_policy).to be_truthy
  end

  it "should set privacy accepted to false" do
    expect(@user.terms).to be_truthy
    post :accept_terms, :privacy_accepted => 'false', :api_key => @user.authentication_token
    expect(@user.reload.privacy_policy).to be_falsey
  end

  it "should not set privacy accepted if wrong value" do
    expect(@user.terms).to be_truthy
    post :accept_terms, :privacy_accepted => 'foo', :api_key => @user.authentication_token
    expect(@user.reload.privacy_policy).to be_truthy
  end

end
