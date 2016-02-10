require 'rails_helper'

describe NodeType do
  before :each do
    @node_type = FactoryGirl.build :node_type
  end

  it "should create a valid category" do
    expect(@node_type).to be_valid
  end

  it "should have translated name" do
    expect(@node_type.localized_name).to eql 'Bar'
  end
end
