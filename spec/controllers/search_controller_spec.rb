require 'spec_helper'
require 'rexml/document'
include REXML

describe SearchController do
  
  it "should call the OSM search API with xml format" do
    @search_api_url = "http://nominatim.openstreetmap.org/search?q=Leipziger+Strasse%2C+Berlin&format=xml&limit=10&accept-language=de&email=info%40wheelmap.org&osm_type=N"
    
    stub_request(:get, @search_api_url).
      to_return(:status => 200, :body => File.read("#{Rails.root}/spec/fixtures/search.xml"))
    
    get( :index, :q => 'Leipziger Strasse, Berlin', :format => 'xml', :'accept-language' => 'de', :osm_type => 'N')
    response.should be_success
    doc = Document.new(response.body)
    root = doc.root
    root.elements.size.should == 5
  end
  
end
