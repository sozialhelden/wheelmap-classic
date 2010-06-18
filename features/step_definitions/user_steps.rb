# Given /I am not logged in/ do
#   @user_session = UserSession.find
#   @user_session.destroy if @user_session
# end

Given /^I am not logged in$/ do
  visit '/users/sign_out'
  session.destroy
end

Given /I am logged in/ do
  Given 'an user with email "loggedin@fg.hi" and password "123456"'
  When 'I go to the sign_in page'
  And 'I fill in "user-email" with "loggedin@fg.hi"'
  And 'I fill in "user-password" with "123456"'
  And 'I press "Anmelden"'
  controller.current_user.email.should == 'loggedin@fg.hi'
end

Given /^a(n| non activated) user with email "([^"]*)" and password "([^"]*)"$/ do |activated, email, password|
  @user = User.create!(:email => email, :password => password, :password_confirmation => password)
end

Then /^I should see an "([^\"]*)" div$/ do |div|
  if response.respond_to? :should
    response.should have_selector 'div#info'
  else
    assert_have_selector 'div#info'
  end

end
