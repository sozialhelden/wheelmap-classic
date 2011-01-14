Then /^the response code should be "([^\"]*)"$/ do |status|
  response.code.to_i.should == status.to_i
end

# Given /^I am logged in$/ do
#   basic_auth('myname', 'secret') 
# end