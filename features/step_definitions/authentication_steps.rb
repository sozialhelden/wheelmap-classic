When /^I authenticate with email: "([^"]*)", password: "([^"]*)"$/ do |email, password|
  # basic_auth(email, password) 
  visit(authenticate_users_path, :post, :email => email, :password => password)
end

Given /^this user has an osm account assigned$/ do
  @user.oauth_token.should_not be_nil
  @user.oauth_secret.should_not be_nil
end

Then /^I should be handed over to OSM for OAuth$/ do
  token = @current_user.reload.oauth_request_token.token
  response.should redirect_to("http://api06.dev.openstreetmap.org/oauth/authorize?oauth_token=#{token}")
end