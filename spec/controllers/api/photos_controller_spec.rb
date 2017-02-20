require 'rails_helper'

describe Api::PhotosController do

  before :all do
    User.delete_all
  end

  let :user do
    FactoryGirl.create(:user)
  end

  let :poi do
    FactoryGirl.create(:poi)
  end

  let :photo do
    FactoryGirl.create(:photo, :user => user, :poi => poi)
  end

  context 'index action' do

    before :each do
      3.times do
        FactoryGirl.create(:photo, :user => user, :poi => poi)
      end
    end

    it "should scope photos to given node" do
      expect(subject).to receive(:parent).and_return(poi)
      expect(poi).to receive(:photos).and_return(Photo.all)
      get(:index, :node_id => poi.id, :api_key => user.api_key)
      expect(response).to be_success
    end

    it "should scope photos to given user" do
      expect(subject).to receive(:parent).and_return(user)
      expect(user).to receive(:photos).and_return(Photo.all)
      get(:index, :url => api_user_photos_path, :api_key => user.api_key)
      expect(response).to be_success
    end

    context 'format json' do

      it "should render json when using accept header" do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, :node_id => poi.id, :api_key => user.api_key)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:json)
      end

      it "should render json as default format" do
        get(:index, :node_id => poi.id, :api_key => user.api_key)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:json)
      end
    end

    context 'format xml' do

      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it "should render xml when using accept header" do
        get(:index, :node_id => poi.id, :api_key => user.api_key)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:xml)
      end
    end
  end

  context 'create action' do

    before :each do
      user.save!
      poi.save!
    end

    it "is possible to upload images for a given node" do
      expect {
        post(:create, :node_id => poi.id, :api_key => user.api_key, :photo => fixture_file_upload('/placeholder.jpg'))
        expect(response.status).to eql 201
      }.to change(Photo, :count).by(1)
    end
  end

  context 'destroy action' do
    before :each do
      photo.save!
    end

    let :another_photo do
      FactoryGirl.create(:photo)
    end

    it "is possible to delete images for a given node" do
      delete(:destroy, :id => photo.id, :node_id => poi.id, :api_key => user.api_key)
      expect(response.code).to eql "200"
    end

    it "is possible to delete images for a given user" do
      delete(:destroy, :id => photo.id, :url => api_user_photo_path(photo), :api_key => user.api_key)
      expect(response.code).to eql "200"
    end

    it "is not possible to delete an image, which does not belong to given node" do
      delete(:destroy, :id => another_photo.id, :node_id => poi.id, :api_key => user.api_key)
      expect(response.code).to eql "403"
    end

    it "is not possible to delete an image, which does not belong to given user" do
      delete(:destroy, :id => another_photo.id, :url => api_user_photo_path(another_photo), :api_key => user.api_key)
      expect(response.code).to eql "403"
    end

    it "is not possible to delete an image, which belongs to a node, but not to the current user" do
      delete(:destroy, :id => another_photo.id, :node_id => another_photo.poi.id, :api_key => user.api_key)
      expect(response.code).to eql "403"
    end
  end

end
