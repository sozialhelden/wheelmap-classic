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

        it 'creates a photo associated with the poi' do
          expect(poi.photos.count).to eq 1
        end

        it "creates a photo with the current user assigned" do
          photo = poi.photos.first
          expect(photo.user).to eq user
        end

        describe 'the response' do
          it 'has status 201 Created' do
            expect(response.status).to eql 201
          end

          it 'returns id' do
            photo = poi.photos.first
            expect(json_response['id']).to eq photo.id
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

        it 'does not save a new photo for the poi' do
          expect(poi.photos.count).to eq 0
        end
      end

      context 'with missing api key' do
        before do
          post(:create, :node_id => poi.id, :photo => fixture_file_upload('/placeholder.jpg'))
        end

        it 'returns 401 Unauthorized' do
          expect(response.status).to eq 401
        end

        it 'does not save a new photo for the poi' do
          expect(poi.photos.count).to eq 0
        end
      end

      context 'with invalid api key' do
        before do
          post(:create, :node_id => poi.id, api_key: '12354645543534534', :photo => fixture_file_upload('/placeholder.jpg'))
        end

        it 'does not save a new photo for the poi' do
          expect(poi.photos.count).to eq 0
        end

        it 'returns 401 Unauthorized' do
          expect(response.status).to eq 401
        end
      end

      context 'with non existant node' do
        before do
          post(:create, :node_id => 999999, :api_key => user.authentication_token, :photo => fixture_file_upload('/placeholder.jpg'))
        end

        it 'returns 404' do
          expect(response.status).to eq 404
        end

        it 'does not save a new measurement' do
          expect(poi.photos.count).to eq 0
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

    let :valid_steps_metadata do
      {
        type: 'steps',
        'description': 'Some user description',
        'data': {
          'height': 0.11
        }
      }.to_json
    end

    let :valid_ramp_metadata do
      {
        type: 'ramp',
        'description': 'Some user description',
        'data': {
          'angle': 15.42
        }
      }.to_json
    end

    let :valid_toilet_metadata do
      {
        type: 'toilet',
        'description': 'Some user description',
        'data': {
          'area': 15.42
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

    describe 'add steps metadata' do
      it 'accepts valid json' do
        post(:add_metadata, :node_id => poi.id, :measurement_id => measurement_id, :api_key => user.authentication_token, :metadata => valid_steps_metadata)
        expect(response.status).to eq 201
      end
    end

    describe 'add ramp metadata' do
      it 'accepts valid json' do
        post(:add_metadata, :node_id => poi.id, :measurement_id => measurement_id, :api_key => user.authentication_token, :metadata => valid_ramp_metadata)
        expect(response.status).to eq 201
      end
    end

    describe 'add toilet metadata' do
      it 'accepts valid json' do
        post(:add_metadata, :node_id => poi.id, :measurement_id => measurement_id, :api_key => user.authentication_token, :metadata => valid_toilet_metadata)
        expect(response.status).to eq 201
      end
    end
  end
end
