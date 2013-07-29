require 'spec_helper'

describe Category do

  before :each do
    @category = FactoryGirl.build :category
  end

  it "should create a valid category" do
    @category.should be_valid
  end

  it "should have translated name" do
    @category.localized_name.should eql 'Essen & Trinken'
  end
end
