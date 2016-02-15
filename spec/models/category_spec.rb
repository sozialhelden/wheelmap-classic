require 'rails_helper'

describe Category do

  before :each do
    @category = FactoryGirl.build :category
  end

  it "should create a valid category" do
    expect(@category).to be_valid
  end

  it "should have translated name" do
    expect(@category.localized_name).to eql 'Essen & Trinken'
  end
end
