require 'spec_helper'

describe DataController do
  
  def run_data(xml, bbox = '1,1,1,1')
    xml = %Q(<osm version="0.6" generator="CGImap 0.0.2">#{xml}</osm>)
    #url = "http://osmxapi.hypercube.telascience.org/api/0.6/node" +
    #      "%5Bbbox=#{bbox}%5D%5Bamenity%7Crailway%7Chighway%7Cferry%5D"
    Net::HTTP.expects(:get_response).returns(mock(:body => xml))
    get :data, :bbox => bbox
    @json = JSON.parse(response.body)
    #puts response.body
  end
  
  
  it "should show the wheelchair state" do
    run_data <<-XML
      <node id='1' lat='1' lon='2'>
        <tag k='amenity' v='bar'/>
        <tag k='wheelchair' v='yes'/>
      </node>
      <node id='2' lat='1' lon='2'>
        <tag k='amenity' v='bar'/>
        <tag k='wheelchair' v='no'/>
      </node>
      <node id='3' lat='1' lon='2'>
        <tag k='amenity' v='bar'/>
        <tag k='wheelchair' v='limited'/>
      </node>
      <node id='4' lat='1' lon='2'>
        <tag k='amenity' v='bar'/>
        <tag k='wheelchair' v='unknown'/>
      </node>
      <node id='5' lat='1' lon='2'>
        <tag k='amenity' v='bar'/>
      </node>
    XML
    
    @json[0]['wheelchair'].should == 'yes'
    @json[1]['wheelchair'].should == 'no'
    @json[2]['wheelchair'].should == 'limited'
    @json[3]['wheelchair'].should == 'unknown'
    @json[4]['wheelchair'].should == 'unknown'
  end
  
  
  it "should show amenities" do
    run_data <<-XML
      <node id='372621928' lat='52.5422827' lon='13.4119850'>
        <tag k='amenity' v='post_box'/>
        <tag k='operator' v='Deutsche Post AG'/>
      </node>
      <node id='538353681' lat='52.5423801' lon='13.4135074'>
        <tag k='amenity' v='bar'/>
        <tag k='created_by' v='Potlatch 0.10f'/>
        <tag k='name' v='Klub der Republik'/>
      </node>
    XML
    
    @json.length.should == 2
    
    @json.first['type'].should == 'post-box'
    @json.first['lat'].should == 52.5422827
    @json.first['lon'].should == 13.4119850
    @json.first['id'].should == "372621928"
    @json.first['tags'].should == { 'amenity' => 'post_box', 'operator' => 'Deutsche Post AG' }
    
    @json.last['type'].should == 'bar'
    @json.last['lat'].should == 52.5423801
    @json.last['lon'].should == 13.4135074
    @json.last['id'].should == "538353681"
    @json.last['tags'].should == { 'amenity' => 'bar', 'created_by' => 'Potlatch 0.10f', 'name' => 'Klub der Republik' }
  end
  
  
  it "should show tram stops" do
    run_data <<-XML
      <node id="30694741" lat="52.5489931" lon="13.5871162">
       <tag k="name" v="Landsberger Chaussee/Zossener Straße"/>
       <tag k="railway" v="tram_stop"/>
      </node>
    XML
    
    @json.first['type'].should == 'tram-stop'
    @json.first['name'].should == 'Landsberger Chaussee/Zossener Straße'
  end
    
  it "should show ligh-rail (DE: S-Bahn) stations" do
    run_data <<-XML
      <node id="29918292" lat="52.5120912" lon="13.5890899">
        <tag k="name" v="S Kaulsdorf"/>
        <tag k="railway" v="station"/>
        <tag k="station" v="light_rail"/>
        <tag k="wheelchair" v="no"/>
      </node>
    XML
    
    @json.first['type'].should == 'light-rail'
    @json.first['name'].should == 'S Kaulsdorf'
  end
  
    
  it "should show subway (DE: U-Bahn) stations" do
    run_data <<-XML
      <node id="52684988" lat="52.5382584" lon="13.6336218">
        <tag k="name" v="U Hönow"/>
        <tag k="railway" v="station"/>
        <tag k="station" v="subway"/>
        <tag k="surveillance" v="indoor"/>
      </node>
    XML
    
    @json.first['type'].should == 'subway'
    @json.first['name'].should == 'U Hönow'
  end
  
    
  it "should show bus stops" do
    run_data <<-XML
      <node id="59852353" lat="52.5163493" lon="13.6089862">
        <tag k="highway" v="bus_stop"/>
        <tag k="name" v="Hirtschulzstraße"/>
      </node>
    XML
    
    @json.first['type'].should == 'bus-stop'
    @json.first['name'].should == 'Hirtschulzstraße'
  end
  
    
  it "should show ferry terminals" do
    run_data <<-XML
      <node id='595683949' lat='52.4297529' lon='13.6891915'>
        <tag k='amenity' v='ferry_terminal'/>
        <tag k='description' v='F24 Ruderfähre Spreewiesen - Kruggasse;  F23 Müggelwerdeweg - Müggelhort - Neu Helgoland - Kruggasse'/>
        <tag k='ft_link' v='www.freietonne.de?edit=17033'/>
        <tag k='name' v='Frei fahrende Fähre'/>
      </node>
    XML
    
    @json.first['type'].should == 'ferry-terminal'
    @json.first['name'].should == 'Frei fahrende Fähre'
  end


  it "should convert subway and light rails stations in Hamburg" do
    run_data <<-XML
      <node id="52144750" lat="53.544153" lon="9.9815198">
       <tag k="hha_ref" v="BL"/>
       <tag k="hvv:barrier_free" v="yes"/>
       <tag k="hvv:psv_type" v="U"/>
       <tag k="layer" v="2"/>
       <tag k="name" v="Baumwall"/>
       <tag k="railway" v="station"/>
      </node>
      <node id="52144713" lat="53.5461769" lon="9.9710742">
       <tag k="hha_ref" v="LB"/>
       <tag k="hvv:barrier_free" v="no"/>
       <tag k="hvv:psv_type" v="S"/>
       <tag k="layer" v="-1"/>
       <tag k="name" v="Landungsbrücken"/>
       <tag k="railway" v="station"/>
       <tag k="uic_name" v="Hamburg Landungsbrücken"/>
       <tag k="uic_ref" v="8003518"/>
      </node>
    XML
    
    @json.first['type'].should == 'subway'
    @json.first['wheelchair'].should == 'yes'
    
    @json.last['type'].should == 'light-rail'
    @json.last['wheelchair'].should == 'no'
  end
  
end
