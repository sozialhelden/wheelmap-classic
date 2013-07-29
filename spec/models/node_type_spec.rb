require 'spec_helper'

describe NodeType do
  before :each do
    @node_type = FactoryGirl.build :node_type
  end

  it "should create a valid category" do
    @node_type.should be_valid
  end

  it "should have translated name" do
    @node_type.localized_name.should eql 'Bar'
  end
end
