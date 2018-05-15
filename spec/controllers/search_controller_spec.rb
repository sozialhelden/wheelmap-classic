require 'rails_helper'
require 'rexml/document'

describe SearchController do
  before :each do
    @search_api_url = 'https://nominatim.openstreetmap.org/search?q=Leipziger+Strasse%2C+Berlin&format=xml&limit=10&accept-language=de&dedupe=1&email=info%40wheelmap.org'

    stub_request(:get, @search_api_url)
      .to_return(status: 200, body: File.read("#{Rails.root}/spec/fixtures/search.xml"))
  end

  it 'should call the OSM search API with xml format' do
    get(:index, q: 'Leipziger Strasse, Berlin', format: 'xml', 'accept-language': 'de', osm_type: 'N')
    expect(response).to be_success
    doc = REXML::Document.new(response.body)
    root = doc.root
    expect(root.elements.size).to eq(5)
  end

  it 'should increment counter' do
    expect(Counter.today.search_website).to eql 0
    get(:index, q: 'Leipziger Strasse, Berlin', format: 'xml', 'accept-language': 'de', osm_type: 'N')
    expect(response).to be_success
    expect(Counter.today.search_website).to eql 1
  end

  context 'render errors' do
    render_views

    it 'should show error message when search query is missing' do
      get(:index, format: 'xml', 'accept-language': 'de', osm_type: 'N')
      expect(response.code).to eql '406'
      expect(response.body).to match(/Bitte einen Suchbegriff eingeben/)
    end
  end
end
