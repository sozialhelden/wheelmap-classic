require 'spec_helper'

describe CategoriesController do

  before do
    category = FactoryGirl.create(:category)
    FactoryGirl.create_list(:node_type, 4, category: category)
  end

  describe 'GET #index' do
    before do
      get :index, format: 'json'
    end
    it 'returns HTTP 200 status code' do
      get :index, format: 'json'
      expect(response).to have_http_status(:success)
    end

    describe 'the response' do
      it 'has categories' do
        expect(json_response['categories'].length).to eq 1
      end
    end
  end

  context 'GET #show' do
    it 'returns HTTP 200 status code' do
      get :show, id: Category.first.id, format: 'json'
      expect(response).to have_http_status(:success)
    end
  end

  def json_response
    JSON.parse(response.body)
  end
end
