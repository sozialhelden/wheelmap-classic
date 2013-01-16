require 'spec_helper'

describe Api::UsersController do


  before(:each) do
    User.destroy_all
    @user = Factory.create(:user, :email => 'email@wheelmap.org',
                                          :password => 'password',
                                          :password_confirmation => 'password',
                                          :oauth_token => 'a_token',
                                          :oauth_secret => 'a_secret')
  end

  it "should authenticate user successfully with given credentials" do
    @user.should be_app_authorized
    post :authenticate, :email => 'email@wheelmap.org', :password => 'password'
    response.code.should == '200'
    response_hash = ActiveSupport::JSON.decode(response.body)
    response_hash["user"]["api_key"].should_not be_empty
  end

  it "should authenticate user successfully but app not connected" do
    @user.oauth_token = nil
    @user.oauth_secret = nil
    @user.save!
    @user.should_not be_app_authorized
    post :authenticate, :email => 'email@wheelmap.org', :password => 'password'
    response.code.should == '403'
    response.body.should match /Application needs to be authorized/
  end

  it "should not authenticate user with wrong credentials" do
    post :authenticate, :email => 'horst@yahoo.com', :password => 'gibberish'
    response.code.should == '400'
  end

  it "should set terms accepted to true" do
    @user.terms.should be_true
    post :accept_terms, :terms_accepted => 'true', :api_key => @user.authentication_token
    @user.reload.terms.should be_true
  end

  it "should set terms accepted to false" do
    @user.terms.should be_true
    post :accept_terms, :terms_accepted => 'false', :api_key => @user.authentication_token
    @user.reload.terms.should be_false
  end

  it "should not set terms accepted if wrong value" do
    @user.terms.should be_true
    post :accept_terms, :terms_accepted => 'foo', :api_key => @user.authentication_token
    @user.reload.terms.should be_true
  end

end
