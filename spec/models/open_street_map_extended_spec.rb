require 'spec_helper'
describe OpenStreetMapExtended do
  
  before(:each) do
    # FakeWeb.allow_net_connect = false
    full_url = "http://osmxapi.hypercube.telascience.org/api/0.6/node%5Bbbox%3D13.396935%2C52.521059%2C13.414465%2C52.524923%5D%5Bamenity%7Crailway%7Chighway%7Cferry%5D"
    FakeWeb.register_uri(:any, full_url, :body => "#{RAILS_ROOT}/spec/fixtures/nodes.xml", :content_type => 'text/xml')
    @nodes = OpenStreetMap.nodes("13.396935,52.521059,13.414465,52.524923", [:amenity,:railway,:highway,:ferry])
  end
  
  it "should escape params correctly" do
    OpenStreetMap.normalize_params('/node', "[bbox=13.396935,52.521059,13.414465,52.524923][amenity|railway|highway|ferry]").should == "/node%5Bbbox%3D13.396935%2C52.521059%2C13.414465%2C52.524923%5D%5Bamenity%7Crailway%7Chighway%7Cferry%5D"
  end
  
  it "should create node objects from xml" do
    @nodes.each{|node| node.class.to_s.should == 'OpenStreetMap::Node'}
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
