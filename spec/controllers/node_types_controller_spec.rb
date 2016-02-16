require 'rails_helper'

describe NodeTypesController do
  let!(:node_types) { FactoryGirl::create_list(:node_type, 5) }
  describe '#index' do
    context 'without ids' do
      before do
        get :index, format: :json
      end

      it 'returns 200 status code' do
        expect(response).to have_http_status(:success)
      end

      it 'returns a list of node types' do
        expect(json_response['node_types'].length).to eq 5
      end
    end

    context 'with ids' do
      let(:ids) {
        [
          node_types.first.id,
          node_types.last.id
        ]
      }
      before do
        get :index, ids: ids, format: :json
      end

      it 'returns 200 status code' do
        expect(response).to have_http_status(:success)
      end

      it 'returns a list of node types' do
        expect(json_response['node_types'].length).to eq 2
      end
    end
  end

  describe '#show' do
    before do
      get :show, id: node_types.first.id, format: :json
    end

    it 'returns 200 status code' do
      expect(response).to have_http_status(:success)
    end

    it 'returns a specific node type' do
      expect(json_response['node_type']['identifier']).to eq node_types.first.identifier
    end
  end

  def json_response
    JSON.parse(response.body)
  end
end
