#= Description
#
# This is a wrapper class updating Open Street Map Nodes
class OpenStreetMap
  include HTTParty
  API_VERSION = "0.6".freeze
  #http://api.openstreetmap.org/api/0.6/changeset/create

  # production "http://api.openstreetmap.org/api/#{API_VERSION}" #live
  base_uri "#{OpenStreetMapConfig.oauth_site}/api/#{API_VERSION}"
  # basic_auth(OpenStreetMapConfig.user, OpenStreetMapConfig.password)
  
  attr_reader :client
  
  # Initialize with basic auth credentials
  def initialize(client)
    @client = client
    if basic_auth_client?
      RAILS_DEFAULT_LOGGER.debug("Using BasicAuthClient")
      self.class.basic_auth client.username, client.password
    elsif oauth_client?
      RAILS_DEFAULT_LOGGER.debug("Using OauthClient")
      self.class.delegate :put, :to => :client
    else
      raise ArgumentError.new('Unsupported Client')
    end
  end
  
  
  # update a singe attribute via basic auth
  def update_single_attribute(osmid, attribute_hash)
    if (node = self.class.get_node(osmid))
      changeset_id = create_changeset
      node.changeset = changeset_id
      attribute_hash.each do |key,value|
        node.send("#{key}=", value)
      end
      new_version = update(node)
      close_changeset(changeset_id)
      node
    end
  end
  
  def update_node(node)
    RAILS_DEFAULT_LOGGER.debug "Old version: #{node.version}"
    RAILS_DEFAULT_LOGGER.debug "Old changeset: #{node.changeset}"
    RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
    changeset_id = create_changeset
    RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
    node.changeset = changeset_id
    RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
    RAILS_DEFAULT_LOGGER.debug node.inspect
    RAILS_DEFAULT_LOGGER.debug node.to_xml
    new_version = update(node)
    RAILS_DEFAULT_LOGGER.debug "New version: #{new_version}"
    close_changeset(changeset_id)
  end
  
  def self.round_bounding_box(bbox)
    west,south,east,north = bbox.split(',').map(&:to_f)
    RAILS_DEFAULT_LOGGER.debug("BBOX: #{bbox}")
    x = (east + west) / 2.0
    RAILS_DEFAULT_LOGGER.debug("X: #{x}")
    y = (north + south) / 2.0
    RAILS_DEFAULT_LOGGER.debug("Y: #{y}")
    west = (x - 0.005)
    south = (y - 0.005)
    east = (x + 0.005)
    north = (y + 0.005)
    new_bbox = sprintf("%.3f,%.3f,%.3f,%.3f",west,south,east,north)
    RAILS_DEFAULT_LOGGER.debug("NEW BBOX: #{new_bbox}")
    new_bbox
  end

  # Fetch all nodes with given type within bounding box
  def self.nodes(bbox=nil, types=nil)
    base_uri "#{OpenStreetMapConfig.xapi_site}/api/#{API_VERSION}"
    bbox ||= "13.397,52.523,13.406,52.526"
    # bbox = round_bounding_box(bbox)
    types = 'amenity,shop,leisure,sport,historic,natural,power,tourism,railway'
    
    types = types.split(',')
    type_string = types.map(&:underscore).join('|')
    RAILS_DEFAULT_LOGGER.debug("TYPES: #{type_string}")
    begin
      # RAILS_DEFAULT_LOGGER.warn("#{self.base_uri}/#{self.api_key.upcase}/geocoding/v2/find.js?bbox=#{normalized_bbox}&object_type=#{types}&results=100")
      bounding_box = CGI.escape("[bbox=#{bbox}]")
      amenity_types = CGI.escape("[#{type_string}]")
      t = Time.now
      RAILS_DEFAULT_LOGGER.debug "Fetching now: /node#{bounding_box}#{amenity_types}"
      
      result = get("/node#{bounding_box}#{amenity_types}")
      RAILS_DEFAULT_LOGGER.debug "Finished: #{Time.now - t}s"
      if result['osm']['node'].blank? 
        RAILS_DEFAULT_LOGGER.debug "Found no nodes"
        return []
      else
        osm_nodes = result['osm']['node'].map{|node_data| Node.new(node_data)}
        RAILS_DEFAULT_LOGGER.debug("Found #{osm_nodes.size} nodes")
        osm_nodes
      end
    rescue Exception => e
      raise e
      RAILS_DEFAULT_LOGGER.error(e.message)
      return []
    end
  end
  
  # Fetch the node from OSM API with the given ID
  def self.get_node(osmid)
    base_uri "#{OpenStreetMapConfig.oauth_site}/api/#{API_VERSION}"
    response = get("#{base_uri}/node/#{osmid}", :timeout => 15)
    raise_errors(response)
    node = OpenStreetMap::Node.new(response['osm']['node'])
  end
  
  # This requires a multistep 
  # def self.update_node(node, oauth=nil)
  #   RAILS_DEFAULT_LOGGER.debug "Fetching node: #{node.id} ..."
  #   if (node = get_node(node.id))
  #     RAILS_DEFAULT_LOGGER.debug "Old version: #{node.version}"
  #     RAILS_DEFAULT_LOGGER.debug "Old changeset: #{node.changeset}"
  #     RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
  #     changeset_id = create_changeset
  #     RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
  #     node.changeset = changeset_id
  #     RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
  #     RAILS_DEFAULT_LOGGER.debug node.inspect
  #     RAILS_DEFAULT_LOGGER.debug node.to_xml
  #     new_version = update(node)
  #     RAILS_DEFAULT_LOGGER.debug "New version: #{new_version}"
  #     close_changeset(changeset_id)
  #   end
  # end
  

  # Create a new node by calling the OSM API
  # Returns the id of the newly created node
  def create_node(node)
    RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
    changeset_id = create_changeset
    RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
    node.changeset = changeset_id
    RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
    RAILS_DEFAULT_LOGGER.debug node.inspect
    RAILS_DEFAULT_LOGGER.debug node.to_xml
    node_id = create(node)
    RAILS_DEFAULT_LOGGER.debug "Node id: #{node_id}"
    close_changeset(changeset_id)
    get_node(node_id)
  end
  
  private
  
  def create(node)
    url = request_uri("/node/create")
    response = put(url, :body => node.to_xml)
    self.class.raise_errors(response)
    response.body.to_i
  end
    
  def update(node)
    url = request_uri("/node/#{node.id}")
    response = put(url, :body => node.to_xml)
    self.class.raise_errors(response)
    response.body
  end
  
  def create_changeset
    RAILS_DEFAULT_LOGGER.debug("OpenStreetMap#create_changeset")
    url = request_uri('/changeset/create')
    response = put(url, :body => '<osm><changeset><tag k="created_by" v="wheelmap.org"/><tag k="comment" v="Modify accessibility status for node"/></changeset></osm>')
    self.class.raise_errors(response)
    response.body.to_i
  end
  
  def close_changeset(id)
    url = request_uri("/changeset/#{id}/close")
    response = put(url)
    self.class.raise_errors(response)
    response.body
  end
  
  def request_uri(path)
    url = ''
    if oauth_client?
      url = "/api/#{API_VERSION}#{path}"
    else
      url = "#{OpenStreetMapConfig.oauth_site}/api/#{API_VERSION}#{path}"
    end
    RAILS_DEFAULT_LOGGER.debug("calculated URI: #{url}")
    url
  end
  
  def oauth_client?
    @client.is_a? OauthClient
  end
  
  def basic_auth_client?
    @client.is_a? BasicAuthClient
  end
  
  # Indirection to HTTParty class method id called as instance method
  def put(url, options={})
    self.class.put(url, options)
  end
  
  # Indirection to HTTParty class method id called as instance method
  def post(url, options={})
    self.class.post(url, options)
  end
  
  def self.raise_errors(response)
    # RAILS_DEFAULT_LOGGER.debug("HTTP REQUEST: #{response.inspect}")
    case response.code.to_i
      when 400
        data = response.body
        raise BadRequest.new(data), "(#{response.code}): #{response.message} - #{data['error'] if data}"
      when 404
        data = response.body
        raise NotFound.new(data), "(#{response.code}): #{response.message}"
      when 405
        data = response.body
        raise MethodNotAllowed.new(data), "(#{response.code}): #{response.message}"
      when 409
        data = response.body
        raise Conflict.new(data), "(#{response.code}): #{response.message} - #{data['error'] if data}"
      when 410
        data = response.body
        raise Gone.new(data), "(#{response.code}): #{response.message} - #{data['error'] if data}"
      when 412
        data = response.body
        raise Precondition.new(data), "(#{response.code}): #{response.message} - #{data['error'] if data}"
      when 500
        raise Unavailable, "(#{response.code}): #{response.message}"
      when 502..503
        raise Unavailable, "(#{response.code}): #{response.message}"
    end
  end
end