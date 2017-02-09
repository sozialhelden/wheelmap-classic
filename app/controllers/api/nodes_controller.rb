class Api::NodesController < Api::ApiController
  defaults :resource_class => Poi, :collection_name => 'pois'

  actions :index, :show, :edit, :update, :create

  custom_actions :collection => :search, :member => :update_wheelchair

  optional_belongs_to :category, :class_name => 'Category'
  optional_belongs_to :node_type

  # Make sure user authenticates itself using an api_key
  before_filter :authenticate_application!, :only => [:update, :create]
  # A user cannot be anonymous if they want to create or update a node
  before_filter :ensure_not_anonymous!, :only => [:create, :update]

  has_scope :bbox, :except => :search # we handle this manually
  has_scope :wheelchair, :except => :update
  has_scope :toilet, :except => :update

  rescue_from ActionController::UnpermittedValue do |e|
    respond_to do |wants|
      wants.json{ render :json => {:error => "Param #{e.key} must be one of the following values: #{e.allowed_values.inspect}"}.to_json, :status => 406 }
      wants.xml{  render :xml  => {:error => "Param #{e.key} must be one of the following values: #{e.allowed_values.inspect}"}.to_xml,  :status => 406 }
    end
  end

  rescue_from ActionController::ParameterMissing do |e|
    respond_to do |wants|
      wants.json{ render :json => {:error => "Param #{e.param} is missing"}.to_json, :status => 406 }
      wants.xml{  render :xml  => {:error => "Param #{e.param} is missing"}.to_xml,  :status => 406 }
    end
  end

  resource_description do
    short 'Nodes. A node is a geolocation defined by latitude and longitude.'
    error :code => 401, :desc => "Authorization Required", meta: { message: "Authentication failed or was not provided. Verify that you have sent valid credentials via an api_key parameter. A 'Www-Authenticate' challenge header will be sent with this type of error response." }
    formats ['json', 'jsonp', 'xml']
    param :api_key, String, desc: "You personal API key. Sign up for an account at http://wheelmap.org/users/sign_in", required: true
  end

  def_param_group :node do
    param :name, String, required: true, desc: "The node's name."
    param :type, Integer, required: true, desc: "The node's type, must be one of the available node_type ids"
    param :lat, Float, required: true, desc: "The node's latitude in degrees."
    param :lon, Float, required: true, desc: "The node's longitude in degrees."
    param :wheelchair, %w{ yes limited no unknown }, desc: "The node's wheelchair status."
    param :wheelchair_description, String
    param :wheelchair_toilet, %w{ yes no }, desc: "The node's wheelchair toilet status."
    param :street, String
    param :housenumber, String
    param :city, String
    param :postcode, String
    param :website, String
    param :phone, String
  end

  def_param_group :pagination do
    param :page, Integer,     required: false, desc: 'For pagination, what page of the results you are on. Default is 1.'
    param :per_page, Integer, required: false, desc: 'For pagination, how many results to return per page. Default is 200. Max is 500.'
  end

  def_param_group :filters do
    param :bbox, Array, of: Float, required: false, desc: "Filter nodes by a bounding box as comma separated float numbers wich are longitude, latitude values in degrees.\nFor example bbox=13.4,52.0,13.5,52.1", meta: { order: "west,south,east,north" }
    param :wheelchair, %w{ yes limited no unknown }, required: false, desc: 'Filter nodes by a wheelchair status.'
    param :toilet, %w{ yes no }, required: false, desc: 'Filter nodes by a toilet status.'
  end

  def_param_group :scopes do
    param :category_id, Integer, required: false, desc: 'Filter nodes by a category, identified by category id.'
    param :node_type_id, Integer, required: false, desc: 'Filter nodes by a node type, identified by node type id.'
  end

  def_param_group :collection do
    param_group :filters
    param_group :scopes
    param_group :pagination
  end

  api :GET, '/nodes', "Retrieve a optionally scoped collection of nodes"
  param_group :collection
  def index
    index! do |format|
      format.xml      {render_for_api :simple, :xml  => @nodes, :root => :nodes, :meta => meta}
      format.json     {render_for_api :simple, :json => @nodes, :root => :nodes, :meta => meta}
      format.geojson  {render :json => @nodes.to_geojson}
    end
  end

  api :GET, '/nodes/search', "Search for nodes by name and other attributes."
  param_group :collection
  def search
    # If bounding box is given: use distance search
    if params[:bbox]
      @nodes = end_of_association_chain.paginate(:page => params[:page], :per_page => params[:per_page]).distance_search(params[:q], params[:bbox], params[:page])
    else
      @nodes = end_of_association_chain.search_scope(params[:q]).paginate(:page => params[:page], :per_page => params[:per_page])
    end
    respond_to do |format|
      format.xml      {render_for_api :simple, :xml  => @nodes, :root => :nodes, :meta => meta}
      format.json     {render_for_api :simple, :json => @nodes, :root => :nodes, :meta => meta}
    end
    Counter.increment(source('search'))
  end

  api :GET, '/nodes/:id', 'Show an existing node.'
  param_group :filters
  def show
    show! do |format|
      format.xml    {render_for_api :simple, :xml  => @node, :root => :node}
      format.json   {render_for_api :simple, :json => @node, :root => :node}
    end
  end

  api :PUT, "/nodes/:id", "Update an existing node."
  param :id, Fixnum, required: true, desc: "Node's id you want to update"
  param_group :node
  error :code => 400, :desc => "Bad Request ", meta: { message: "The server could not understand your request. Verify that request parameters (and content, if any) are valid." }
  error :code => 406, :desc => "Not Acceptable ", meta: { message: "Either a parameter is missing or has a wrong value." }
  def update
    @node = resource
    @node.attributes = params

    if @node.valid?
      UpdateTagsJob.enqueue(@node.osm_id.abs, @node.osm_type, @node.tags, current_user, source('update'))

      respond_to do |wants|
        wants.json{ render :json => {:message => 'OK'}.to_json, :status => 202 }
        wants.xml{  render :xml  => {:message => 'OK'}.to_xml,  :status => 202 }
      end
    else
      respond_to do |wants|
        wants.json{ render :json => {:error => @node.errors}.to_json, :status => 400 }
        wants.xml{  render :xml  => {:error => @node.errors}.to_xml,  :status => 400 }
      end
    end
  end

  api :POST, "/nodes", "Create a new node."
  param_group :node
  error :code => 400, :desc => "Bad Request ", meta: { message: "The server could not understand your request. Verify that request parameters (and content, if any) are valid." }
  def create
    unwanted_keys = %w(action controller page per_page format)
    node_attributes = params.dup.delete_if { |k,v| unwanted_keys.include? k }

    @node = Poi.new(node_attributes)
    if @node.valid?
      if Rails.env.staging?
        @node.version = 1
        @node.osm_id = Poi.highest_id + 1
        @node.save
      else
        CreateNodeJob.enqueue(@node.lat, @node.lon, @node.tags, current_user, source('create'))
      end

      respond_to do |wants|
        wants.json{ render :json => {:message => 'OK'}.to_json, :status => 202 }
        wants.xml{  render :xml  => {:message => 'OK'}.to_xml,  :status => 202 }
      end

    else
      respond_to do |wants|
        wants.json{ render :json => {:error => @node.errors}.to_json, :status => 400 }
        wants.xml{  render :xml  => {:error => @node.errors}.to_xml,  :status => 400 }
      end
    end
  end

  api :PUT, "/nodes/:id/update_wheelchair", "Update wheelchair status for a given node"
  param :wheelchair, Poi::WHEELCHAIR_STATUS_VALUES.keys, required: true, desc: "The node's wheelchair status."
  error :code => 404, :desc => "Not Found", meta: { message: "The resource that you requested does not exist. Verify that any object id provided is valid." }
  error :code => 406, :desc => "Not Acceptable", meta: { message: "Either a parameter is missing or has a wrong value." }
  def update_wheelchair
    node = Poi.find(params[:id])
    updating_user = (user_signed_in? && current_user.app_authorized?) ? current_user : wheelmap_visitor
    UpdateTagsJob.enqueue(node.osm_id.abs, node.osm_type, { 'wheelchair' => wheelchair_param }, updating_user, source('tag'))
    respond_to do |wants|
      wants.json{ render :json => {:message => 'OK'}.to_json, :status => 202 }
      wants.xml{  render :xml  => {:message => 'OK'}.to_xml,  :status => 202 }
    end
  end

  api :PUT, "/nodes/:id/update_toilet", "Update toilet status for a given node"
  param :wheelchair_toilet, Poi::WHEELCHAIR_TOILET_VALUES.keys, required: true, desc: "The node's wheelchair toilet status."
  error :code => 404, :desc => "Not Found", meta: { message: "The resource that you requested does not exist. Verify that any object id provided is valid." }
  error :code => 406, :desc => "Not Acceptable", meta: { message: "Either a parameter is missing or has a wrong value." }
  def update_toilet
    node = Poi.find(params[:id])
    updating_user = (user_signed_in? && current_user.app_authorized?) ? current_user : wheelmap_visitor
    UpdateTagsJob.enqueue(node.osm_id.abs, node.osm_type, { 'toilets:wheelchair' => toilet_param }, updating_user, source('toilet'))
    respond_to do |wants|
      wants.json{ render :json => {:message => 'OK'}.to_json, :status => 202 }
      wants.xml{  render :xml  => {:message => 'OK'}.to_xml,  :status => 202 }
    end
  end

  api :GET, "/nodes/changes", "Get node changes stream"
  param :since, Date, :required => true, :desc => "Specifies start date"
  def changes
    timestamp = params[:since]
    if timestamp.nil?
      respond_to do |format|
        format.json { render :json => { :error => "Parameter 'since' required" }.to_json, :status => 400 }
      end
    else
      pois = PoiLog.where('created_at >= ?', timestamp)
      respond_to do |format|
        # We pass `:root => :pois` explicitly here because in case of an empty list
        # apparently acts_as_api is not able to figure out the desired value for the root element (which is `pois`) and defaults to `records`.
        format.json { render_for_api :changes_stream, :json => pois, :root => :pois, :status => 200 }
      end
    end
  end

  protected

  def collection
    @nodes ||= end_of_association_chain.including_category.paginate(:page => params[:page], :per_page => params[:per_page])
  end

  def meta
    @meta ||= {
      :conditions => {
        :page => params[:page],
        :per_page => params[:per_page],
        :format => params[:format]
      },
      :meta => {
        :page => params[:page],
        :num_pages => collection.total_pages,
        :item_count_total => collection.total_entries,
        :item_count => collection.compact.size
        }
      }
      @meta[:conditions][:search] = params[:q]    if params[:q]
      @meta[:conditions][:bbox]   = params[:bbox] if params[:bbox]
      @meta
  end

  def source(prefix='tag')
    @source ||= [prefix,iphone? ? 'iphone' : 'android'].join('_')
  end

  def check_for_way_id
    respond_to do |wants|
      wants.json{ render :json => {:error => 'This type of node is not editable'}.to_json, :status => 406 }
      wants.xml{  render :xml  => {:error => 'This type of node is not editable'}.to_xml,  :status => 406 }
    end if params[:id].to_i < 0 # Way ids are negative
  end

  def wheelchair_param
    key = :wheelchair
    allowed_values = Poi::WHEELCHAIR_STATUS_VALUES.keys
    params.require(key)
    value = params.permit(key).fetch(key)
    if allowed_values.include?(value.to_sym)
      value
    else
      raise ActionController::UnpermittedValue.new(key, value, allowed_values)
    end
  end

  def toilet_param
    key = :wheelchair_toilet
    allowed_values = Poi::WHEELCHAIR_TOILET_VALUES.keys
    params.require(key)
    value = params.permit(key).fetch(key)
    if allowed_values.include?(value.to_sym)
      value
    else
      raise ActionController::UnpermittedValue.new(key, value, allowed_values)
    end
  end

  def ensure_not_anonymous!
    if current_user.anonymous?
      respond_to do |format|
        format.json { render :json => {:message => 'Cannot use anonymous user'}.to_json, :status => 403 }
        format.xml  { render :xml  => {:message => 'Cannot use anonymous user'}.to_xml,  :status => 403 }
      end
    end
  end
end
