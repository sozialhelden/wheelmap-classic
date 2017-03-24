require 'rails_helper'

describe OauthController do
  it 'should redirects to the OSM registration page' do
    stub_request(:post, "#{OpenStreetMapConfig.oauth_site}/oauth/request_token")
      .to_return(status: 200, body: 'oauth_token=ab3cd9j4ks73hf7g&oauth_token_secret=xyz4992k83j47x0b', headers: {})
    get :register_osm
    expect(response).to be_redirect
    # http://api06.dev.openstreetmap.org/user/new?referer=http%3A%2F%2Fapi06.dev.openstreetmap.org%2Foauth%2Fauthorize%3Foauth_token%3Dab3cd9j4ks73hf7
    encoded_domain = CGI.escape(OpenStreetMapConfig.oauth_site)
    expect(response).to redirect_to('http://test.host/users/auth/osm')
  end
end
