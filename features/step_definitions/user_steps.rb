# Given /I am not logged in/ do
#   @user_session = UserSession.find
#   @user_session.destroy if @user_session
# end

Given /^I am not logged in$/ do
  visit '/users/sign_out'
end

Given /^I am logged in with email: "([^"]*)", password: "([^"]*)"$/ do |email, password|
  visit new_user_session_path
  visit '/users/auth/osm'
  visit '/users/auth/osm/callback'
end

Given /^I sign up/ do
  visit new_user_session_path
  visit '/users/auth/osm'
  visit '/users/auth/osm/callback'
end

# Given /^I am logged in with email: "([^"]*)", password: "([^"]*)"$/ do |email, password|
#   steps %Q{
#     When I go to the sign_in page
#     And I fill in "E-Mail" with "#{email}"
#     And I fill in "Passwort" with "#{password}"
#     And I check "Eingeloggt bleiben?"
#     And I press "Login"
#     And I should see "Profil"
#   }
# end

Given /^a(n| non activated) user with email "([^"]*)" and password "([^"]*)"$/ do |activated, email, password|
  @user = User.create!(:email => email, :password => password, :password_confirmation => password)
end

Given /^there are no users$/ do
  User.delete_all
end

Then /^I should see an "([^\"]*)" div$/ do |div|
  if response.respond_to? :should
    response.should have_selector "div##{div}"
  else
    assert_have_selector 'div#info'
  end
end