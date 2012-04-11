require 'spec_helper'
describe Poi do
  fixtures :node_types


  let! :node_type do
    Factory.create(:node_type, :osm_key => :shop, :osm_value => :alcohol, :identifier => :alcohol)
  end

  describe 'associations' do
  end

  describe 'validations' do
    subject { Factory.build(:poi) }
    it { should be_valid }

    it "is not be valid without existing node type" do
      subject.tags = {'name' => 'a_name', 'wheelchair' => 'yes'}
      subject.type = :invalid
      subject.should_not be_valid
      subject.type = 'alcohol'
      subject.should be_valid
    end
  end

  context 'osm stuff' do
    subject { Factory.build(:poi, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" }) }
    it 'osm_tags maps "addr" keys' do
      subject.osm_tags['addr:street'].should eq('Sesame street')
      subject.osm_tags['street'].should be_nil
      subject.osm_tags['wheelchair'].should eq('yes')
    end

    it 'osm_type identifies types properly' do
      Poi.new(:osm_id => 1).osm_type.should eq('node')
      Poi.new(:osm_id => -1).osm_type.should eq('way')
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

  context "address attributes" do
    Poi::DELEGATED_ADDR_ATTRIBUTES.each do |attr|

      it "has virtual getter for address tag #{attr}" do
        p = Factory.build(:poi)
        p.tags["addr:#{attr}"] = "horst"
        p.send(attr).should == "horst"
      end

      it "has virtual setter for address tag #{attr}" do
        p = Factory.build(:poi)
        p.send "#{attr}=", "horst"
        p.tags["addr:#{attr}"].should == "horst"
      end
    end
  end

  context "other tag based attributes" do
    names = [:phone, :website]

    names.each do |attr|
      it "has virtual getters for #{attr}" do
        p = Factory.build(:poi)

        p.tags["#{attr}"] = "horst"
        p.send(attr).should == "horst"
      end

      it "has virtual setters for #{attr}" do
        p = Factory.build(:poi)
        p.send "#{attr}=", "horst"
        p.tags["#{attr}"].should == "horst"
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
