require 'spec_helper'

describe OauthController do


  it "should redirects to the OSM registration page" do
    stub_request(:post, "#{OpenStreetMapConfig.oauth_site}/oauth/request_token").
      to_return(:status => 200, :body => "oauth_token=ab3cd9j4ks73hf7g&oauth_token_secret=xyz4992k83j47x0b", :headers => {})
    get :register_osm
    response.should be_redirect
    #http://api06.dev.openstreetmap.org/user/new?referer=http%3A%2F%2Fapi06.dev.openstreetmap.org%2Foauth%2Fauthorize%3Foauth_token%3Dab3cd9j4ks73hf7
    encoded_domain = CGI.escape(OpenStreetMapConfig.oauth_site)
    response.should redirect_to("#{OpenStreetMapConfig.oauth_site}/user/new?referer=#{encoded_domain}%2Foauth%2Fauthorize%3Foauth_token%3Dab3cd9j4ks73hf7g")
  end
end