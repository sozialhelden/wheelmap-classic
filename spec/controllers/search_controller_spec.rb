require 'spec_helper'
require 'rexml/document'

describe SearchController do

  before :each do
    @search_api_url = "http://nominatim.openstreetmap.org/search?q=Leipziger+Strasse%2C+Berlin&format=xml&limit=10&accept-language=de&email=info%40wheelmap.org&osm_type=N"

    stub_request(:get, @search_api_url).
      to_return(:status => 200, :body => File.read("#{Rails.root}/spec/fixtures/search.xml"))
  end

  it "should call the OSM search API with xml format" do
    get( :index, :q => 'Leipziger Strasse, Berlin', :format => 'xml', :'accept-language' => 'de', :osm_type => 'N')
    response.should be_success
    doc = REXML::Document.new(response.body)
    root = doc.root
    root.elements.size.should == 5
  end

  it "should increment counter" do
    Counter.today.search_website.should eql 0
    get( :index, :q => 'Leipziger Strasse, Berlin', :format => 'xml', :'accept-language' => 'de', :osm_type => 'N')
    response.should be_success
    Counter.today.search_website.should eql 1
  end

  context "render errors" do
    render_views

    it "should show error message when search query is missing" do
      get( :index, :format => 'xml', :'accept-language' => 'de', :osm_type => 'N')
      response.code.should eql "406"
      response.body.should =~ /Bitte einen Suchbegriff eingeben/
    end
  end

end
