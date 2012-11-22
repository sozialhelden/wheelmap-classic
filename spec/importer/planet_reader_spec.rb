require 'spec_helper'

OSM_IMPORT = <<-XML
<?xml version='1.0' encoding='UTF-8'?>
<osm version="0.6" generator="pbf2osm">
  <node id="26735750" lat="52.5065963" lon="13.3228529" version="7" changeset="5414080" user="miwie" uid="57526" timestamp="2010-08-06T06:47:01Z">
    <tag k="addr:city" v="Berlin" />
    <tag k="addr:country" v="DE" />
    <tag k="addr:postcode" v="10623" />
    <tag k="amenity" v="restaurant" />
    <tag k="cuisine" v="spanish" />
    <tag k="name" v="Mar y Sol" />
    <tag k="wheelchair" v="yes" />
  </node>
</osm>
XML

PRIVATE_IMPORT = <<-XML
<?xml version='1.0' encoding='UTF-8'?>
<osm version="0.6" generator="pbf2osm">
  <node id="20000000" lat="52.5065963" lon="13.3228529" version="7" changeset="5414080" user="miwie" uid="57526" timestamp="2010-08-06T06:47:01Z">
    <tag k="access" v="private" />
    <tag k="addr:city" v="Berlin" />
    <tag k="addr:country" v="DE" />
    <tag k="addr:postcode" v="10623" />
    <tag k="amenity" v="restaurant" />
    <tag k="cuisine" v="spanish" />
    <tag k="name" v="Mar y Sol" />
    <tag k="wheelchair" v="yes" />
  </node>
</osm>
XML

describe PlanetReader do

  before :each do
    @category = Factory.create(:category, :identifier => 'food')
    @node_type = Factory.create(:node_type, :osm_key => 'amenity', :osm_value => 'restaurant', :category => @category)
    Poi.delete_all
  end

  it "should import a new POI" do
    PlanetReader.new(StringIO.new(OSM_IMPORT)).load
    Poi.exists?(26735750).should be_true
    poi = Poi.find(26735750)
    poi.lat.should eql(52.5065963)
    poi.lon.should eql(13.3228529)
    poi.version.should eql(7)
    poi.status.should eql(1)
    poi.tags['addr:city'].should eql("Berlin")
    poi.tags['name'].should eql("Mar y Sol")
    poi.tags['amenity'].should eql("restaurant")
    poi.tags['wheelchair'].should eql("yes")
  end

  it "should not import poi if access is private" do
    PlanetReader.new(StringIO.new(PRIVATE_IMPORT)).load
    Poi.exists?(20000000).should be_false
  end
end