Given /^I search for "([^"]*)"$/ do |arg1|
  fill_in 'search', :with => arg1
  click_button 'finden'
end
