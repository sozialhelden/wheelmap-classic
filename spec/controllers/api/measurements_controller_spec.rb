require 'rails_helper'

describe Api::MeasurementsController do
  describe 'create action' do
    let(:poi) { FactoryGirl.create(:poi) }
    let(:user) { FactoryGirl.create(:user) }

    def json_response
      JSON.parse(response.body)
    end

    before :all do
      User.delete_all
    end

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
