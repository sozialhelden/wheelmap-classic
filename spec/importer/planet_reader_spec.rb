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
    <tag k="name" v="Mar &amp; Sol" />
    <tag k="operator" v="Adolf Präg GmbH &amp; Co. KG"/>
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

ABANDONED_IMPORT = <<-XML
<?xml version='1.0' encoding='UTF-8'?>
<osm version="0.6" generator="pbf2osm">
  <node id="20000000" lat="52.5065963" lon="13.3228529" version="7" changeset="5414080" user="miwie" uid="57526" timestamp="2010-08-06T06:47:01Z">
    <tag k="disused" v="yes" />
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
    @category = FactoryGirl.create(:category, :identifier => 'food')
    @node_type = FactoryGirl.create(:node_type, :osm_key => 'amenity', :osm_value => 'restaurant', :category => @category)
    Poi.delete_all
  end

  it "should import a new POI" do
    PlanetReader.new(StringIO.new(OSM_IMPORT)).load
    expect(Poi.exists?(26735750)).to be_truthy
    poi = Poi.find(26735750)
    expect(poi.lat).to eql(52.5065963)
    expect(poi.lon).to eql(13.3228529)
    expect(poi.version).to eql(7)
    expect(poi.status).to eql(1)
    expect(poi.tags['addr:city']).to eql("Berlin")
    expect(poi.tags['name']).to eql("Mar & Sol")
    expect(poi.tags['operator']).to eql "Adolf Präg GmbH & Co. KG"
    expect(poi.tags['amenity']).to eql("restaurant")
    expect(poi.tags['wheelchair']).to eql("yes")
  end

  it "should not import poi if access is private" do
    PlanetReader.new(StringIO.new(PRIVATE_IMPORT)).load
    expect(Poi.exists?(20000000)).to be_falsey
  end

  it "should not import poi if disused or abandoned" do
    PlanetReader.new(StringIO.new(ABANDONED_IMPORT)).load
    expect(Poi.exists?(20000000)).to be_falsey
  end
end