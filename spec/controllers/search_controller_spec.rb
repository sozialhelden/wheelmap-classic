require 'spec_helper'
require 'rexml/document'
include REXML

describe SearchController do
  
  before :each do
    FakeWeb.allow_net_connect = false
  end
  
  it "should call the OSM search API with xml format" do
    @search_api_url = "http://nominatim.openstreetmap.org/search?q=Leipziger+Strasse%2C+Berlin&format=xml&limit=10&accept-language=de&email=info%40wheelmap.org&osm_type=N"
    FakeWeb.register_uri(:get, @search_api_url, :body => "#{Rails.root}/spec/fixtures/search.xml", :content_type => 'text/xml')
    get( :index, :q => 'Leipziger Strasse, Berlin', :format => 'xml', :'accept-language' => 'de', :osm_type => 'N')
    response.should be_success
    doc = Document.new(response.body)
    root = doc.root
    root.elements.size.should == 5
  end
  
end
