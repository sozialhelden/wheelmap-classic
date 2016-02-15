require 'rails_helper'

describe NodeTypesController do
  let(:node_type) { FactoryGirl::create(:node_type) }
  describe '#index' do
    before do
      get :index, format: :json
    end

    it 'returns 200 status code' do
      expect(response).to have_http_status(:success)
    end

    it 'returns a list of node types' do
      expect(json_response.length).to eq 1
    end
  end

  describe '#show' do
    before do
      get :show, id: node_type.id, format: :json
    end

    it 'returns 200 status code' do
      expect(response).to have_http_status(:success)
    end

    it 'returns a specific node type' do
      expect(json_response['node_type']['identifier']).to eq node_type.identifier
    end
  end

  def json_response
    JSON.parse(response.body)
  end
end
