# encoding: UTF-8
require 'spec_helper'
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
    Poi.delete_all

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
      Poi.should_receive(:find).with('123').and_return(node)
      get(:show, :id => 123)
      assigns(:node).should eql(node)
      response.should be_success
    end

    it "should render not found page" do
      get(:show, :id => 123)
      response.should_not be_success
      response.code.should eql('404')
    end

  end

  describe "action edit" do

    let :node do
      FactoryGirl.build(:poi)
    end

    before(:each) do
     @another_user.should be_app_authorized
     sign_in @another_user

     WebMock.disable_net_connect!
     @full_url = "#{@base_url}/node/16581933"
    end

    # TODO reenable feature terms
    it "should redirect user to EULA page if terms and privacy policy was not accepted" do
      @another_user.update_attributes(:terms => false, :privacy_policy => false)
      get(:edit, :id => 16581933)

      response.code.should == '302'
    end

    it "should redirect user to EULA page if privacy policy was not accepted" do
      @another_user.update_attributes(:terms => true, :privacy_policy => false)
      get(:edit, :id => 16581933)

      response.code.should == '302'
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

      expect(response).to redirect_to root_path(anchor: "/nodes/#{node.osm_id}/edit")
    end

  end

  describe "action update wheelchair" do

    before :each do
      @poi = FactoryGirl.create(:poi, :osm_id => 1234)
    end

    describe "as anonymous user" do
      it "should create am UpdateWheelchairJob " do
        lambda {
          put(:update_wheelchair, :id => 1234, :wheelchair => 'yes')
          response.code.should == '200'
        }.should change(UpdateAttributeJob, :count).by(1)
      end

      it "should not create an UpdateWheelchairJob if params missing" do
        lambda {
          put(:update_wheelchair, :id => 1234, :wheelchair => '')
        }.should change(UpdateAttributeJob, :count).by(0)
        response.code.should == '406'
        response.body.should == "Params missing"
      end
    end

    describe "as a signed_in user" do

      before(:each) do
        @another_user.should be_app_authorized
        sign_in @another_user
      end

      it "should create am UpdateWheelchairJob on behalf of signed in user" do
        lambda {
          put(:update_wheelchair, :id => 1234, :wheelchair => 'yes')
          response.code.should == '200'
        }.should change(UpdateAttributeJob, :count).by(1)
        Delayed::Job.last.handler.should =~ /id: #{@another_user.id}/
      end
    end
  end

  describe "action: update" do
    before(:each) do
      WebMock.disable_net_connect!
      @full_url = "#{@base_url}/node/84644746"
    end

    let! :poi do
      FactoryGirl.create(:poi, :osm_id => 84644746)
    end

    describe "signed_in" do

      before(:each) do
        @another_user.should be_app_authorized
        sign_in @another_user

      end

      it "should create UpdateJob for given node" do
        stub_request(:get, @full_url).to_return(:status => 200, :body => "#{Rails.root}/spec/fixtures/node.xml", :headers => { 'Content-Type' => 'text/xml'})
         lambda{
            put(:update, :id => 84644746, :node => {:wheelchair => 'yes', :name => 'A nice place', :type => 'cafe'})
            response.code.should == '302'
            flash_cookie["notice"].should == "Vielen Dank, der Eintrag wurde gespeichert und wird demnächst aktualisiert."
          }.should change(UpdateJob, :count).by(1)
          response.should redirect_to(node_path(84644746))
      end

      it "should have correct values for UpdateJob" do
        stub_request(:get, @full_url).to_return(:status => 200, :body => "#{Rails.root}/spec/fixtures/node.xml", :headers => { 'Content-Type' => 'text/xml'})
        lambda{
          put(:update, :id => 84644746, :node => {:id => 84644746, :wheelchair => 'yes', :name => 'A nice place', :type => 'cafe'})
        }.should change(UpdateJob, :count).by(1)
        response.should redirect_to(node_path(84644746))
        job = YAML.load(UpdateJob.last.handler)
        job.client.class.should == Rosemary::OauthClient
        job.element_id.should == 84644746
        job.tags['wheelchair'].should == 'yes'
      end

      it "should not update node if wheelchair is missing" do
        response = put(:update, :id => 1234)
        response.code.should == '406'
        response.body.should == "Params missing"
      end

    end

    describe "anonymous" do
      it "should not create UpdateJob for given node" do
        stub_request(:get, @full_url).to_return(:status => 200, :body => "#{Rails.root}/spec/fixtures/node.xml", :headers => { 'Content-Type' => 'text/xml'})
         lambda{
            put(:update, :id => 84644746, :node => {:wheelchair => 'yes'})
            response.should be_redirect
          }.should change(UpdateJob, :count).by(0)
      end
    end
  end

  describe "creating a node" do

    describe "as a signed_in user" do

      before(:each) do
        @another_user.should be_app_authorized
        sign_in @another_user
      end

      it "does create an CreateJob for given node attributes" do
        request.env['ACCEPT'] = "*/*"

        lambda{
          post(:create, {:commit=>"Ort anlegen", :node => {:lat => '52.4', :lon => '13.9', :name => 'test name',
               :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant', :city=>"",
               :housenumber=>"", :postcode=>"", :wheelchair_description=>"", :street=>"",:phone=>"", :website=>""}})
          response.code.should == '302'
          flash_cookie["notice"].should == "Vielen Dank, der Eintrag wurde gespeichert und wird demnächst aktualisiert."
        }.should change(CreateJob, :count).by(1)
      end

      it "should create CreateJob for given node when posted with iPhone" do
        # iPhone 1.1 sends invariant accept header */*
        http_credentials = Base64.encode64("#{@another_user.email}:password")
        @request.env["HTTP_ACCEPT"]           = "*/*"
        @request.env["HTTP_USER_AGENT"]       = "Wheelmap/1.1 CFNetwork/485.13.9 Darwin/11.0.0"
        @request.env["HTTP_ACCEPT_LANGUAGE"]  = "de-de"
        @request.env["HTTP_AUTHORIZATION"]    = "Basic #{http_credentials}"
        lambda{
          post(:create, {:node => {"lon"=>"13.388226983333330944", "name"=>"Bio COMPANY", "wheelchair"=>"yes",
               "wheelchair_description"=>"Bio bio", "type"=>"supermarket", "lat"=>"52.52287699999996928"}})
        }.should change(CreateJob, :count).by(1)
      end

      it "should not create node if node is missing" do
        response = post(:create, :id => 1234)
        response.code.should == '406'
        response.body.should == "Params missing"
      end

      it "should update node if node is a way" do
        p = FactoryGirl.create(:poi, :osm_id => -28)
        response = post(:update, :id => -28, :node => { :name => "foo" })
        response.code.should == '302'
      end

      it "should allow editing node if node is a way" do
        p = FactoryGirl.create(:poi, :osm_id => -28)
        response = get(:edit, :id => -28)
        expect(response).to redirect_to root_path(anchor: "/nodes/-28/edit")
      end

      it "should redirect if app is not connected" do
        controller.current_user.should_receive(:app_authorized?).and_return(false)
        post(:create, :node => {:lat => '52.4', :lon => '13.9', :name => 'test node', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant'})
        response.code.should == '302'
      end

      it "should not redirect if app is not connected and called from iphone" do
        controller.current_user.should_receive(:app_authorized?).and_return(false)
        request.stub!(:user_agent).and_return("Wheelmap")
        post(:create, :node => {:lat => '52.4', :lon => '13.9', :name => 'test node', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant'})
        response.code.should == '403'
      end
    end

    describe "anonymous" do

      it "should redirect to sign_in page" do
        post(:create, :node => {:name => 'test node', :wheelchair => 'yes', :lat => '52.4', :lon => '13.9'})
        response.should redirect_to 'http://test.host/users/sign_in'
      end
    end

  end

  describe "action: index" do
    before(:each) do
      Poi.destroy_all
      NodeType.destroy_all
      @bar_node = FactoryGirl.create(:poi, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})
      @bar_node.tags['wheelchair:description'] = 'Bitte klingeln.'
      @bar_node.tags['amenity'] = 'bar'
      @bar_node.type = 'bar'
      @bar_node.save!
      @bar_node.reload
      @bar_node.category.should_not be_nil
    end

    it "should render legacy json representation for iphone" do
      response = get(:index, :format => 'js', :bbox => "12.0,51.0,14.0,53.0")
      response.code.should == "200"
      response.body.should_not be_empty
      json = ActiveSupport::JSON.decode(response.body)
      node = json.first
      node['category'].should_not be_blank
      node['id'].should_not be_blank
      node['lat'].should_not be_blank
      node['lon'].should_not be_blank
      node['wheelchair'].should_not be_blank
      node['type'].should_not be_blank
      node['tags'].class.should eql Hash
      node['tags']['wheelchair:description'].should eql "Bitte klingeln."
    end
  end

end
