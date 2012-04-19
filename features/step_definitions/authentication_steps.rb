When /^I authenticate with email: "([^"]*)", password: "([^"]*)"$/ do |email, password|
  # basic_auth(email, password)
  visit(authenticate_users_path, :post, :email => email, :password => password)
end

Given /^this user has an osm account assigned$/ do
  @user.oauth_token.should_not be_nil
  @user.oauth_secret.should_not be_nil
end