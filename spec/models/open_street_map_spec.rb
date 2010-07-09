require 'spec_helper'
describe OpenStreetMap do
  
  before(:each) do
    @base_url = "#{OpenStreetMapConfig.oauth_site}/api/0.6"
    FakeWeb.allow_net_connect = false
    @consumer = ::OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => @base_url)
    @oauth = ::OAuth::AccessToken.new(@consumer, 'foo', 'bar')
  end
  
  after(:each) do
    FakeWeb.clean_registry
  end
  
  describe 'method: get_node' do
  
    before(:each) do
      @full_url = "#{@base_url}/node/16581933"
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
      @full_url = "#{@base_url}/changeset/create"
    end

    it "should create a new changeset" do
      FakeWeb.register_uri(:put, @full_url, :body => "12345", :content_type => 'text/plain')
      changeset_id = OpenStreetMap.create_changeset
      changeset_id.should == '12345'
    end
    
    it "should raise bad request when submitting malformed xml" do
      FakeWeb.register_uri(:put, @full_url, :status => 400, :body => "Could not parse xml", :content_type => 'text/plain')
      lambda{
        OpenStreetMap.create_changeset
      }.should raise_error(OpenStreetMap::BadRequest)
    end
    
    it "should raise method not allowed exception when not using put request" do
      FakeWeb.register_uri(:put, @full_url, :status => 405, :body => "Just method put is supported", :content_type => 'text/plain')
      lambda{
        OpenStreetMap.create_changeset
      }.should raise_error(OpenStreetMap::MethodNotAllowed)
    end
  end
  
  describe "method: save_changeset" do
  end
  
  describe"method :update_node" do
  end
  
  describe "method: create_node" do
    
    before(:each) do
      @changeset_url = "#{@base_url}/changeset/create"
      @put_url = "#{@base_url}/node/create"
      @get_url = "#{@base_url}/node/1234"
      @node = Factory.build(:node)
    end
    
    it "should create a new node as" do
      FakeWeb.register_uri(:put, @changeset_url, :body => "12345", :content_type => 'text/plain')
      FakeWeb.register_uri(:put, @put_url, :body => '1234', :content_type => 'text/plain')
      FakeWeb.register_uri(:get, @get_url, :body => "#{RAILS_ROOT}/spec/fixtures/node.xml", :content_type => 'text/xml')
      node_id = OpenStreetMap.create(@node)
      node_id.should == 1234
    end
    
  end
end