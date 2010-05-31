require 'spec_helper'
describe OpenStreetMap do
  
  before(:each) do
    @base_url = OpenStreetMapConfig.oauth_site
    FakeWeb.allow_net_connect = false
    @consumer = ::OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => @base_url)
    @oauth = ::OAuth::AccessToken.new(@consumer, 'foo', 'bar')
  end
  
  describe 'method: get_node' do
  
    before(:each) do
      @full_url = "#{@base_url}/api/0.6/node/16581933"
    end

    it "should fetch node as xml data from API" do
      FakeWeb.register_uri(:get, @full_url, :body => "#{RAILS_ROOT}/spec/fixtures/node.xml", :content_type => 'text/xml')
      node = OpenStreetMap.get_node(16581933)
      node.class.should == OpenStreetMap::Node
    end
    
    it "should raise not found exception if API sends 404" do
      FakeWeb.register_uri(:get, @full_url, :status => 404, :body => "NOT FOUND", :content_type => 'text/plain')
      lambda{
        OpenStreetMap.get_node(16581933)
      }.should raise_error(OpenStreetMap::NotFound)
    end
    
    it "should raise gone exception if API sends 410" do
      FakeWeb.register_uri(:get, @full_url, :status => 410, :body => "Node has been deleted", :content_type => 'text/plain')
      lambda{
        OpenStreetMap.get_node(16581933)
      }.should raise_error(OpenStreetMap::Gone)
    end
  end
  
  describe "method: create_changeset" do
    before(:each) do
      @full_url = "#{@base_url}/api/0.6/changeset/create"
    end

    it "should create a new changeset" do
      FakeWeb.register_uri(:put, @full_url, :body => "12345", :content_type => 'text/plain')
      changeset_id = OpenStreetMap.create_changeset(@oauth)
      changeset_id.should == '12345'
    end
    
    it "should raise bad request when submitting malformed xml" do
      FakeWeb.register_uri(:put, @full_url, :status => 400, :body => "Could not parse xml", :content_type => 'text/plain')
      lambda{
        OpenStreetMap.create_changeset(@oauth)
      }.should raise_error(OpenStreetMap::BadRequest)
    end
    
    it "should raise method not allowed exception when not using put request" do
      FakeWeb.register_uri(:put, @full_url, :status => 405, :body => "Just method put is supported", :content_type => 'text/plain')
      lambda{
        OpenStreetMap.create_changeset(@oauth)
      }.should raise_error(OpenStreetMap::MethodNotAllowed)
    end
  end
  
  describe "method: save_changeset" do
  end
  
  describe"method :update_node" do
  end
end