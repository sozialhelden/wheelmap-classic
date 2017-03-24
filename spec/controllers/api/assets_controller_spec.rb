require 'rails_helper'

describe Api::AssetsController do
  let(:user) { FactoryGirl.create(:user) }

  describe 'index action' do
    def json_response
      JSON.parse(response.body)
    end

    before do
      get :index, api_key: user.authentication_token
    end

    it 'returns http 200 success' do
      expect(response.status).to eq 200
    end

    it 'returns valid json' do
      expect do
        json_response
      end.to_not raise_error
    end

    describe 'the json response' do
      let(:assets) { json_response['assets'] }

      describe 'marker' do
        let(:marker) { assets.find { |asset| asset['name'] == 'marker' } }
        it 'has correct url' do
          expect(marker['url']).to eq 'https://localhost:3000/marker.zip'
        end
      end

      describe 'icons' do
        let(:icons) { assets.find { |asset| asset['name'] == 'icons' } }
        it 'has correct url' do
          expect(icons['url']).to eq 'https://localhost:3000/icons.zip'
        end
      end
    end
  end
end
