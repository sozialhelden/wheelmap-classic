require 'spec_helper'

class UpdateJob < ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

class CreateJob < ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

describe NodesController do
  include Devise::TestHelpers

  before(:each) do
    # default visitor user
    @default_user = Factory.create(:user)
    @another_user = Factory.create(:user, :email => 'test@rspec.org')
  end

  describe "action SHOW" do
    
    before(:each) do
     FakeWeb.allow_net_connect = false
     @base_url = OpenStreetMapConfig.oauth_site
     @full_url = "#{@base_url}/node/16581933"
    end
    
    it "should show node view" do
      FakeWeb.register_uri(:get, @full_url, :body => "#{RAILS_ROOT}/spec/fixtures/node.xml", :content_type => 'text/xml')
      get(:show, :id => 16581933)
      response.code.should == '200'
    end
    
    it "should render not found page" do
      FakeWeb.register_uri(:get, @full_url, :status => 404, :body => "NOT FOUND", :content_type => 'text/plain')
      get(:show, :id => 16581933)
      response.code.should == '404'
    end
    
  end

  
  describe "action: UPDATE" do
    
    describe "signed_in" do
      
      before(:each) do
        sign_in @another_user
      end
      
      it "should create UpdateJob for given node" do
         lambda{
            put(:update, :id => 1234, :wheelchair => 'yes')
          }.should change(UpdateJob, :count).by(1)
      end
      
      it "should have correct values for UpdateJob" do
        put(:update, :id => 1234, :wheelchair => 'yes')
        job = YAML.load(UpdateJob.last.handler)
        job.user_id.should == @another_user.id
        job.osmid.should == '1234'
        job.wheelchair.should == 'yes'
      end
  
      it "should not update node if wheelchair is missing" do
        response = put(:update, :id => 1234)
        response.code.should == '400'
        response.body.should == "Params missing"
      end
      
    end
    
    describe "anonymous" do
  
      it "should create UpdateJob for given node" do
         lambda{
            put(:update, :id => 1234, :wheelchair => 'yes')
          }.should change(UpdateJob, :count).by(1)
      end
      
      it "should have correct values for UpdateJob" do
        put(:update, :id => 1234, :wheelchair => 'yes')
        job = YAML.load(UpdateJob.last.handler)
        job.user_id.should == @default_user.id
        job.osmid.should == '1234'
        job.wheelchair.should == 'yes'
      end
  
      it "should not update node if wheelchair is missing" do
        response = put(:update, :id => 1234)
        response.code.should == '400'
        response.body.should == "Params missing"
      end
    end
  end
  
  describe "action: CREATE" do
    
    describe "signed_in" do
    
      before(:each) do
        sign_in @another_user
      end
    
      it "should create CreateJob for given node attributes" do
        lambda{
            post(:create, :node => {:lat => '52.4', :lon => '13.9', :tags => {:name => 'test name', :wheelchair => 'yes'}})
          }.should change(CreateJob, :count).by(1)
      end
      
      it "should have correct values for UpdateJob" do
        post(:create, :node => {:lat => '52.4', :lon => '13.9', :tags => {:name => 'test node', :wheelchair => 'yes'}})
        job = YAML.load(CreateJob.last.handler)
        job.user_id.should == @another_user.id
        job.node['tags']['name'].should == 'test node'
        job.node['tags']['wheelchair'].should == 'yes'
        job.node['lat'].should == '52.4'
        job.node['lon'].should == '13.9'
      end
    
      it "should not create node if node is missing" do
        response = post(:create, :id => 1234)
        response.code.should == '400'
        response.body.should == "Params missing"
      end
    end
    
    describe "anonymous" do
      
      it "should redirect to sign_in page" do
        post(:create, :node => {:name => 'test node', :wheelchair => 'yes', :lat => '52.4', :lon => '13.9'})
        response.should redirect_to 'http://test.host/users/sign_in?unauthenticated=true'
      end
    end
    
  end

end
