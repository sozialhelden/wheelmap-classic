require 'spec_helper'

describe OauthController do
  include Devise::TestHelpers

  before(:each) do
    User.destroy_all
    @user = Factory.create(:user, :email => 'email@wheelmap.org',
                                          :password => 'password',
                                          :password_confirmation => 'password',
                                          :oauth_token => 'a_token',
                                          :oauth_secret => 'a_secret')
    sign_in @user
  end

  it "should do redirect to the OSM authorization page" do
    stub_request(:post, "#{OpenStreetMapConfig.oauth_site}/oauth/request_token").
      to_return(:status => 200, :body => "oauth_token=ab3cd9j4ks73hf7g&oauth_token_secret=xyz4992k83j47x0b", :headers => {})
    get :new
    response.should be_redirect
    response.should redirect_to("#{OpenStreetMapConfig.oauth_site}/oauth/authorize?oauth_token=ab3cd9j4ks73hf7g")
  end
end