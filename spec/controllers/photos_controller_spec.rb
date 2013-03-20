# TODO reenable photo feature
require 'spec_helper'

describe PhotosController do
  include Devise::TestHelpers

  let :user do
    Factory.create(:user, :email => 'test@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  end

  let :another_user do
    Factory.create(:user, :email => 'another@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  end

  let :poi do
    Factory.create(:poi)
  end

  let :file do
    File.open(File.join('spec', 'fixtures','placeholder.jpg'))
  end

  context 'create photos' do

    context 'as anonymous user' do
      it "is not allowed to upload photos" do
        lambda {
          post(:create, :photo => { :image => file }, :node_id => poi.id)
          response.code.should eql "302"
        }.should_not change(Photo, :count)
      end
    end

    context 'as signed in user' do
      before :each do
        sign_in user
      end
      it "is allowed to upload photos" do
        lambda {
          post(:create, :photo => { :image => file }, :node_id => poi.id)
          response.code.should eql "200"
        }.should change(Photo, :count).by(1)
      end
    end
  end

  context 'destroy photos' do

    let :photo do
      Factory.create(:photo, :image => file, :user => user, :poi => poi)
    end

    before :each do
      # make sure photo has been saved
      photo.save
    end

    context 'as anonymous user' do
      it "is not allowed to destroy photos" do
        lambda {
          delete(:destroy, :id => photo.id, :node_id => poi.id)
        }.should_not change(Photo, :count)
        response.code.should eql "302"
      end
    end

    context 'as signed in user' do

      context 'and not owner' do
        before :each do
          sign_in another_user
          request.env["HTTP_REFERER"]="/nodes/#{poi.id}"
        end
        it "is not allowed to upload photos" do
          lambda {
            delete(:destroy, :id => photo.id, :node_id => poi.id)
            response.code.should eql "403"
          }.should_not change(Photo, :count)
        end
      end

      context 'and owner' do
        before :each do
          sign_in user
          request.env["HTTP_REFERER"]="/nodes/#{poi.id}"
        end
        it "is allowed to upload photos" do
          lambda {
            delete(:destroy, :id => photo.id, :node_id => poi.id)
            response.code.should eql "302"
          }.should change(Photo, :count).by(-1)
        end
      end

    end

  end

end
