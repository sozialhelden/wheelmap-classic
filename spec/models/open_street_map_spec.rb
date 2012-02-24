require 'spec_helper'

describe OldOsm do
  let :oauth_client do
    @base_url = "#{OpenStreetMapConfig.oauth_site}/api/0.6"
    uri = URI.parse("#{OpenStreetMapConfig.oauth_site}/api/0.6")

    @oauth_url = uri
    @basic_auth_client = OldOsm::BasicAuthClient.new('foo', 'bar')
    @basic_auth_url = "#{uri.scheme}://foo:bar@#{uri.host}#{uri.path}"

    @consumer = ::OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => @base_url)
    @access_token = ::OAuth::AccessToken.new(@consumer, 'foo', 'bar')

    OldOsm::OauthClient.new(@access_token)
  end

  before(:each) do
    @osm = OldOsm.new(oauth_client)
  end

  subject { @osm }

  def stub_osm_request(method, url, status, body, content_type)
    stub_request(method, url).
      to_return(:body => body, :status => status, :headers => {'Content-Type' => content_type})
  end

  describe 'method: get_node' do

    before(:each) do
      @full_url = "#{@base_url}/node/16581933"
    end

    it "should fetch node as xml data from API" do
      stub_osm_request(:get, @full_url, 200, File.read("#{Rails.root}/spec/fixtures/node.xml"), "text/xml")
      node = OldOsm.get_node(16581933)
      node.class.should == OldOsm::Node
    end

    it "should raise not found exception if API sends 404" do
      stub_osm_request(:get, @full_url, 404, "NOT FOUND", 'text/plain')
      lambda{
        OldOsm.get_node(16581933)
      }.should raise_error(OldOsm::NotFound)
    end

    it "should raise gone exception if API sends 410" do
      stub_osm_request(:get, @full_url, 410, "Node has been deleted", 'text/plain')
      lambda{
        OldOsm.get_node(16581933)
      }.should raise_error(OldOsm::Gone)
    end
  end

  describe "method: create_changeset" do

    before(:each) do
      @full_url = "#{@oauth_url}/changeset/create"
    end

    it "should create a new changeset" do
      stub_osm_request(:put, @full_url, 200, "12345", 'text/plain')
      stub_osm_request(:get, "#{@oauth_url}/changeset/12345", 200, File.read("#{Rails.root}/spec/fixtures/open_changeset.xml"), 'text/xml')
      changeset = @osm.create_changeset("Hello comment")
      changeset.id.should == 12345
    end

    it "should raise bad request when submitting malformed xml" do
      stub_osm_request(:put, @full_url, 400, "Could not parse xml", 'text/plain')
      lambda{
        @osm.create_changeset
      }.should raise_error(OldOsm::BadRequest)
    end

    it "should raise method not allowed exception when not using put request" do
      stub_osm_request(:put, @full_url, 405, "Just method put is supported",'text/plain')
      lambda{
        @osm.create_changeset
      }.should raise_error(OldOsm::MethodNotAllowed)
    end
  end

  describe "method: save_changeset" do

  end

  describe "Updating nodes with implicit changeset" do
    it "creates a new changeset, updates the user and calls update_node" do
      user = Factory(:authorized_user)
      node = Factory.build(:node, :version => 1, :id => 100)
      changeset = mock(:id => 99)
      subject.should_receive(:find_or_create_changeset).with(user.changeset_id, anything()).and_return(changeset)
      subject.should_receive(:update_node).with(node, changeset.id)
      subject.update_node_with_changeset(node, user)
      user.changeset_id.should == changeset.id
    end
  end

  describe"method :update_node" do
    before :each do
      @node = Factory.build(:node, :version => 1, :id => 100)
      @changeset_create_url = "#{@base_url}/changeset/create"
      @put_url = "#{@base_url}/node/#{@node.id}"
      @get_url = "#{@base_url}/node/#{@node.id}"
      @changeset_close_url = "#{@base_url}/changeset/12345/close"
    end

    it "should update an existing node" do
      stub_osm_request(:put, @changeset_create_url, 200, "12345", 'text/plain')
      stub_osm_request(:put, @put_url, 200, 2, 'text/plain')
      stub_osm_request(:get, @get_url, 200, File.read("#{Rails.root}/spec/fixtures/node.xml"), 'text/xml')
      stub_osm_request(:put, @changeset_close_url, 200, nil, 'text/plain')

      new_version = @osm.update_node(@node, 12345)
      new_version.version.should == 2
    end
  end

  describe"method :update_way" do
    before :each do
      @way = Factory.build(:way, :version => 1, :id => -123)
      @changeset_create_url = "#{@base_url}/changeset/create"
      @put_url = "#{@base_url}/way/#{@way.id}"
      @get_url = "#{@base_url}/way/#{@way.id}"
      @changeset_close_url = "#{@base_url}/changeset/12345/close"
    end

    it "should update an existing way" do
      stub_osm_request(:put, @changeset_create_url, 200, "12345", 'text/plain')
      stub_osm_request(:put, @put_url, 200, 2, 'text/plain')
      stub_osm_request(:get, @get_url, 200, File.read("#{Rails.root}/spec/fixtures/way.xml"), 'text/xml')
      stub_osm_request(:put, @changeset_close_url, 200, nil, 'text/plain')

      new_version = @osm.update_way(@way, 12345)
      new_version.version.should == 2
      puts new_version.member
    end
  end

  describe "method: create_node" do

    before(:each) do
      @changeset_create_url = "#{@base_url}/changeset/create"
      @put_url = "#{@base_url}/node/create"
      @get_url = "#{@base_url}/node/84644746"
      @changeset_close_url = "#{@base_url}/changeset/12345/close"
      @node = Factory.build(:node)
    end

    it "should create a new node as" do
      stub_osm_request(:put, @changeset_create_url, 200, "12345", 'text/plain')
      stub_osm_request(:put, @put_url, 200, '84644746','text/plain')
      stub_osm_request(:get, @get_url, 200, File.read("#{Rails.root}/spec/fixtures/node.xml"), 'text/xml')
      stub_osm_request(:put, @changeset_close_url, 200, nil, 'text/plain')

      node = @osm.create_node(@node, 12345)
      node.id.should == 84644746
    end
  end
end
