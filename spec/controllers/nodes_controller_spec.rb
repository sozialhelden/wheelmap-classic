require 'spec_helper'

class UpdateJob < ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

class CreateJob < ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

class UpdateAttributeJob <ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

describe NodesController do
  include Devise::TestHelpers

  before(:each) do
    # default visitor user
    @base_url = "#{OpenStreetMapConfig.oauth_site}/api/0.6"
    @default_user = Factory.create(:user, :email => 'visitor@wheelmap.org')
    @another_user = Factory.create(:user, :email => 'test@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  end

  describe "action show" do

    before(:each) do
     FakeWeb.allow_net_connect = false
     @full_url = "#{@base_url}/node/16581933"
    end

    it "should show node view" do
      Poi.should_receive(:find).with(123).and_return(:a_node)
      get(:show, :id => 123)
      assigns(:node).should eql(:a_node)
      response.should be_success
    end

    it "should render not found page" do
      get(:show, :id => 123)
      response.should_not be_success
      response.code.should eql('404')
    end

  end

  describe "action edit" do

    before(:each) do
     @another_user.should be_app_authorized
     sign_in @another_user

     FakeWeb.allow_net_connect = false
     @full_url = "#{@base_url}/node/16581933"
    end

    it "should send Hoptoad message in case OpenStreetMap API times out" do
      stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/node/16581933").to_return(:status => 503, :body => "Not Available", :headers => {})

      get(:edit, :id => 16581933)
      response.code.should == '503'
    end

    it "should send Hoptoad message in case OpenStreetMap Node was deleted" do
      stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/node/16581933").to_return(:status => 410, :body => "Gone", :headers => {})

      get(:edit, :id => 16581933)
      response.code.should == '410'
    end

    it "should send Hoptoad message in case OpenStreetMap Node was not found" do
      stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/node/16581933").to_return(:status => 404, :body => "Not found", :headers => {})

      get(:edit, :id => 16581933)
      response.code.should == '404'
    end
  end

  describe "action update wheelchair" do
    describe "as anonymous user" do
      it "should create am UpdateWheelchairJob " do
        lambda {
          put(:update_wheelchair, :id => 1234, :wheelchair => 'yes')
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
  end

  describe "action: update" do
    before(:each) do
      FakeWeb.allow_net_connect = false
      @full_url = "#{@base_url}/node/84644746"
    end

    describe "signed_in" do

      before(:each) do
        @another_user.should be_app_authorized
        sign_in @another_user
      end

      it "should create UpdateJob for given node" do
        FakeWeb.register_uri(:get, @full_url, :body => "#{Rails.root}/spec/fixtures/node.xml", :content_type => 'text/xml')
         lambda{
            put(:update, :id => 84644746, :node => {:wheelchair => 'yes', :name => 'A nice place', :type => 'cafe'})
          }.should change(UpdateJob, :count).by(1)
          response.should redirect_to(node_path(84644746))
      end

      it "should have correct values for UpdateJob" do
        FakeWeb.register_uri(:get, @full_url, :body => "#{Rails.root}/spec/fixtures/node.xml", :content_type => 'text/xml')
        lambda{
          put(:update, :id => 84644746, :node => {:id => 84644746, :wheelchair => 'yes', :name => 'A nice place', :type => 'cafe'})
        }.should change(UpdateJob, :count).by(1)
        response.should redirect_to(node_path(84644746))
        job = YAML.load(UpdateJob.last.handler)
        job.client.class.should == OpenStreetMap::OauthClient
        job.node.id.should == 84644746
        job.node.wheelchair.should == 'yes'
      end

      it "should not update node if wheelchair is missing" do
        response = put(:update, :id => 1234)
        response.code.should == '406'
        response.body.should == "Params missing"
      end

    end

    describe "anonymous" do
      it "should not create UpdateJob for given node" do
        FakeWeb.register_uri(:get, @full_url, :body => "#{Rails.root}/spec/fixtures/node.xml", :content_type => 'text/xml')
         lambda{
            put(:update, :id => 84644746, :node => {:wheelchair => 'yes'})
            response.should be_redirect
          }.should change(UpdateJob, :count).by(0)
      end
    end
  end

  describe "action: create" do

    describe "signed_in" do

      before(:each) do
        @another_user.should be_app_authorized
        sign_in @another_user
      end

      it "does not create an CreateJob for given node attributes" do
        request.env['ACCEPT'] = "*/*"

        lambda{
          post(:create, {:commit=>"Ort anlegen", :node => {:lat => '52.4', :lon => '13.9', :name => 'test name', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant', :city=>"", :housenumber=>"", :postcode=>"", :wheelchair_description=>"", :street=>"",:phone=>"", :website=>""}})
          response.code.should == '302'
        }.should change(CreateJob, :count).by(0)
      end

      it "creates a QueuedNode for given node" do
        request.env['ACCEPT'] = "*/*"

        lambda{
          post(:create, {:commit=>"Ort anlegen", :node => {:lat => '52.4', :lon => '13.9', :name => 'test name', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant', :city=>"", :housenumber=>"", :postcode=>"", :wheelchair_description=>"", :street=>"",:phone=>"", :website=>""}})
          response.code.should == '302'
        }.should change(OpenStreetMap::QueuedNode, :count).by(1)
      end

      it "stores the right stuff in a QueuedNode for given node" do
        request.env['ACCEPT'] = "*/*"
        node_attributes = {:lat => '52.4', :lon => '13.9', :name => 'test name', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant', :city=>"", :housenumber=>"", :postcode=>"", :wheelchair_description=>"", :street=>"",:phone=>"", :website=>""}
        post(:create, {:commit=>"Ort anlegen", :node => node_attributes })

        job = OpenStreetMap::QueuedNode.last
        job.user_id.should == @another_user.id

        JSON::parse(job.node_attributes).should == node_attributes.stringify_keys!
      end


      it "should create not CreateJob for given node when posted with iPhone" do
        # iPhone 1.1 sends invariant accept header */*
        http_credentials = Base64.encode64("#{@another_user.email}:password")
        @request.env["HTTP_ACCEPT"]           = "*/*"
        @request.env["HTTP_USER_AGENT"]       = "Wheelmap/1.1 CFNetwork/485.13.9 Darwin/11.0.0"
        @request.env["HTTP_ACCEPT_LANGUAGE"]  = "de-de"
        @request.env["HTTP_AUTHORIZATION"]    = "Basic #{http_credentials}"
        lambda{
          post(:create, {:node => {"lon"=>"13.388226983333330944", "name"=>"Bio COMPANY", "wheelchair"=>"yes", "wheelchair_description"=>"Bio bio", "type"=>"supermarket", "lat"=>"52.52287699999996928"}})
        }.should change(CreateJob, :count).by(0)
      end

      it "should create a QueuedNode for given node when posted with iPhone" do
        # iPhone 1.1 sends invariant accept header */*
        http_credentials = Base64.encode64("#{@another_user.email}:password")
        @request.env["HTTP_ACCEPT"]           = "*/*"
        @request.env["HTTP_USER_AGENT"]       = "Wheelmap/1.1 CFNetwork/485.13.9 Darwin/11.0.0"
        @request.env["HTTP_ACCEPT_LANGUAGE"]  = "de-de"
        @request.env["HTTP_AUTHORIZATION"]    = "Basic #{http_credentials}"
        lambda{
          post(:create, {:node => {"lon"=>"13.388226983333330944", "name"=>"Bio COMPANY", "wheelchair"=>"yes", "wheelchair_description"=>"Bio bio", "type"=>"supermarket", "lat"=>"52.52287699999996928"}})
        }.should change(OpenStreetMap::QueuedNode, :count).by(1)
      end

      it "stores the right stuff in a QueuedNode for given node when posted with iPhone" do
        # iPhone 1.1 sends invariant accept header */*
        http_credentials = Base64.encode64("#{@another_user.email}:password")
        @request.env["HTTP_ACCEPT"]           = "*/*"
        @request.env["HTTP_USER_AGENT"]       = "Wheelmap/1.1 CFNetwork/485.13.9 Darwin/11.0.0"
        @request.env["HTTP_ACCEPT_LANGUAGE"]  = "de-de"
        @request.env["HTTP_AUTHORIZATION"]    = "Basic #{http_credentials}"
        node_attributes = {"lon"=>"13.388226983333330944", "name"=>"Bio COMPANY", "wheelchair"=>"yes", "wheelchair_description"=>"Bio bio", "type"=>"supermarket", "lat"=>"52.52287699999996928"}
        post(:create, {:node => node_attributes})
        job = OpenStreetMap::QueuedNode.last
        job.user_id.should == @another_user.id

        JSON::parse(job.node_attributes).should == node_attributes.stringify_keys!
      end

      # it "should have correct values for CreateJob" do
      #   post(:create, :node => {:lat => '52.4', :lon => '13.9', :name => 'test node', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant'})
      #   job = YAML.load(CreateJob.last.handler)
      #   job.client.class.should == OpenStreetMap::OauthClient
      #   job.node.name.should == 'test node'
      #   job.node.wheelchair.should == 'yes'
      #   job.node.lat.should == 52.4
      #   job.node.lon.should == 13.9
      # end

      it "should not create node if node is missing" do
        response = post(:create, :id => 1234)
        response.code.should == '406'
        response.body.should == "Params missing"
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
      NodeType.destroy_all
      @bar_node = Factory(:poi, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})
      @bar_node.tags['amenity'] = 'bar'
      @bar_node.type = 'bar'
      @bar_node.save!
      @bar_node.reload
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
      node['tags'].should == {}
    end
  end

end
