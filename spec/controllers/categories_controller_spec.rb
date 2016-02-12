require 'spec_helper'

describe CategoriesController do
  let(:category) { FactoryGirl.create(:category) }

  context 'GET #index' do
    it 'returns HTTP 200 status code' do
      get :index, format: 'json'
      expect(response).to have_http_status(:success)
    end
  end

  context 'GET #show' do
    it 'returns HTTP 200 status code' do
      get :show, id: category.id, format: 'json'
      expect(response).to have_http_status(:success)
    end
  end
end
