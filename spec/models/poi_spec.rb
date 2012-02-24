require 'spec_helper'
describe Poi do

  subject{ Factory.build(:poi)}

  let! :node_type do
    Factory.create(:node_type, :osm_key => :shop, :osm_value => :alcohol, :identifier => :alcohol)
  end

  describe 'associations' do
  end

  describe 'validations' do
    it { should be_valid }

    it "is not be valid without existing node type" do
      subject.tags = {'name' => 'a_name', 'wheelchair' => 'yes'}
      subject.type = :invalid
      subject.should_not be_valid
      NodeType.should_receive(:valid_combination?).with('shop', 'alcohol').at_least(:once).and_return(true)
      subject.type = 'alcohol'
      subject.should be_valid
    end
  end

  # describe 'scopes' do
  #   should_have_scope :fully_accessible, :conditions => {:status => 1}
  #   should_have_scope :limited_accessible, :conditions => {:status => 2}
  #   should_have_scope :not_accessible, :conditions => {:status => 4}
  #   should_have_scope :unknown_accessibility, :conditions => {:status => 8}
  #
  # end
end