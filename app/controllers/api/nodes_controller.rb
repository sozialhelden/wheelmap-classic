class Api::NodesController < Api::ApiController
  defaults :resource_class => Poi, :collection_name => 'pois'

  actions :index, :show, :edit, :update, :create

  custom_actions :collection => :search, :member => :update_wheelchair

  optional_belongs_to :category
  optional_belongs_to :node_type

  # Make sure user authenticates itself using an api_key
  before_filter :authenticate_application!, :only => [:update, :create]
  before_filter :check_update_wheelchair_params,  :only => :update_wheelchair

  has_scope :bbox
  has_scope :wheelchair, :except => :update

  def index
    index! do |format|
      format.xml      {render_for_api :simple, :xml  => @nodes, :root => :nodes, :meta => meta}
      format.json     {render_for_api :simple, :json => @nodes, :root => :nodes, :meta => meta}
      format.geojson  {render :json => @nodes.to_geojson}
    end
  end

  def search
    @nodes ||= end_of_association_chain.search(params[:q]).paginate(:page => params[:page], :per_page => params[:per_page])
    respond_to do |format|
      format.xml      {render_for_api :simple, :xml  => @nodes, :root => :nodes, :meta => meta}
      format.json     {render_for_api :simple, :json => @nodes, :root => :nodes, :meta => meta}
    end
    Counter.increment('search_android')
  end

  def show
    show! do |format|
      format.xml    {render_for_api :simple, :xml  => @node, :root => :node}
      format.json   {render_for_api :simple, :json => @node, :root => :node}
    end
  end

  def update
    @node = resource
    @node.attributes = params

    if @node.valid?
      UpdateTagsJob.enqueue(@node.osm_id.abs, @node.osm_type, @node.tags, current_user, 'update_android')

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

  def create
    unwanted_keys = %w(action controller page per_page format)
    node_attributes = params.dup.delete_if { |k,v| unwanted_keys.include? k }

    @node = Poi.new(node_attributes)
    if @node.valid?
      if Rails.env.staging?
        @node.save
      else
        CreateNodeJob.enqueue(@node.lat, @node.lon, @node.tags, current_user, 'create_android')
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

  def update_wheelchair
    node = Poi.find(params[:id])
    updating_user = (user_signed_in? && current_user.app_authorized?) ? current_user : wheelmap_visitor
    UpdateTagsJob.enqueue(node.osm_id.abs, node.osm_type, { 'wheelchair' => params[:wheelchair] }, wheelmap_visitor, 'tag_android')

    respond_to do |wants|
      wants.json{ render :json => {:message => 'OK'}.to_json, :status => 202 }
      wants.xml{  render :xml  => {:message => 'OK'}.to_xml,  :status => 202 }
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

  def check_for_way_id
    respond_to do |wants|
      wants.json{ render :json => {:error => 'This type of node is not editable'}.to_json, :status => 406 }
      wants.xml{  render :xml  => {:error => 'This type of node is not editable'}.to_xml,  :status => 406 }
    end if params[:id].to_i < 0 # Way ids are negative
  end

  def check_update_wheelchair_params
    respond_to do |wants|
      wants.json{ render :json => {:error => 'Param wheelchair must be one of the following values: [yes, no, limited, unknown]'}.to_json, :status => 406 }
      wants.xml{  render :xml  => {:error => 'Param wheelchair must be one of the following values: [yes, no, limited, unknown]'}.to_xml,  :status => 406 }
    end if params[:wheelchair].blank? || ! Poi::WHEELCHAIR_STATUS_VALUES.keys.include?(params[:wheelchair].to_sym)
  end
end
