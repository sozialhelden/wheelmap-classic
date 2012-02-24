require 'spec_helper'
describe Poi do


  let! :node_type do
    Factory.create(:node_type, :osm_key => :shop, :osm_value => :alcohol, :identifier => :alcohol)
  end

  describe 'associations' do
  end

  describe 'validations' do
    subject{ Factory.build(:poi)}
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

  context "inital state" do
    subject { Poi.new }
    it { should_not be_relevant }

    it "is initially nil" do
      subject.type.should be_nil
    end
  end

  context "type" do
    let (:poi) { Poi.new :name => "foo", :lat => 52.0, :lon => 13.0 }

    # check each of the types offered in the create-form leads to a valid poi
    Tags.keys.map(&:to_s).each do |k|
      it "#{k} is a valid type" do
        poi.type = k
        poi.should be_valid
      end
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