require 'spec_helper'

describe 'OpenStreetMap::Node' do
  
  before(:each) do
    @valid_attributes ={ 'id' => '78252168',
                        'lat' => '52.5235634',
                        'lon' => '13.3988069',
                        'version' => '2',
                        'changeset' => '415641',
                        'user' => 'bahnpirat',
                        'uid' =>'13203',
                        'visible' => 'true',
                        'timestamp' =>'2007-11-05T14:56:37Z',
                        'tag' => [
                          {
                            'k' => 'amenity',
                            'v' => 'telephone'
                          },
                          {
                            'k' => 'created_by',
                            'v' => 'Potlatch 0.4c'
                          },
                          {
                            'k' => 'wheelchair',
                            'v' => 'yes'
                          },
                          {
                            'k' => 'name',
                            'v' => 'Telefonzelle am neuen Tor',
                          }
                        ]
                      }
    @node = OpenStreetMap::Node.new(@valid_attributes)
  end
  
  it "should have latitude, longitude and name" do
    @node.lat.should == @valid_attributes['lat'].to_f
    @node.lon.should == @valid_attributes['lon'].to_f
    @node.id.should == @valid_attributes['id']
    @node.name.should == 'Telefonzelle am neuen Tor'
    @node.type.should == 'telephone'
  end
  
  it "should have tags" do
    @node.tags.should == {'amenity' => 'telephone', 'created_by' => 'Potlatch 0.4c', 'wheelchair' => 'yes', 'name' => 'Telefonzelle am neuen Tor'}
  end

  it "should be a valid node type" do
    @node.should be_valid_type
  end

  it "should be accessible by wheelchair" do
    @node.wheelchair.should == 'yes'
  end

  it "should render proper json" do
    @json = JSON.parse(@node.to_json)
    @json['wheelchair'].should == 'yes'
  end
  
  it "should set changeset_id after editing wheelchair" do
    @node.wheelchair.should == 'yes'
    @node.changeset.should == '415641'
    @node.set_wheelchair('no', '343434')
    @node.changeset.should == '343434'
  end
  
  it "should set owner after editing wheelchair" do
    @node.user.should == 'bahnpirat'
    @node.set_wheelchair('no', '343434')
    @node.user.should == 'wheelmap_visitor'
  end
  
  it "should set timestamp after editing wheelchair" do
    @node.timestamp.should == Time.parse('2007-11-05T14:56:37Z')
    @node.set_wheelchair('no', '343434')
    @node.timestamp.should_not == '2007-11-05T14:56:37Z'
  end
  
  
  #TODO
  #  
  # it "should show tram stops" do
  #   run_data <<-XML
  #     <node id="30694741" lat="52.5489931" lon="13.5871162">
  #      <tag k="name" v="Landsberger Chaussee/Zossener Straße"/>
  #      <tag k="railway" v="tram_stop"/>
  #     </node>
  #   XML
  #   
  #   @json.first['type'].should == 'tram-stop'
  #   @json.first['name'].should == 'Landsberger Chaussee/Zossener Straße'
  # end
  #   
  # it "should show ligh-rail (DE: S-Bahn) stations" do
  #   run_data <<-XML
  #     <node id="29918292" lat="52.5120912" lon="13.5890899">
  #       <tag k="name" v="S Kaulsdorf"/>
  #       <tag k="railway" v="station"/>
  #       <tag k="station" v="light_rail"/>
  #       <tag k="wheelchair" v="no"/>
  #     </node>
  #   XML
  #   
  #   @json.first['type'].should == 'light-rail'
  #   @json.first['name'].should == 'S Kaulsdorf'
  # end
  # 
  #   
  # it "should show subway (DE: U-Bahn) stations" do
  #   run_data <<-XML
  #     <node id="52684988" lat="52.5382584" lon="13.6336218">
  #       <tag k="name" v="U Hönow"/>
  #       <tag k="railway" v="station"/>
  #       <tag k="station" v="subway"/>
  #       <tag k="surveillance" v="indoor"/>
  #     </node>
  #   XML
  #   
  #   @json.first['type'].should == 'subway'
  #   @json.first['name'].should == 'U Hönow'
  # end
  # 
  #   
  # it "should show bus stops" do
  #   run_data <<-XML
  #     <node id="59852353" lat="52.5163493" lon="13.6089862">
  #       <tag k="highway" v="bus_stop"/>
  #       <tag k="name" v="Hirtschulzstraße"/>
  #     </node>
  #   XML
  #   
  #   @json.first['type'].should == 'bus-stop'
  #   @json.first['name'].should == 'Hirtschulzstraße'
  # end
  # 
  #   
  # it "should show ferry terminals" do
  #   run_data <<-XML
  #     <node id='595683949' lat='52.4297529' lon='13.6891915'>
  #       <tag k='amenity' v='ferry_terminal'/>
  #       <tag k='description' v='F24 Ruderfähre Spreewiesen - Kruggasse;  F23 Müggelwerdeweg - Müggelhort - Neu Helgoland - Kruggasse'/>
  #       <tag k='ft_link' v='www.freietonne.de?edit=17033'/>
  #       <tag k='name' v='Frei fahrende Fähre'/>
  #     </node>
  #   XML
  #   
  #   @json.first['type'].should == 'ferry-terminal'
  #   @json.first['name'].should == 'Frei fahrende Fähre'
  # end
  # 
  # 
  # it "should convert subway and light rails stations in Hamburg" do
  #   run_data <<-XML
  #     <node id="52144750" lat="53.544153" lon="9.9815198">
  #      <tag k="hha_ref" v="BL"/>
  #      <tag k="hvv:barrier_free" v="yes"/>
  #      <tag k="hvv:psv_type" v="U"/>
  #      <tag k="layer" v="2"/>
  #      <tag k="name" v="Baumwall"/>
  #      <tag k="railway" v="station"/>
  #     </node>
  #     <node id="52144713" lat="53.5461769" lon="9.9710742">
  #      <tag k="hha_ref" v="LB"/>
  #      <tag k="hvv:barrier_free" v="no"/>
  #      <tag k="hvv:psv_type" v="S"/>
  #      <tag k="layer" v="-1"/>
  #      <tag k="name" v="Landungsbrücken"/>
  #      <tag k="railway" v="station"/>
  #      <tag k="uic_name" v="Hamburg Landungsbrücken"/>
  #      <tag k="uic_ref" v="8003518"/>
  #     </node>
  #   XML
  #   
  #   @json.first['type'].should == 'subway'
  #   @json.first['wheelchair'].should == 'yes'
  #   
  #   @json.last['type'].should == 'light-rail'
  #   @json.last['wheelchair'].should == 'no'
  # end
  # 
  #   
  # end
  

end
