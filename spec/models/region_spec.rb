require 'spec_helper'

describe Region do

  before :each do
    @region = FactoryGirl.build :region
  end

  it "should create a valid region" do
    @region.should be_valid
  end

end
