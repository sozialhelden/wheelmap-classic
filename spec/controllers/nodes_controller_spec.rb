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
    @default_user = Factory.create(:user)
    @another_user = Factory.create(:user, :email => 'test@rspec.org')
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
    
      it "should create CreateJob for given node attributes" do
        lambda{
            post(:create, :node => {:lat => '52.4', :lon => '13.9', :name => 'test name', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant'})
          }.should change(CreateJob, :count).by(1)
      end
      
      it "should have correct values for CreateJob" do
        post(:create, :node => {:lat => '52.4', :lon => '13.9', :name => 'test node', :wheelchair => 'yes', :wheelchair_description => 'All good', :type => 'restaurant'})
        job = YAML.load(CreateJob.last.handler)
        job.client.class.should == OpenStreetMap::OauthClient
        job.node.name.should == 'test node'
        job.node.wheelchair.should == 'yes'
        job.node.lat.should == 52.4
        job.node.lon.should == 13.9
      end
    
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

end
