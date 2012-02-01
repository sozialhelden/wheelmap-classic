require 'spec_helper'

describe User do

  it "should revoke the oauth credentials" do
    @user = Factory.create(:user, :oauth_token => "token", :oauth_secret => "secret", :oauth_request_token => "request_token")
    @user.revoke_oauth_credentials
    @user.reload
    @user.oauth_token.should be_nil
    @user.oauth_secret.should be_nil
    @user.oauth_request_token.should be_nil
  end

  it "should set oauth credentials from oauth_verifier" do
    @user = Factory.create(:user, :oauth_request_token => "FAKE")
    fake_response = {:user_id => 123, :oauth_token => "key", :oauth_token_secret => "secret"}
    access_token = OAuth::AccessToken.from_hash(OAuth::Consumer.new("key", "secret", {}), fake_response)
    @user.oauth_request_token.should_receive(:get_access_token).with(:oauth_verifier => "verifier").and_return(access_token)
    @user.set_oauth_credentials("verifier")
    @user.reload
    @user.oauth_token.should  eql("key")
    @user.oauth_secret.should eql("secret")
  end

  context "authentication" do

    before(:each) do
      @user = Factory.create(:user, :email => "foo@bar.org", :password => "secret", :password_confirmation => "secret")
    end

    it "should succeed with an existing user and a valid password" do
      User.authenticate("foo@bar.org", "secret").should eql(@user)
    end

    it "should not succeed with an existing user and an invalid password" do
      User.authenticate("foo@bar.org", "typo").should be_nil
    end

    it "should not succeed without an existing user" do
      User.authenticate("foo@bar.orx", "secret").should be_nil
    end
  end

  context "validations" do

    let :user do
      Factory(:user, :email => "foo@bar.org", :password => "secret", :password_confirmation => "secret")
    end

    it "should not be possible to save a user with a short password" do
      user.password = 'short'
      user.password_confirmation = 'short'
      user.should_not be_valid
    end
  end
end
