require 'spec_helper'

describe Api::PhotosController do

  before :all do
    User.delete_all
  end

  let :user do
    Factory.create(:user)
  end

  let :poi do
    Factory.create(:poi)
  end

  let :photo do
    Factory.create(:photo, :user => user, :poi => poi)
  end

  context 'index action' do

    before :each do
      3.times do
        Factory.create(:photo, :user => user, :poi => poi)
      end
    end

    it "should scope photos to given node" do
      subject.should_receive(:parent).and_return(poi)
      poi.should_receive(:photos).and_return(Photo.scoped({}))
      get(:index, :node_id => poi.id, :api_key => user.authentication_token)
      response.should be_success
    end

    it "should scope photos to given user" do
      subject.should_receive(:parent).and_return(user)
      user.should_receive(:photos).and_return(Photo.scoped({}))
      get(:index, :url => api_user_photos_path, :api_key => user.authentication_token)
      response.should be_success
    end

    context 'format json' do

      it "should render json when using accept header" do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, :node_id => poi.id, :api_key => user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:json)
      end

      it "should render json as default format" do
        get(:index, :node_id => poi.id, :api_key => user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:json)
      end
    end

    context 'format xml' do

      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it "should render xml when using accept header" do
        get(:index, :node_id => poi.id, :api_key => user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:xml)
      end
    end
  end

  context 'create action' do
  end

  context 'destroy action' do
  end

end
