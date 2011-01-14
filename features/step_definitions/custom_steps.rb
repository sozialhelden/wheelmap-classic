Then /^I should be redirected to (.+)$/ do |page_name|
  response.should redirect_to path_to(page_name)
  # response.should be_redirect
end

Then /^there should be (\d+) CreateJobs?$/ do |amount|
  class CreateJob < ActiveRecord::Base
    set_table_name 'delayed_jobs'
  end
  CreateJob.count.should == amount.to_i
end

Given /^there are no CreateJobs$/ do
  class CreateJob < ActiveRecord::Base
    set_table_name 'delayed_jobs'
  end
  CreateJob.destroy_all
end
