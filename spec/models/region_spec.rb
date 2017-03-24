require 'rails_helper'

describe Region do
  before :each do
    @region = FactoryGirl.build :region
  end

  it 'should create a valid region' do
    expect(@region).to be_valid
  end
end
