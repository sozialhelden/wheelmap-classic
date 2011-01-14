# Given /I am not logged in/ do
#   @user_session = UserSession.find
#   @user_session.destroy if @user_session
# end

Given /^I am not logged in$/ do
  visit '/users/sign_out'
end

Given /I am logged in/ do
  Given 'a user: "a_user" exists with email: "loggedin@fg.hi", password: "123456", password_confirmation: "123456"'
  When "I go to the sign_in page"
  And 'I fill in "Email" with "loggedin@fg.hi"'
  And 'I fill in "Password" with "123456"'
  And 'I press "Sign in"'
  And 'I should see "loggedin@fg.hi"'
end

Given /^a(n| non activated) user with email "([^"]*)" and password "([^"]*)"$/ do |activated, email, password|
  @user = User.create!(:email => email, :password => password, :password_confirmation => password)
end

Then /^I should see an "([^\"]*)" div$/ do |div|
  if response.respond_to? :should
    response.should have_selector "div##{div}"
  else
    assert_have_selector 'div#info'
  end

end
