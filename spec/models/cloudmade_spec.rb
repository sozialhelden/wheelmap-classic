require 'spec_helper'
describe Cloudmade do
  
  describe 'nodes' do
  
    before(:each) do
      full_url = "http://geocoding.cloudmade.com/API-KEY/geocoding/v2/find.js?results=1000&object_type=arts_centre%2Catm%2Cbank%2Cbar%2Cbicycle_parking%2Cbicycle_rental%2Cbiergarten%2Cbureau_de_change%2Cbus_station%2Cbus_stop%2Ccafe%2Ccar_rental%2Ccar_sharing%2Ccinema%2Ccollege%2Ccommunity_centre%2Ccourthouse%2Cembassy%2Cfast_food%2Cferry_terminal%2Cfire_station%2Cfuel%2Cgrave_yard%2Chalt%2Chealth%2Chospital%2Ckindergarten%2Clibrary%2Clight_rail%2Cmarketplace%2Cmonorail%2Cnightclub%2Cparking%2Cpharmacy%2Cplace_of_worship%2Cplatform%2Cpolice%2Cpost_box%2Cpost_office%2Cpub%2Cpublic_building%2Crailway%2Cregister_office%2Crestaurant%2Csauna%2Cschool%2Cstation%2Csubway%2Ctelephone%2Ctheatre%2Ctoilets%2Ctownhall%2Ctram_stop%2Cuniversity&bbox=52.521059%2C13.396935%2C52.524923%2C13.414465"
      FakeWeb.allow_net_connect = false
      FakeWeb.register_uri(:any, full_url, :body => "#{RAILS_ROOT}/spec/fixtures/nodes.json", :content_type => 'application/json')
      Cloudmade.api_key = "API-KEY"
      @nodes = Cloudmade.nodes("13.396935,52.521059,13.414465,52.524923")
    end
  
    it "should create node objects from xml" do
      @nodes.each{|node| node.class.to_s.should == 'Cloudmade::Node'}
    end
  
    it "should show accessibility by wheelchair is true" do
      yes_wheelchair_nodes = @nodes.select{|n| n.tags['wheelchair'] == 'yes'}
      yes_wheelchair_nodes.should_not be_empty
      yes_wheelchair_nodes.each{|node| node.wheelchair.should == 'yes'}
    end
  
    it "should show accessibility by wheelchair is false" do
      no_wheelchair_nodes = @nodes.select{|n| n.tags['wheelchair'] == 'no'}
      no_wheelchair_nodes.should_not be_empty
      no_wheelchair_nodes.each{|node| node.wheelchair.should == 'no'}
    end
  
    it "should show accessibility by wheelchair is limited" do
      limited_wheelchair_nodes = @nodes.select{|n| n.tags['wheelchair'] == 'limited'}
      limited_wheelchair_nodes.should_not be_empty
      limited_wheelchair_nodes.each{|node| node.wheelchair.should == 'limited'}
    end
  
    it "should show accessibility by wheelchair is unknown" do
      unknown_wheelchair_nodes = @nodes.select{|n| n.tags['wheelchair'] == 'unknown'}
      nil_wheelchair_nodes = @nodes.select{|n| n.tags['wheelchair'] == nil}
    
      unknown_wheelchair_nodes.should_not be_empty
      nil_wheelchair_nodes.should_not be_empty
    
      unknown_wheelchair_nodes.each{|node| node.wheelchair.should == 'unknown'}
      nil_wheelchair_nodes.each{|node| node.wheelchair.should == 'unknown'}
    end
  end
  
  describe 'query' do
  end
  
end