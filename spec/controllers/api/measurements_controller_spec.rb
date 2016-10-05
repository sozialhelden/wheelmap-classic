require 'rails_helper'

describe Api::MeasurementsController do
  let(:poi) { Poi.first }
  let(:user) { FactoryGirl.create(:user) }

  before do
    FactoryGirl.create(:poi)
  end

  describe 'create action' do
    def json_response
      JSON.parse(response.body)
    end

    before :all do
      User.delete_all
    end

    describe 'image upload' do
      context 'with valid params' do
        before do
          post(:create, :node_id => poi.id, :api_key => user.authentication_token, :photo => fixture_file_upload('/placeholder.jpg'))
        end

        describe 'the response' do
          it 'has status 201 Created' do
            expect(response.status).to eql 201
          end

          it 'returns id' do
            expect(json_response['id']).to eq 1234
          end
        end
      end

      context 'with missing image' do
        before do
          post(:create, :node_id => poi.id, :api_key => user.authentication_token)
        end

        it 'returns 400 Bad Request' do
          expect(response.status).to eq 400
        end

        specify 'the error message indicates that the image is missing' do
          expect(json_response['error']).to eq 'photo is missing'
        end
      end

      context 'with missing api key' do
        before do
          post(:create, :node_id => poi.id, :photo => fixture_file_upload('/placeholder.jpg'))
        end

        it 'returns 401 Unauthorized' do
          expect(response.status).to eq 401
        end
      end
    end
  end

  describe 'add metadata for image' do
    let(:measurement_id) { 1234 }
    let :valid_door_metadata do
      {
        type: 'door',
        'description': 'Some user description',
        'data': {
          'width': 1.04
        }
      }.to_json
    end

    it 'returns 404 if the node is not available' do
      post(:add_metadata, :node_id => 404, :measurement_id => measurement_id, :api_key => user.authentication_token, :metadata => valid_door_metadata)
      expect(response.status).to eq 404
    end

    describe 'add door metadata' do
      it 'accepts valid json' do
        post(:add_metadata, :node_id => poi.id, :measurement_id => measurement_id, :api_key => user.authentication_token, :metadata => valid_door_metadata)
        expect(response.status).to eq 201
      end
    end
  end
end
