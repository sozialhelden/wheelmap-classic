# encoding: UTF-8
require 'rails_helper'
require "cacheable_flash/test_helpers"

class UpdateJob < ActiveRecord::Base
  self.table_name = 'delayed_jobs'
end

class CreateJob < ActiveRecord::Base
  self.table_name = 'delayed_jobs'
end

class UpdateAttributeJob <ActiveRecord::Base
  self.table_name = 'delayed_jobs'
end

describe NodesController do
  include CacheableFlash::TestHelpers

  fixtures :node_types

  before(:each) do
    #Poi.destroy_all

    # default visitor user
    @base_url = "#{OpenStreetMapConfig.oauth_site}/api/0.6"
    @default_user = FactoryGirl.create(:user, :email => 'visitor@wheelmap.org', :oauth_token =>'token', :oauth_secret => 'secret')
    @another_user = FactoryGirl.create(:user, :email => 'test@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  end

  describe "action show" do

    before(:each) do
     WebMock.disable_net_connect!
     @full_url = "#{@base_url}/node/16581933"
    end

    let :node do
      FactoryGirl.build(:poi)
    end

    it "should show node view" do
      expect(Poi).to receive(:find).with('123').and_return(node)
      get(:show, :id => 123)
      expect(assigns(:node)).to eql(node)
      expect(response).to be_success
    end

    it "should render not found page" do
      get(:show, :id => 54385)
      expect(response).not_to be_success
      expect(response.code).to eql('404')
    end

  end

  describe "action edit" do

    let :node do
      FactoryGirl.build(:poi)
    end

    before(:each) do
     expect(@another_user).to be_app_authorized
     sign_in @another_user

     WebMock.disable_net_connect!
     @full_url = "#{@base_url}/node/16581933"
    end

    # TODO reenable feature terms
    it "should redirect user to EULA page if terms and privacy policy was not accepted" do
      @another_user.update_attributes(:terms => false, :privacy_policy => false)
      get(:edit, :id => 16581933)

      expect(response.code).to eq('302')
    end

    it "should redirect user to EULA page if privacy policy was not accepted" do
      @another_user.update_attributes(:terms => true, :privacy_policy => false)
      get(:edit, :id => 16581933)

      expect(response.code).to eq('302')
    end

    it "should redirect user to EULA page if privacy policy was not accepted" do
      @another_user.update_attributes(:terms => false, :privacy_policy => true)
      get(:edit, :id => 16581933)

      expect(response).to redirect_to terms_path
    end

    it "should not redirect user if terms and privacy policy were accepted" do
      @another_user.update_attributes(:terms => true, :privacy_policy => true)
      node.save!
      get(:edit, :id => node.osm_id)
      expect(response.code).to eql '200'
    end

  end

  describe "action update wheelchair" do

    before :each do
      @poi = FactoryGirl.create(:poi)
    end

    describe "as anonymous user" do
      it "should create am UpdateWheelchairJob " do
        expect {
          put(:update_wheelchair, :id => @poi.osm_id, :wheelchair => 'yes')
          expect(response.code).to eq('200')
        }.to change(UpdateAttributeJob, :count).by(1)
      end

      it "should not create an UpdateWheelchairJob if params missing" do
        expect {
          put(:update_wheelchair, :id => 1234, :wheelchair => '')
        }.to change(UpdateAttributeJob, :count).by(0)
        expect(response.code).to eq('406')
        expect(response.body).to eq("Params missing")
      end
    end

    describe "as a signed_in user" do

      before(:each) do
        expect(@another_user).to be_app_authorized
        sign_in @another_user
      end

      it "should create am UpdateWheelchairJob on behalf of signed in user" do
        expect {
          put(:update_wheelchair, :id => @poi.osm_id, :wheelchair => 'yes')
          expect(response.code).to eq('200')
        }.to change(UpdateAttributeJob, :count).by(1)
        expect(Delayed::Job.last.handler).to match(/id: #{@another_user.id}/)
      end
    end
  end

  describe "action: update" do
    before(:each) do
      WebMock.disable_net_connect!
      @full_url = "#{@base_url}/node/84644746"
    end

    let! :poi do
      FactoryGirl.create(:poi)
    end

    let! :node_type do
      FactoryGirl.create(:node_type, osm_key: 'tourism', osm_value: 'hotel', identifier: 'hotel')
    end

    describe "signed_in" do

      before(:each) do
        expect(@another_user).to be_app_authorized
        sign_in @another_user
        expect(poi.tags['amenity']).to eq('bar')
      end

      it "should create UpdateJob for given node" do
        stub_request(:get, @full_url).to_return(:status => 200, :body => "#{Rails.root}/spec/fixtures/node.xml", :headers => { 'Content-Type' => 'text/xml'})
         expect{
            put(:update, :id => poi.osm_id, :node => {:wheelchair => 'yes', :name => 'A nice place', :node_type_id => node_type.id })
            expect(response.code).to eq('302')
            expect(flash_cookie["notice"]).to eq("Vielen Dank, der Eintrag wurde gespeichert und wird demnächst aktualisiert.")
          }.to change(UpdateJob, :count).by(1)
          expect(response).to redirect_to(node_path(poi))
      end

      it "should have correct values for UpdateJob" do
        stub_request(:get, @full_url).to_return(:status => 200, :body => "#{Rails.root}/spec/fixtures/node.xml", :headers => { 'Content-Type' => 'text/xml'})
        expect{
          put(:update, :id => poi.osm_id, :node => {:wheelchair => 'yes', :name => 'A nice place', :node_type_id => node_type.id })
        }.to change(UpdateJob, :count).by(1)
        expect(response).to redirect_to(node_path(poi.osm_id))
        job = YAML.load(UpdateJob.last.handler)
        expect(job.client.class).to eq(Rosemary::OauthClient)
        expect(job.element_id).to eq(poi.osm_id)
        expect(job.tags['wheelchair']).to eq('yes')
        expect(job.tags['tourism']).to eq('hotel')
        expect(job.tags['amenity']).to be_blank
      end

      it "should not update node if wheelchair is missing" do
        response = put(:update, :id => 1234)
        expect(response.code).to eq('406')
        expect(response.body).to eq("Params missing")
      end

    end

    describe "anonymous" do
      it "should not create UpdateJob for given node" do
        stub_request(:get, @full_url).to_return(:status => 200, :body => "#{Rails.root}/spec/fixtures/node.xml", :headers => { 'Content-Type' => 'text/xml'})
         expect{
            put(:update, :id => 84644746, :node => {:wheelchair => 'yes'})
            expect(response).to be_redirect
          }.to change(UpdateJob, :count).by(0)
      end
    end
  end

  describe "creating a node" do

    describe "as a signed_in user" do

      before(:each) do
        expect(@another_user).to be_app_authorized
        sign_in @another_user
      end

      it "does create an CreateJob for given node attributes" do
        request.env['ACCEPT'] = "*/*"

        expect{
          post(:create, {:commit=>"Ort anlegen", :node => {:lat => '52.4', :lon => '13.9', :name => 'test name',
               :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant', :city=>"",
               :housenumber=>"", :postcode=>"", :street=>"",:phone=>"", :website=>""}})
          expect(response.code).to eq('302')
          expect(flash_cookie["notice"]).to eq("Vielen Dank, der Eintrag wurde gespeichert und wird demnächst aktualisiert.")
        }.to change(CreateJob, :count).by(1)
      end

      it "should create CreateJob for given node when posted with iPhone" do
        # iPhone 1.1 sends invariant accept header */*
        http_credentials = Base64.encode64("#{@another_user.email}:password")
        @request.env["HTTP_ACCEPT"]           = "*/*"
        @request.env["HTTP_USER_AGENT"]       = "Wheelmap/1.1 CFNetwork/485.13.9 Darwin/11.0.0"
        @request.env["HTTP_ACCEPT_LANGUAGE"]  = "de-de"
        @request.env["HTTP_AUTHORIZATION"]    = "Basic #{http_credentials}"
        expect{
          post(:create, {:node => {"lon"=>"13.388226983333330944", "name"=>"Bio COMPANY", "wheelchair"=>"yes",
               "wheelchair_description"=>"Bio bio", "type"=>"supermarket", "lat"=>"52.52287699999996928"}})
        }.to change(CreateJob, :count).by(1)
      end

      it "should not create node if node is missing" do
        response = post(:create, :id => 'missing')
        expect(response.code).to eq('406')
        expect(response.body).to eq("Params missing")
      end

      it "should update node if node is a way" do
        poi = FactoryGirl.create(:poi)
        response = post(:update, :id => poi.osm_id, :node => { :name => "foo" })
        expect(response.code).to eq('302')
      end

      it "should allow editing node if node is a way" do
        FactoryGirl.create(:poi, :osm_id => -28)
        response = get(:edit, :id => -28)
        expect(response.code).to eq("200")
      end

      it "should redirect if app is not connected" do
        expect(controller.current_user).to receive(:app_authorized?).and_return(false)
        post(:create, :node => {:lat => '52.4', :lon => '13.9', :name => 'test node', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant'})
        expect(response.code).to eq('302')
      end

      it "should not redirect if app is not connected and called from iphone" do
        expect(controller.current_user).to receive(:app_authorized?).and_return(false)
        allow(request).to receive(:user_agent).and_return("Wheelmap")
        post(:create, :node => {:lat => '52.4', :lon => '13.9', :name => 'test node', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant'})
        expect(response.code).to eq('403')
      end
    end

    describe "anonymous" do

      it "should redirect to sign_in page" do
        post(:create, :node => {:name => 'test node', :wheelchair => 'yes', :lat => '52.4', :lon => '13.9'})
        expect(response).to redirect_to 'http://test.host/users/sign_in'
      end
    end

  end

  describe 'action: index' do
    render_views

    let(:provider) {
      FactoryGirl.create(:provider)
    }

    before(:each) do
      Poi.destroy_all
      request.env['HTTP_ACCEPT'] = 'application/json; subtype=geojson'
      @poi = FactoryGirl.create(:poi, :providers => [provider])
      2.times {
        FactoryGirl.create(:poi, :providers => [FactoryGirl.create(:provider)])
      }
    end

    it 'should render legacy json representation for iphone', :tag => 'fu' do
      get(:index, format: 'js', bbox: '12.0,51.0,14.0,53.0')
      expect(response.code).to eq('200')
      expect(response.body).not_to be_empty
      json = ActiveSupport::JSON.decode(response.body)
      node = json.last
      expect(node['category']).not_to be_blank
      expect(node['id']).not_to be_blank
      expect(node['lat']).not_to be_blank
      expect(node['lon']).not_to be_blank
      expect(node['wheelchair']).not_to be_blank
      expect(node['type']).not_to be_blank
      expect(node['tags'].class).to eql Hash
      expect(node['tags']['wheelchair:description']).to eql 'Yes, we have a ramp.'
    end

    it 'should render geojson representation of provided pois' do
      get :tiles, { format: 'geojson', x: 17595, y: 10754, z: 15, :provider_id => provider.id}
      expect(response).to be_success
      expect(response.body).not_to be_empty
      feature_collection = ActiveSupport::JSON.decode(response.body)
      features = feature_collection['features']
      features.each do |feature|
        expect(feature['properties']['sponsor']).to be_blank
        expect(feature['properties']['category']).not_to be_blank
        expect(feature['properties']['id']).not_to be_blank
      end
    end

  end

end
