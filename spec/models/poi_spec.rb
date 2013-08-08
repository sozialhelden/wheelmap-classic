# encoding: UTF-8
require 'spec_helper'
describe Poi do
  fixtures :node_types


  let! :node_type do
    FactoryGirl.create(:node_type, :osm_key => :shop, :osm_value => :alcohol, :identifier => :alcohol)
  end

#  context 'associations' do  end
#
#  context "initialization" do  end
#
#  context 'validations' do  end
#
#  context 'osm stuff' do
#    subject { FactoryGirl.build(:poi, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" }) }
#
#    it 'osm_type identifies types properly' do
#      Poi.new(:osm_id => 1).osm_type.should eq('node')
#      Poi.new(:osm_id => -1).osm_type.should eq('way')
#    end
#  end
#
#  context "inital state" do  end
#
#  context "type" do  end
#
#  context "address attributes" do
#
#    Poi::DELEGATED_ADDR_ATTRIBUTES.each do |attr|
#
#      it "has virtual getter for address tag #{attr}" do
#        p = FactoryGirl.build(:poi)
#        p.tags["addr:#{attr}"] = "horst"
#        p.send(attr).should == "horst"
#      end
#
#      it "has virtual setter for address tag #{attr}" do
#        p = FactoryGirl.build(:poi)
#        p.send "#{attr}=", "horst"
#        p.tags["addr:#{attr}"].should == "horst"
#      end
#    end
#
#  end
#
#  context "other tag based attributes" do  end
#
#  context "json rendering" do  end
#
#  context "64 bit" do  end
#
#  context "unicode" do  end
#
  context "similar pois" do

    subject { FactoryGirl.create(:poi, :node_type => node_type, :lat => 51.5, :lon => 13.4, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" }) }

    let :different_node_type do
      @different_node_type ||= FactoryGirl.create(:node_type, :osm_key => :amenity, :osm_value => :cinema, :identifier => :cinema)
      subject.node_type_id.should_not eql @different_node_type.id
      @different_node_type
    end

    let! :distant_poi do
      @distant_poi ||= FactoryGirl.create(:poi, :node_type => node_type, :lat => 51.5004, :lon => 13.4004, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" })
    end

    let! :close_poi do
      @close_poi ||= FactoryGirl.create(:poi, :node_type => node_type, :lat => 51.5002, :lon => 13.4002, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" })
    end

    let! :different_poi do
      @different_poi ||= FactoryGirl.create(:poi, :node_type => different_node_type, :lat => 51.5002, :lon => 13.4002, :tags => { 'wheelchair' => 'yes', 'street' => "Sesame street" })
      @different_poi.type = 'cinema'
      @different_poi.save!
      @different_poi.reload
    end

    let! :different_wheelchair do
      @different_wheelchair ||= FactoryGirl.create(:poi, :node_type => node_type, :lat => 51.5002, :lon => 13.4002, :tags => { 'wheelchair' => 'no', 'street' => "Sesame street" })
      @different_wheelchair.wheelchair = 'no'
      @different_wheelchair.save
      @different_wheelchair
    end

    it "should not include pois with different node types" do
      subject.node_type_id.should_not eql different_poi.node_type_id
      subject.similar_pois.map(&:osm_id).should_not include(different_poi.osm_id)
    end

    it "should not include different wheelchair status" do
      subject.status.should_not eql different_wheelchair.status
      subject.similar_pois.map(&:osm_id).should_not include(different_wheelchair.osm_id)
    end

    it "should not include itself" do
      subject.similar_pois.map(&:osm_id).should_not include(subject.osm_id)
    end

    it "should include distant_poi" do
      subject.similar_pois.map(&:osm_id).should include(distant_poi.osm_id)
    end

    it "should include close_poi" do
      subject.similar_pois.map(&:osm_id).should include(close_poi.osm_id)
    end

    it "should include distant_poi in sorted list" do
      subject.sorted_similar_pois.map(&:osm_id).should include(distant_poi.osm_id)
    end

    it "should include close_poi in sorted list" do
      subject.sorted_similar_pois.map(&:osm_id).should include(close_poi.osm_id)
    end

    it "should order similar pois by distance" do
      sorted_ids = subject.sorted_similar_pois.map(&:osm_id)
      sorted_ids.index(close_poi.osm_id).should < sorted_ids.index(distant_poi.osm_id)
    end

  end
end
