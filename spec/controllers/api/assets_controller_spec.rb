require 'rails_helper'

describe Api::AssetsController do
  let(:user) { FactoryGirl.create(:user) }

  describe 'index action' do

    def json_response
      JSON.parse(response.body)
    end

    before do
      get :index, :api_key => user.authentication_token
    end

    it 'returns http 200 success' do
      expect(response.status).to eq 200
    end

    it 'returns valid json' do
      expect {
        json_response
      }.to_not raise_error
    end
  end
end
