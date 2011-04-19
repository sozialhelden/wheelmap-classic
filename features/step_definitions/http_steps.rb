Then /^the response code should be "([^\"]*)"$/ do |status|
  response.code.to_i.should == status.to_i
end

Given /^I send and accept XML$/ do
  header 'Accept', 'text/xml'
  header 'Content-Type', 'text/xml'
end

Given /^I send and accept JSON$/ do
  header 'Accept', 'application/json'
  header 'Content-Type', 'application/json'
end