# encoding: UTF-8
require 'spec_helper'
describe Poi do
  fixtures :node_types


  let! :node_type do
    Factory.create(:node_type, :osm_key => :shop, :osm_value => :alcohol, :identifier => :alcohol)
  end

  describe 'associations' do
    it { should have_many :provided_pois }
    it { should have_many(:providers).through(:provided_pois) }
  end

  describe 'validations' do
    subject { Factory.build(:poi) }
    it { should be_valid }

    it "should validate presence of name for new node" do
      node = subject
      node.name = nil
      node.should_not be_valid
    end

    it "should node validate presence of name for existing node" do
      node = subject
      node.save!
      node.name = nil
      node.should be_valid
    end

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

  context "json rendering" do
    context "for osm" do
      REQUIRED_KEYS = [:id, :lat, :lon]

      REQUIRED_KEYS.each do |name|
        it "has key and value '#{name}'" do
          p = Factory.create(:poi)
          attributes = p.as_api_response(:osm)
          attributes[name].should_not be_blank
        end
      end

      it "renders addr data mapped to tags" do
        h = {
          :wheelchair => "yes",
          :street => "Mittelweg",
          :housenumber => "99",
          :city => "Entenhausen",
          :postcode => "98976",
          :phone => "0123456",
          :website => "http://foo.bar.com"
        }

        p = Factory.create(:poi, h)
        attributes = p.as_api_response(:osm).as_json

        tags = attributes['tag']
        tags['wheelchair'].should == h[:wheelchair]
        tags['addr:street'].should == h[:street]
        tags['addr:housenumber'].should == h[:housenumber]
        tags['addr:postcode'].should == h[:postcode]
        tags['addr:city'].should == h[:city]
        tags['phone'].should == h[:phone]
        tags['website'].should == h[:website]
      end

      it "renders version and  positive id" do
        h = {
          :id => -99,
          :wheelchair => "yes",
          :version => 7
        }

        p = Factory.create(:poi, h)
        attributes = p.as_api_response(:osm).as_json

        tags = attributes['tag']
        tags['wheelchair'].should == h[:wheelchair]
        attributes['id'].should == 99
        attributes['version'].should == 7
      end

    end

  end

  context "64 bit" do

    let :poi do
      Poi.new(:osm_id => -4294967934).tap do |p|
        p.lat = 52.0
        p.lon = 13.4
        p.version = 1
        p.type = 'restaurant'
        p.name = "White bull"
      end
    end

    it "should save and load poi with 64 bit signed id" do
      poi.save!

      Poi.exists?(-4294967934).should be_true

      # If the primary key column does not support 64 bit values,
      # the node id is saved with the highest 32 bit signed int
      # which is -2147483648
      Poi.exists?(-2147483648).should be_false
    end

  end

  context "unicode" do

    it "should not escape latin characters" do
      Poi.escape_search_string('Latin').should eql 'Latin'
    end

    it "should escape utf characters that are made up of 2 bytes" do
      Poi.escape_search_string('Müller').should eql 'M\\xc3\\xbcller'
    end

    it "should escape utf characters that are made up of 3 bytes" do
      Poi.escape_search_string('선소 (Seonso)').should eql '\\xec\\x84\\xa0\\xec\\x86\\x8c (Seonso)'
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
