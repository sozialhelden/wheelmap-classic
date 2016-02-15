# TODO reenable photo feature
require 'rails_helper'

describe PhotosController do
  include Devise::TestHelpers

  let :user do
    FactoryGirl.create(:user, :email => 'test@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  end

  let :another_user do
    FactoryGirl.create(:user, :email => 'another@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  end

  let :poi do
    FactoryGirl.create(:poi)
  end

  let :file do
    File.open(File.join('spec', 'fixtures','placeholder.jpg'))
  end

  context 'create photos' do

    context 'as anonymous user' do
      it "is not allowed to upload photos" do
        expect {
          post(:create, :photo => { :image => file }, :node_id => poi.id)
          expect(response.code).to eql "302"
        }.not_to change(Photo, :count)
      end
    end

    context 'as signed in user' do
      before :each do
        sign_in user
      end
      it "is allowed to upload photos" do
        expect {
          post(:create, :photo => { :image => file }, :node_id => poi.id, format: :json)
          expect(response.code).to eql "200"
        }.to change(Photo, :count).by(1)
      end
    end
  end

  context 'destroy photos' do

    let :photo do
      FactoryGirl.create(:photo, :image => file, :user => user, :poi => poi)
    end

    before :each do
      # make sure photo has been saved
      photo.save
    end

    context 'as anonymous user' do
      it "is not allowed to destroy photos" do
        expect {
          delete(:destroy, :id => photo.id, :node_id => poi.id)
        }.not_to change(Photo, :count)
        expect(response.code).to eql "302"
      end
    end

    context 'as signed in user' do

      context 'and not owner' do
        before :each do
          sign_in another_user
          request.env["HTTP_REFERER"]="/nodes/#{poi.id}"
        end
        it "is not allowed to upload photos" do
          expect {
            delete(:destroy, :id => photo.id, :node_id => poi.id)
            expect(response.code).to eql "403"
          }.not_to change(Photo, :count)
        end
      end

      context 'and owner' do
        before :each do
          sign_in user
          request.env["HTTP_REFERER"]="/nodes/#{poi.id}"
        end
        it "is allowed to upload photos" do
          expect {
            delete(:destroy, :id => photo.id, :node_id => poi.id)
            expect(response.code).to eql "302"
          }.to change(Photo, :count).by(-1)
        end
      end

    end

  end

end
