require 'rails_helper'

describe LandingPagesController do
  let(:region)    { FactoryGirl::create(:region) }
  let(:node_type) { FactoryGirl::create(:node_type) }
  describe 'GET /index' do
    before do
      get :index, page: 1, region_id: region.name, wheelchair: :unknown, node_type_id: node_type.identifier
    end

    it 'returns http 200 status' do
      expect(response).to have_http_status(:success)
    end
  end
end
