#= Description
#
# This is a wrapper class updating Open Street Map Nodes
class OldOsm
  include HTTParty
  API_VERSION = "0.6".freeze
  #http://api.openstreetmap.org/api/0.6/changeset/create

  # production "http://api.openstreetmap.org/api/#{API_VERSION}" #live
  base_uri "#{OpenStreetMapConfig.oauth_site}/api/#{API_VERSION}"
  # basic_auth(OpenStreetMapConfig.user, OpenStreetMapConfig.password)

  attr_reader :client
  cattr_accessor :logger

  # Initialize with basic auth credentials
  def initialize(client)
    @client = client
    unless basic_auth_client? || oauth_client?
      raise ArgumentError.new('Unsupported Client')
    end
  end

  def logger
    self.class.logger
  end

  def self.logger
    @@logger || Rails.logger
  end


  # Create a new node by calling the OSM API
  # Returns the id of the newly created node
  def create_node(node, changeset_id)
    node_id = nil
    node.changeset = changeset_id
    node_id = create(node)
    self.class.get_node(node_id) if node_id
  end

  def update_node(node, changeset_id)
    logger.info "Old version: #{node.version}"
    logger.info "Old changeset: #{node.changeset}"
    node.tap do |n|
      n.changeset = changeset_id
      n.version = update(n)
    end
  end

  def update_node_with_changeset(node, user)
    changeset = find_or_create_changeset(user.changeset_id, "Modified node on wheelmap.org")
    user.update_attribute('changeset_id', changeset.id) if user.changeset_id != changeset.id
    update_node(node, user.changeset_id)
  end

  def update_way(way, changeset_id)
    logger.info "Old version: #{way.version}"
    logger.info "Old changeset: #{way.changeset}"
    way.changeset = changeset_id
    new_version = update_w(way)
    way.version = new_version
    way
  end

  def destroy_node(node, comment="Delete node on wheelmap.org")
    logger.info "Old version: #{node.version}"
    logger.info "Old changeset: #{node.changeset}"
    logger.info "Creating new changeset ..."
    changeset_id = create_changeset(comment)
    logger.info "New changeset: #{changeset_id}"
    begin
      node.changeset = changeset_id
      logger.info "Nodes changeset: #{node.changeset}"
      logger.info node.inspect
      logger.info node.to_xml
      new_version = destroy(node)
      logger.info "New version: #{new_version}"
    ensure
      close_changeset(changeset_id) if changeset_id
    end
  end

  # Fetch all nodes with given type within bounding box
  def self.nodes(bbox=nil, types=nil)
    base_uri "#{OpenStreetMapConfig.xapi_site}/api/#{API_VERSION}"
    bbox ||= "13.397,52.523,13.406,52.526"
    # bbox = round_bounding_box(bbox)
    types = 'amenity,shop,leisure,sport,historic,natural,power,tourism,railway'

    types = types.split(',')
    type_string = types.map(&:underscore).join('|')
    logger.info("TYPES: #{type_string}")
    begin
      # logger.warn("#{self.base_uri}/#{self.api_key.upcase}/geocoding/v2/find.js?bbox=#{normalized_bbox}&object_type=#{types}&results=100")
      bounding_box = CGI.escape("[bbox=#{bbox}]")
      amenity_types = CGI.escape("[#{type_string}]")
      t = Time.now
      logger.info "Fetching now: /node#{bounding_box}#{amenity_types}"

      result = get("/node#{bounding_box}#{amenity_types}")
      logger.info "Finished: #{Time.now - t}s"
      if result['osm']['node'].blank?
        logger.info "Found no nodes"
        return []
      elsif result['osm']['node'].is_a? Hash
        return [Node.new(result['osm']['node'])]
      else
        logger.info(result['osm']['node'].inspect)
        osm_nodes = result['osm']['node'].map{|node_data| Node.new(node_data)}
        logger.info("Found #{osm_nodes.size} nodes")
        osm_nodes
      end
    rescue Exception => e
      raise e
      logger.error(e.message)
      return []
    end
  end

  # Fetch the node from OSM API with the given ID
  def self.get_node(osmid)
    logger.info("OldOsm#get_node #{osmid}")
    base_uri "#{OpenStreetMapConfig.oauth_site}/api/#{API_VERSION}"
    response = get("#{base_uri}/node/#{osmid}", :timeout => 15)
    raise_errors(response)
    node = OldOsm::Node.new(response['osm']['node'])
  end

  # Fetch the node from OSM API with the given ID
  def self.get_way(osmid)
    logger.info("OldOsm#get_way #{osmid}")
    base_uri "#{OpenStreetMapConfig.oauth_site}/api/#{API_VERSION}"
    response = get("#{base_uri}/way/#{osmid}", :timeout => 15)
    raise_errors(response)
    way = OldOsm::Way.new(response['osm']['way'])
  end

  def self.get_changeset(id)
    logger.info("OldOsm#get_changeset #{id}")
    base_uri "#{OpenStreetMapConfig.oauth_site}/api/#{API_VERSION}"
    response = get("#{base_uri}/changeset/#{id}")
    logger.info "#{base_uri}/changeset/#{id}"
    raise_errors(response)
    changeset = OldOsm::Changeset.new(response['osm']['changeset'])
  end

  def create(node)
    logger.info("OldOsm#create")
    logger.info(node.inspect)
    url = request_uri("/node/create")
    response = put(url, :body => node.to_xml)
    self.class.raise_errors(response)
    node_id = response.body.to_i
    logger.info("Node id: #{node_id}")
    node_id
  end

  def update(node)
    logger.info("OldOsm#update #{node.id}")
    logger.info node.inspect
    url = request_uri("/node/#{node.id}")
    response = put(url, :body => node.to_xml)
    self.class.raise_errors(response)
    new_version = response.body
    logger.info("New version: #{new_version}")
    new_version
  end

  def update_w(way)
    logger.info("OldOsm#update #{way.id}")
    logger.info way.inspect
    url = request_uri("/way/#{way.id}")
    response = put(url, :body => way.to_xml)
    self.class.raise_errors(response)
    new_version = response.body
    logger.info("New version: #{new_version}")
    new_version
  end

  def destroy(node)
    url = request_uri("/node/#{node.id}")
    response = delete(url, :body => node.to_xml)
    self.class.raise_errors(response)
    response.body
  end

  def find_or_create_changeset(id, comment="Modify accessibility status for node")
    changeset = nil
    changeset = self.class.get_changeset(id) unless id.blank?
    changeset = create_changeset(comment) if (changeset.nil? || changeset.closed?)
    changeset
  end

  def create_changeset(comment="Modify accessibility status for node")
    logger.info("OldOsm#create_changeset")
    url = request_uri('/changeset/create')
    response = put(url, :body => "<osm><changeset><tag k='created_by' v='wheelmap.org'/><tag k='comment' v='#{comment}'/></changeset></osm>")
    self.class.raise_errors(response)
    changeset_id = response.body.to_i
    logger.info("New Changeset ID: #{changeset_id}")
    if changeset_id == 0
      raise "Something went wrong with creating new changeset! #{changeset_id}"
    else
      self.class.get_changeset(changeset_id)
    end
  end

  def close_changeset(id)
    logger.info("OldOsm#close_changeset #{id}")
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
    logger.info("calculated URI: #{url}")
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
    # logger.info("HTTP REQUEST: #{response.inspect}")
    case response.code.to_i
      when 400
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise BadRequest.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 401
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise BadRequest.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 404
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise NotFound.new(data), "(#{response.code}): #{response.message}"
      when 405
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise MethodNotAllowed.new(data), "(#{response.code}): #{response.message}"
      when 409
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Conflict.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 410
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Gone.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 412
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Precondition.new(data), "(#{response.code}): #{response.message} - #{data if data}"
      when 500
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Unavailable, "(#{response.code}): #{response.message} - #{data if data}"
      when 502..503
        logger.error("(#{response.code}): #{response.message} - #{data if data}")
        raise Unavailable, "(#{response.code}): #{response.message} - #{data if data}"
    end
  end
end
