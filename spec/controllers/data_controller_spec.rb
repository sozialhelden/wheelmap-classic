require 'spec_helper'

describe DataController do
  
  def setup_expections(xml)
    xml = %Q(<osm version="0.6" generator="CGImap 0.0.2">#{xml}</osm>)
    full_url = "http://osmxapi.hypercube.telascience.org/api/0.6/node%5Bbbox%3D1%2C1%2C1%2C1%5D%5Bamenity%7Crailway%7Chighway%7Cferry%5D"
    FakeWeb.register_uri(:any, full_url, :body => xml)
    # Net::HTTP.expects(:get_response).returns(mock(:body => xml))
  end
  
  def run_data(xml, bbox = '1,1,1,1')
    setup_expections xml
    get :data, :bbox => bbox
    @json = JSON.parse(response.body)
  end



end
