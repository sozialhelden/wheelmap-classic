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
end
