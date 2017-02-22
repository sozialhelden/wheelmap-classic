require 'rails_helper'

describe Api::NodesController do
  render_views
  fixtures :node_types
  let(:wheelmap_visitor) { create(:wheelmap_visitor) }

  before :each do
    User.delete_all
    @user = FactoryGirl.create(:user)
  end

  describe 'index action' do
    before :each do
      Poi.delete_all
      @category = FactoryGirl.create(:category, identifier: 'education')
      @nodes = [
        FactoryGirl.create(:poi, category: @category, osm_id: 1, tags: { 'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar' }),
        FactoryGirl.create(:poi, category: @category, osm_id: 2, tags: { 'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar' })
      ]
    end

    describe 'get nodes for category' do
      before do
        get(:index, category_id: @category.id, api_key: @user.authentication_token)
      end

      it 'returns 200 status code' do
        expect(response.status).to eq 200
      end
    end

    describe 'format json' do
      it 'should refuse index when api key is missing' do
        get(:index)
        expect(response.status).to eql 401
      end

      it 'should render json when using accept header' do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, api_key: @user.authentication_token)
        expect(request.format.to_sym).to eql(:json)
      end

      it 'should render json as default format' do
        get(:index, api_key: @user.authentication_token)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:json)
      end

      it 'should render result object' do
        get(:index, api_key: @user.authentication_token)
        json = JSON.parse(response.body)
        expect(json['nodes']).not_to be_nil
      end

      it 'should render conditions object' do
        get(:index, api_key: @user.authentication_token)
        json = JSON.parse(response.body)
        expect(json['conditions']).not_to be_nil
        p = json['conditions']
        expect(p['format']).to eql('json')
      end

      it 'should render meta object' do
        get(:index, api_key: @user.authentication_token)
        json = JSON.parse(response.body)
        expect(json['meta']).not_to be_nil
        p = json['meta']
        expect(p['num_pages']).to eql 1
      end

      it 'should render result object containing a node' do
        get(:index, api_key: @user.authentication_token)
        expect(response).to be_success
        json = JSON.parse(response.body)
        expect(json['nodes']).not_to be_empty
        node = json['nodes'].first
        expect(node['lat']).to eql 52.0
        expect(node['lon']).to eql 13.4
        expect(node['wheelchair']).to eql 'yes'
      end

      it 'should not contain more attributes than specified in API docs' do
        get(:index, api_key: @user.authentication_token)
        expect(response).to be_success
        json = JSON.parse(response.body)
        attribute_whitelist = %w(id lat lon node_type category name wheelchair wheelchair_description wheelchair_toilet city street housenumber postcode website phone)
        json['nodes'].each do |node|
          left_over = node.reject do |key, _value|
            attribute_whitelist.include? key
          end
          expect(left_over).to be_empty
        end
      end
    end

    describe 'format xml' do
      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it 'should render xml when using accept header' do
        get(:index, api_key: @user.authentication_token)
        expect(request.format.to_sym).to eql(:xml)
      end

      it 'should render result object' do
        get(:index, api_key: @user.authentication_token)
        expect(response.body).to match(/<conditions>/)
      end
      it 'should render params object' do
        get(:index, api_key: @user.authentication_token)
        expect(response.body).to match(/<meta>/)
      end
    end
  end

  shared_examples 'update_wheelchair' do
    it 'access should be denied if api key is missing' do
      put(:update_wheelchair, id: @node.id, name: 'Something new')
      expect(response.status).to eql 401
    end

    it 'should accept update wheelchair status for later processing if params are valid' do
      expect do
        put(:update_wheelchair, id: @node.id, wheelchair: 'no', api_key: @user.authentication_token)
        expect(response.status).to eql 202
        expect(response.body).to match(/OK/)
      end.to change(Delayed::Job, :count).by(1)
      expect(Delayed::Job.last.handler).to match(/wheelchair: 'no'/)
    end

    it 'should accept update wheelchair status for later processing when user is anonymous' do
      expect do
        put(:update_wheelchair, id: @node.id, wheelchair: 'no', api_key: wheelmap_visitor.authentication_token)
        expect(response.status).to eql 202
        expect(response.body).to match(/OK/)
      end.to change(Delayed::Job, :count).by(1)
      expect(Delayed::Job.last.handler).to match(/wheelchair: 'no'/)
    end

    it 'should not accept update wheelchair status for later processing if params are invalid' do
      expect do
        put(:update_wheelchair, id: @node.id, wheelchair: 'invalid', api_key: @user.authentication_token)
        expect(response.status).to eql 406
      end.to change(Delayed::Job, :count).by(0)
    end

    it 'should compose source from user agent' do
      put(:update_wheelchair, id: @node.id, wheelchair: 'yes', api_key: @user.authentication_token)
      expect(assigns(:source)).to eql 'tag_android'
    end

    it 'should compose source from user agent' do
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      put(:update_wheelchair, id: @node.id, wheelchair: 'yes', api_key: @user.authentication_token)
      expect(assigns(:source)).to eql 'tag_iphone'
    end
  end

  shared_examples 'update_toilet' do
    it 'access should be denied if api key is missing' do
      put(:update_toilet, id: @node.id, name: 'Something new')
      expect(response.status).to eql 401
    end

    it 'should accept update toilet status for later processing if params are valid' do
      expect do
        put(:update_toilet, id: @node.id, wheelchair_toilet: 'no', api_key: @user.authentication_token)
        expect(response.status).to eql 202
        expect(response.body).to match(/OK/)
      end.to change(Delayed::Job, :count).by(1)
      expect(Delayed::Job.last.handler).to match(/toilets:wheelchair: 'no'/)
    end

    it 'should accept update toilet status for later processing if user is anonymous' do
      expect do
        put(:update_toilet, id: @node.id, wheelchair_toilet: 'no', api_key: wheelmap_visitor.authentication_token)
        expect(response.status).to eql 202
        expect(response.body).to match(/OK/)
      end.to change(Delayed::Job, :count).by(1)
      expect(Delayed::Job.last.handler).to match(/toilets:wheelchair: 'no'/)
    end

    it 'should not accept update toilet status for later processing if params are invalid' do
      expect do
        put(:update_toilet, id: @node.id, wheelchair_toilet: 'invalid', api_key: @user.authentication_token)
        expect(response.status).to eql 406
      end.to change(Delayed::Job, :count).by(0)
    end

    it 'should not accept update toilet status for later processing if params are missing' do
      expect do
        put(:update_toilet, id: @node.id, api_key: @user.authentication_token)
        expect(response.status).to eql 406
      end.to change(Delayed::Job, :count).by(0)
    end

    it 'should compose source from user agent' do
      put(:update_toilet, id: @node.id, wheelchair_toilet: 'yes', api_key: @user.authentication_token)
      expect(assigns(:source)).to eql 'toilet_android'
    end

    it 'should compose source from user agent' do
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      put(:update_toilet, id: @node.id, wheelchair_toilet: 'yes', api_key: @user.authentication_token)
      expect(assigns(:source)).to eql 'toilet_iphone'
    end
  end

  describe 'as a node' do
    before :each do
      @user = FactoryGirl.create(:authorized_user, email: 'chris@tucker.org')
      Poi.delete_all
      @node = FactoryGirl.create(:poi, tags: { 'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar' })
    end

    it_behaves_like 'update_wheelchair'
    it_behaves_like 'update_toilet'
  end

  describe 'as a way' do
    before :each do
      @user = FactoryGirl.create(:authorized_user, email: 'chris@tucker.org')
      Poi.delete_all
      @node = FactoryGirl.create(:poi, osm_id: (FactoryGirl.generate(:version) * -1), tags: { 'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar' })
    end

    it_behaves_like 'update_wheelchair'
    it_behaves_like 'update_toilet'
  end

  describe 'search action' do
    it 'should not fail when no search key is passed' do
      get(:search, api_key: @user.authentication_token)
      expect(response.status).to eql 200
    end

    it 'should not fail when empty search key is passed' do
      get(:search, api_key: @user.authentication_token, q: '')
      expect(response.status).to eql 200
    end

    it 'should use distance search when bbox is passed' do
      get(:search, api_key: @user.authentication_token, q: 'name', bbox: '13.377,52.515,13.383,52.518')
      expect(response.status).to eql 200
    end

    it 'should compose source from user agent' do
      get(:search, api_key: @user.authentication_token, q: 'Berlin')
      expect(assigns(:source)).to eql 'search_android'
    end

    it 'should compose source from user agent' do
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      get(:search, api_key: @user.authentication_token, q: 'Berlin')
      expect(assigns(:source)).to eql 'search_iphone'
    end
  end

  describe 'update action' do
    before :each do
      @node = FactoryGirl.create(:poi, tags: { 'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar' })
    end

    it 'access should be denied if api key is missing' do
      put(:update, id: @node.id, name: 'Something new')
      expect(response.status).to eql 401
    end

    it 'access should be denied if osm credentials are missing' do
      put(:update, id: @node.id, name: 'Something new', api_key: @user.authentication_token, locale: 'en')
      expect(response.status).to eql 403
      expect(response.body).to match(/Um Daten zu ändern benötigst Du einen OpenStreetMap Account./)
    end

    it 'should not update node when user is anonymous' do
      expect do
        put(:update, id: @node.id, lat: 52.0, lon: 13.4, type: 'bar', name: 'Cocktails on the rocks', wheelchair: 'no', api_key: wheelmap_visitor.authentication_token)
        expect(response.status).to eql 403
      end.not_to change(Delayed::Job, :count)
    end

    it 'should not update node when params are missing or invalid' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      expect(Poi).to receive(:find).with((@node.id).to_s).and_return(@node)
      expect(@node).to receive(:valid?).and_return(false)
      expect do
        put(:update, id: @node.id, api_key: @user.authentication_token)
        expect(response.status).to eql 400
      end.to change(Delayed::Job, :count).by(0)
    end

    it 'should update node when name is missing and existing node lacks a name' do
      @node.name = nil
      @node.save!
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      expect do
        put(:update, id: @node.id, lat: 52.0, lon: 13.4, type: 'bar', wheelchair: 'no', api_key: @user.authentication_token)
        expect(response.status).to eql 202
      end.to change(Delayed::Job, :count).by(1)
    end

    it 'should accept update for later processing if params are valid' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      expect do
        put(:update, id: @node.id, lat: 52.0, lon: 13.4, type: 'bar', name: 'Cocktails on the rocks', wheelchair: 'no', api_key: @user.authentication_token)
        expect(response.status).to eql 202
      end.to change(Delayed::Job, :count).by(1)
    end

    it 'should accept update even when telephone number is misformatted' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      expect do
        put(:update, id: @node.id,
                      lat: 52.0,
                      lon: 13.4,
                      type: 'bar',
                      name: 'Cocktails on the rocks',
                      wheelchair: 'no',
                      phone: '30 123456',
                      api_key: @user.authentication_token})
        expect(response.status).to eql 202
      end.to change(Delayed::Job, :count).by(1)
    end
    it 'should accept update for telephone number' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      expect do
        put(:update, id: @node.id,
                      lat: 52.0,
                      lon: 13.4,
                      type: 'bar',
                      name: 'Cocktails on the rocks',
                      wheelchair: 'no',
                      phone: '+49 30 123456',
                      api_key: @user.authentication_token})
        expect(response.status).to eql 202
      end.to change(Delayed::Job, :count).by(1)
    end

    it 'should deny update when url is misformatted' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      expect do
        put(:update, id: @node.id,
                      lat: 52.0,
                      lon: 13.4,
                      type: 'bar',
                      name: 'Cocktails on the rocks',
                      wheelchair: 'no',
                      website: 'www.google.de',
                      api_key: @user.authentication_token})
        expect(response.status).to eql 400
      end.to change(Delayed::Job, :count).by(0)
    end
    it 'should accept update for url' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      expect do
        put(:update, id: @node.id,
                      lat: 52.0,
                      lon: 13.4,
                      type: 'bar',
                      name: 'Cocktails on the rocks',
                      wheelchair: 'no',
                      website: 'http://www.ferienwohnungen-bad-urach.de',
                      api_key: @user.authentication_token})
        expect(response.status).to eql 202
      end.to change(Delayed::Job, :count).by(1)
    end

    it 'should compose source from user agent' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      put(:update, id: @node.id, lat: 52.0, lon: 13.4, type: 'bar', name: 'Cocktails on the rocks', wheelchair: 'no', api_key: @user.authentication_token)
      expect(assigns(:source)).to eql 'update_android'
    end

    it 'should compose source from user agent' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      put(:update, id: @node.id, lat: 52.0, lon: 13.4, type: 'bar', name: 'Cocktails on the rocks', wheelchair: 'no', api_key: @user.authentication_token)
      expect(assigns(:source)).to eql 'update_iphone'
    end

    it 'should not be possible to update a way' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      # Ways are the same as Nodes but with negative id
      @node.osm_id = (@node.osm_id * -1)
      expect(Poi).to receive(:find).with((@node.osm_id).to_s).and_return @node
      expect do
        put(:update, id: @node.id, lat: 52.0, lon: 13.4, type: 'bar', name: 'Cocktails on the rocks', wheelchair: 'no', api_key: @user.authentication_token)
        expect(response.status).to eql 202
      end.to change(Delayed::Job, :count).by(1)
    end
  end

  describe 'create action' do
    specify 'access should be denied if api key is missing' do
      expect do
        post(:create, name: 'Something new')
      end.not_to change(Delayed::Job, :count)
      expect(response.status).to eql 401
    end

    specify 'access should be denied if osm credentials are missing' do
      expect do
        post(:create, name: 'Something new', api_key: @user.authentication_token)
      end.not_to change(Delayed::Job, :count)
      expect(response.status).to eql 403
      expect(response.body).to match(/Um Daten zu ändern benötigst Du einen OpenStreetMap Account./)
    end

    it 'should not create node when params are missing or invalid' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      expect do
        post(:create, lat: 52.0, lon: 13.4, api_key: @user.authentication_token,
                       type: 'foo', tags: { 'amenity' => 'restaurant' })
        expect(response.status).to eql 400
      end.not_to change(Delayed::Job, :count)
    end

    it 'should not create node when name missing' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      expect do
        post(:create, lat: 52.0, lon: 13.4, tags: { 'amenity' => 'restaurant' }, wheelchair: 'no', api_key: @user.authentication_token)
        expect(response.status).to eql 400
      end.not_to change(Delayed::Job, :count)
    end

    it 'should not create a new node when user is anonymous' do
      expect do
        post(:create, lat: 52.0, lon: 13.4, tags: { 'amenity' => 'restaurant',
                                                             :name => 'Cocktails on the rocks' }, wheelchair: 'no', api_key: wheelmap_visitor.authentication_token)
        expect(response.status).to eql 403
      end.not_to change(Delayed::Job, :count)
    end

    it 'create node job for later processing if params are valid' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      expect do
        post(:create, lat: 52.0, lon: 13.4, tags: { 'amenity' => 'restaurant',
                                                             :name => 'Cocktails on the rocks' }, wheelchair: 'no', api_key: @user.authentication_token)
        expect(response.status).to eql 202
      end.to change(Delayed::Job, :count).by(1)
    end

    it 'creates node job with correct wheelchair attribute' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      expect(CreateNodeJob).to receive(:enqueue) do |_lat, _lng, tags, _current_user, _source|
        expect(tags['wheelchair']).to eq 'yes'
        expect(tags['toilets:wheelchair']).to eq 'yes'
      end
      request.headers['X-API-KEY'] = @user.authentication_token
      post(:create, 'name' => 'centro cultural vergueiro', 'type' => 'community_centre', 'lat' => '-23.5711773', 'lon' => '-46.6402144', 'wheelchair' => 'yes', 'wheelchair_toilet' => 'yes', 'category' => 'leisure', 'locale' => 'pt')
      expect(response.status).to eq 202
    end

    it 'should compose source from user agent' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      post(:create, lat: 52.0, lon: 13.4, tags: { 'amenity' => 'restaurant', :name => 'Cocktails on the rocks' }, wheelchair: 'no', api_key: @user.authentication_token)
      expect(assigns(:source)).to eql 'create_android'
    end

    it 'should compose source from user agent' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      request.env['HTTP_USER_AGENT'] = 'Wheelmap iOS/1.2.4'
      post(:create, lat: 52.0, lon: 13.4, tags: { 'amenity' => 'restaurant', :name => 'Cocktails on the rocks' }, wheelchair: 'no', api_key: @user.authentication_token)
      expect(assigns(:source)).to eql 'create_iphone'
    end

    it 'should create a node wit a lot of missing parameters' do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      expect do
        post(:create, 'wheelchair_description' => '', 'type' => 'convenience',
                       'street' => nil, 'name' => 'Kochhaus', 'wheelchair' => nil, 'postcode' => nil,
                       'phone' => nil, 'city' => nil, 'website' => nil, 'lon' => '13.35598468780518',
                       'lat' => '52.48627569798567', 'housenumber' => nil, :api_key => @user.authentication_token)
      end.to change(Delayed::Job, :count).by(1)
    end
  end
end
