require 'spec_helper'
describe Poi do
  
  before(:each) do
    @poi = Factory.build(:poi)
  end
  
  after(:each) do
  end

  describe 'associations' do
  end
  
  describe 'validations' do
    @poi.should be_valid
  end
  
  describe 'scopes' do
    should_have_scope :fully_accessible, :conditions => {:status => 1}
    should_have_scope :limited_accessible, :conditions => {:status => 2}
    should_have_scope :not_accessible, :conditions => {:status => 4}
    should_have_scope :unknown_accessibility, :conditions => {:status => 8}
    
  end
end