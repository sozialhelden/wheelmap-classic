Given /^I search for "([^"]*)"$/ do |arg1|
  fill_in 'q', :with => 'user@example.com'
  click_link 'finden'
end
