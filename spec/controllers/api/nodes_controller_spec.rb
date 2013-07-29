  require 'spec_helper'

describe Api::NodesController do

  render_views
  fixtures :node_types

  before :each do
    User.delete_all
    @user = FactoryGirl.create(:user)
  end

  describe 'index action' do
    before :each do
      Poi.delete_all
      @nodes = [FactoryGirl.create(:poi, :osm_id => 1, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'}), FactoryGirl.create(:poi, :osm_id => 2, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})]
    end

    describe 'format json' do

      it "should refuse index when api key is missing" do
        get(:index)
        response.status.should eql 401
      end

      it "should render json when using accept header" do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, :api_key => @user.authentication_token)
        request.format.to_sym.should eql(:json)
      end

      it "should render json as default format" do
        get(:index, :api_key => @user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:json)
      end

      it "should render result object" do
        get(:index, :api_key => @user.authentication_token)
        json = JSON.parse(response.body)
        json['nodes'].should_not be_nil
      end

      it "should render conditions object" do
        get(:index, :api_key => @user.authentication_token)
        json = JSON.parse(response.body)
        json['conditions'].should_not be_nil
        p = json['conditions']
        p['format'].should eql('json')
      end

      it "should render meta object" do
        get(:index, :api_key => @user.authentication_token)
        json = JSON.parse(response.body)
        json['meta'].should_not be_nil
        p = json['meta']
        p['num_pages'].should eql 1

      end

      it "should render result object containing a node" do
        get(:index, :api_key => @user.authentication_token)
        response.should be_success
        json = JSON.parse(response.body)
        json['nodes'].should_not be_empty
        node = json['nodes'].first
        node['lat'].should eql 52.0
        node['lon'].should eql 13.4
        node['wheelchair'].should eql 'yes'
      end

    end

    describe 'format xml' do
      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it "should render xml when using accept header" do
        get(:index, :api_key => @user.authentication_token)
        request.format.to_sym.should eql(:xml)
      end

      it "should render result object" do
        get(:index, :api_key => @user.authentication_token)
        response.body.should =~ /<conditions>/
      end
      it "should render params object" do
        get(:index, :api_key => @user.authentication_token)
        response.body.should =~ /<meta>/
      end
    end
  end

  shared_examples "update_wheelchair" do

    it "access should be denied if api key is missing" do
      put(:update_wheelchair, {:id => @node.id, :name => 'Something new'})
      response.status.should eql 401
    end

    it "should accept update wheelchair status for later processing if params are valid" do
      lambda {
        put(:update_wheelchair, {:id => @node.id, :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 202
        response.body.should =~ /OK/
      }.should change(Delayed::Job, :count).by(1)
      Delayed::Job.last.handler.should =~ /chris@tucker.org/
    end

    it "should not accept update wheelchair status for later processing if params are invalid" do
      lambda {
        put(:update_wheelchair, {:id => @node.id, :wheelchair => 'invalid', :api_key => @user.authentication_token})
        response.status.should eql 406
      }.should change(Delayed::Job, :count).by(0)
    end

    it "should compose source from user agent" do
      put(:update_wheelchair, {:id => @node.id, :wheelchair => 'yes', :api_key => @user.authentication_token})
      assigns(:source).should eql 'tag_android'
    end

    it "should compose source from user agent" do
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      put(:update_wheelchair, {:id => @node.id, :wheelchair => 'yes', :api_key => @user.authentication_token})
      assigns(:source).should eql 'tag_iphone'
    end
  end

  describe 'as a node' do

    before :each do
      @wheelmap_visitor = FactoryGirl.create(:authorized_user, :email => 'visitor@wheelmap.org')
      @user = FactoryGirl.create(:authorized_user, :email => 'chris@tucker.org')
      Poi.delete_all
      @node = FactoryGirl.create(:poi, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})
    end

    it_behaves_like "update_wheelchair"
  end

  describe 'as a way' do

    before :each do
      @wheelmap_visitor = FactoryGirl.create(:authorized_user, :email => 'visitor@wheelmap.org')
      @user = FactoryGirl.create(:authorized_user, :email => 'chris@tucker.org')
      Poi.delete_all
      @node = FactoryGirl.create(:poi, :osm_id => (FactoryGirl.generate(:version) * -1), :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})
    end

    it_behaves_like "update_wheelchair"
  end

  describe 'search action' do

    it "should not fail when no search key is passed" do
      get(:search, :api_key => @user.authentication_token)
      response.status.should eql 200
    end

    it "should not fail when empty search key is passed" do
      get(:search, :api_key => @user.authentication_token, :q => '')
      response.status.should eql 200
    end

    it "should use distance search when bbox is passed" do
      get(:search, :api_key => @user.authentication_token, :q => 'name', :bbox => '13.377,52.515,13.383,52.518')
      response.status.should eql 200
    end

    it "should compose source from user agent" do
      get(:search, :api_key => @user.authentication_token, :q => 'Berlin')
      assigns(:source).should eql 'search_android'
    end

    it "should compose source from user agent" do
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      get(:search, :api_key => @user.authentication_token, :q => 'Berlin')
      assigns(:source).should eql 'search_iphone'
    end

  end

  describe 'update action' do
    before :each do
      @node = FactoryGirl.create(:poi, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})
    end

    it "access should be denied if api key is missing" do
      put(:update, {:id => @node.id, :name => 'Something new'})
      response.status.should eql 401
    end

    it "access should be denied if osm credentials are missing" do
      put(:update, {:id => @node.id, :name => 'Something new', :api_key => @user.authentication_token, :locale => 'en'})
      response.status.should eql 403
      response.body.should =~ /Um Daten zu \\u00e4ndern ben\\u00f6tigst Du einen OpenStreetMap Account./
    end

    it "should not update node when params are missing or invalid" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      Poi.should_receive(:find).with("#{@node.id}").and_return(@node)
      @node.should_receive(:valid?).and_return(false)
      lambda {
        put(:update, {:id => @node.id, :api_key => @user.authentication_token})
        response.status.should eql 400
      }.should change(Delayed::Job, :count).by(0)

    end

    it "should update node when name is missing and existing node lacks a name" do
      @node.name = nil
      @node.save!
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      lambda {
        put(:update, {:id => @node.id, :lat => 52.0, :lon => 13.4, :type => 'bar', :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 202
      }.should change(Delayed::Job, :count).by(1)
    end

    it "should accept update for later processing if params are valid" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      lambda {
        put(:update, {:id => @node.id, :lat => 52.0, :lon => 13.4, :type => 'bar', :name => 'Cocktails on the rocks', :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 202
      }.should change(Delayed::Job, :count).by(1)
    end

    it "should compose source from user agent" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      put(:update, {:id => @node.id, :lat => 52.0, :lon => 13.4, :type => 'bar', :name => 'Cocktails on the rocks', :wheelchair => 'no', :api_key => @user.authentication_token})
      assigns(:source).should eql 'update_android'
    end

    it "should compose source from user agent" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      put(:update, {:id => @node.id, :lat => 52.0, :lon => 13.4, :type => 'bar', :name => 'Cocktails on the rocks', :wheelchair => 'no', :api_key => @user.authentication_token})
      assigns(:source).should eql 'update_iphone'
    end

    it "should not be possible to update a way" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      # Ways are the same as Nodes but with negative id
      @node.osm_id = (@node.osm_id * -1)
      Poi.should_receive(:find).with("#{@node.osm_id}").and_return @node
      lambda {
        put(:update, {:id => @node.id, :lat => 52.0, :lon => 13.4, :type => 'bar', :name => 'Cocktails on the rocks', :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 202
      }.should change(Delayed::Job, :count).by(1)
    end
  end

  describe 'create action' do

    it "access should be denied if api key is missing" do
      lambda{
        post(:create, {:name => 'Something new'})
      }.should_not change(Delayed::Job, :count)
      response.status.should eql 401
    end

    it "access should be denied if osm credentials are missing" do
      lambda{
        post(:create, {:name => 'Something new', :api_key => @user.authentication_token})
      }.should_not change(Delayed::Job, :count)
      response.status.should eql 403
      response.body.should =~ /Um Daten zu \\u00e4ndern ben\\u00f6tigst Du einen OpenStreetMap Account./
    end

    it "should not create node when params are missing or invalid" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      lambda {
        post(:create, {:lat => 52.0, :lon => 13.4, :api_key => @user.authentication_token,
             :type => "foo", :tags => {"amenity"=>"restaurant"}})
        response.status.should eql 400
      }.should_not change(Delayed::Job, :count)
    end

    it "should not create node when name missing" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      lambda {
        post(:create, {:lat => 52.0, :lon => 13.4, :tags => {"amenity"=>"restaurant"}, :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 400
      }.should_not change(Delayed::Job, :count)
    end

    it "create node job for later processing if params are valid" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      lambda {
        post(:create, {:lat => 52.0, :lon => 13.4, :tags => {"amenity"=>"restaurant",
             :name => 'Cocktails on the rocks'}, :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 202
      }.should change(Delayed::Job, :count).by(1)

    end

    it "should compose source from user agent" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      post(:create, {:lat => 52.0, :lon => 13.4, :tags => {"amenity"=>"restaurant", :name => 'Cocktails on the rocks'}, :wheelchair => 'no', :api_key => @user.authentication_token})
      assigns(:source).should eql 'create_android'
    end

    it "should compose source from user agent" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      post(:create, {:lat => 52.0, :lon => 13.4, :tags => {"amenity"=>"restaurant", :name => 'Cocktails on the rocks'}, :wheelchair => 'no', :api_key => @user.authentication_token})
      assigns(:source).should eql 'create_iphone'
    end

    it "should create a node wit a lot of missing parameters" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      lambda {
        post(:create, {"wheelchair_description"=>"", "type"=>"convenience",
          "street"=>nil, "name"=>"Kochhaus", "wheelchair"=>nil, "postcode"=>nil,
          "phone"=>nil, "city"=>nil, "website"=>nil, "lon"=>"13.35598468780518",
          "lat"=>"52.48627569798567", "housenumber"=>nil, :api_key => @user.authentication_token})
      }.should change(Delayed::Job, :count).by(1)
    end
  end
end
