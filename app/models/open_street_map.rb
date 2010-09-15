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
    unless basic_auth_client? || oauth_client?
      raise ArgumentError.new('Unsupported Client')
    end
  end
  
  
  # Create a new node by calling the OSM API
  # Returns the id of the newly created node
  def create_node(node)
    node_id = nil
    RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
    changeset_id = create_changeset("Created new node on wheelmap.org")
    RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
    begin
      node.changeset = changeset_id
      RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug node.inspect
      RAILS_DEFAULT_LOGGER.debug node.to_xml
      node_id = create(node)
      RAILS_DEFAULT_LOGGER.debug "Node id: #{node_id}"
    ensure
      close_changeset(changeset_id) if changeset_id
    end
    self.class.get_node(node_id) if node_id
  end
  
  def update_node(node)
    RAILS_DEFAULT_LOGGER.debug "Old version: #{node.version}"
    RAILS_DEFAULT_LOGGER.debug "Old changeset: #{node.changeset}"
    RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
    changeset_id = create_changeset("Modified node on wheelmap.org")
    RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
    begin
      node.changeset = changeset_id
      RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug node.inspect
      RAILS_DEFAULT_LOGGER.debug node.to_xml
      new_version = update(node)
      RAILS_DEFAULT_LOGGER.debug "New version: #{new_version}"
    ensure
      close_changeset(changeset_id) if changeset_id
    end
  end
  
  def destroy_node(node, comment="Delete node on wheelmap.org")
    RAILS_DEFAULT_LOGGER.debug "Old version: #{node.version}"
    RAILS_DEFAULT_LOGGER.debug "Old changeset: #{node.changeset}"
    RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
    changeset_id = create_changeset(comment)
    RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
    begin
      node.changeset = changeset_id
      RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug node.inspect
      RAILS_DEFAULT_LOGGER.debug node.to_xml
      new_version = destroy(node)
      RAILS_DEFAULT_LOGGER.debug "New version: #{new_version}"
    ensure
      close_changeset(changeset_id) if changeset_id
    end
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
      elsif result['osm']['node'].is_a? Hash
        return [Node.new(result['osm']['node'])]
      else
        RAILS_DEFAULT_LOGGER.debug(result['osm']['node'].inspect)
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
  
  def destroy(node)
    url = request_uri("/node/#{node.id}")
    response = delete(url, :body => node.to_xml)
    self.class.raise_errors(response)
    response.body
  end

  def create_changeset(comment="Modify accessibility status for node")
    RAILS_DEFAULT_LOGGER.debug("OpenStreetMap#create_changeset")
    url = request_uri('/changeset/create')
    response = put(url, :body => "<osm><changeset><tag k='created_by' v='wheelmap.org'/><tag k='comment' v='#{comment}'/></changeset></osm>")
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
    if client.respond_to?(:put) # oauth_client?
      client.put(url, options)
    else # basic_auth_client?
      options.reverse_merge!(:basic_auth => client.credentials)
      self.class.put(url, options)
    end
  end
  
  # Indirection to HTTParty class method id called as instance method
  def post(url, options={})
    if client.respond_to?(:put) # oauth_client?
      client.post(url, options)
    else # basic_auth_client?
      options.reverse_merge!(:basic_auth => client.credentials)
      self.class.post(url, options)
    end
  end
  
  # Indirection to HTTParty class method id called as instance method
  def delete(url, options={})
    p url
    if client.respond_to?(:delete) # oauth_client?
      client.delete(url, options)
    else # basic_auth_client?
      options.reverse_merge!(:basic_auth => client.credentials)
      self.class.delete(url, options)
    end
  end

  def self.raise_errors(response)
    data = response.body
    # RAILS_DEFAULT_LOGGER.debug("HTTP REQUEST: #{response.inspect}")
    case response.code.to_i
      when 400
        RAILS_DEFAULT_LOGGER.error("(#{response.code}): #{response.message} - #{data if data}")
        raise BadRequest.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 404
        RAILS_DEFAULT_LOGGER.error("(#{response.code}): #{response.message} - #{data if data}")
        raise NotFound.new(data), "(#{response.code}): #{response.message}"
      when 405
        RAILS_DEFAULT_LOGGER.error("(#{response.code}): #{response.message} - #{data if data}")
        raise MethodNotAllowed.new(data), "(#{response.code}): #{response.message}"
      when 409
        RAILS_DEFAULT_LOGGER.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Conflict.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 410
        RAILS_DEFAULT_LOGGER.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Gone.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 412
        RAILS_DEFAULT_LOGGER.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Precondition.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 500
        RAILS_DEFAULT_LOGGER.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Unavailable, "(#{response.code}): #{response.message} - #{data if data}")
      when 502..503
        RAILS_DEFAULT_LOGGER.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Unavailable, "(#{response.code}): #{response.message} - #{data if data}")
    end
  end
end