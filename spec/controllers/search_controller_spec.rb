require 'spec_helper'
require 'rexml/document'
include REXML

describe SearchController do
  
  before :each do
    FakeWeb.allow_net_connect = false
  end
  
  it "should call the OSM search API with xml format" do
    @search_api_url = "http://nominatim.openstreetmap.org/search?q=Leipziger%20Strasse%2C%20Berlin&format=xml&accept-language=de&osm_type=N"
    FakeWeb.register_uri(:get, @search_api_url, :body => "#{RAILS_ROOT}/spec/fixtures/search.xml", :content_type => 'text/xml')
    get( :index, :q => 'Leipziger Strasse, Berlin', :format => 'xml', :'accept-language' => 'de', :osm_type => 'N')
    response.code.should == "200"
    puts response.body
    doc = Document.new(response.body)
    root = doc.root
    root.elements.size.should == 5
  end
  
end
