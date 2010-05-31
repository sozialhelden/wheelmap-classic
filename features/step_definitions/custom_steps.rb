Then /^I should be redirected to (.+)$/ do |page_name|
  response.should redirect_to path_to(page_name)
  # response.should be_redirect
end

Given /^I am not logged in$/ do
  visit '/users/sign_out'
end