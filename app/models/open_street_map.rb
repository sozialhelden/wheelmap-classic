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
  
  # Initialize with basic auth credentials
  def initialize(username, password)
    self.class.basic_auth username, password
  end
  
  
  # update a singe attribute via basic auth
  def update_single_attribute(osmid, attribute_hash)
    if (node = self.class.get_node(osmid))
      changeset_id = self.class.create_changeset
      node.changeset = changeset_id
      attribute_hash.each do |key,value|
        node.send("#{key}=", value)
      end
      new_version = self.class.update(node)
      self.class.close_changeset(changeset_id)
      node
    end
  end

  # Fetch all nodes with given type within bounding box
  def self.nodes(bbox=nil, types="amenity")
    base_uri "#{OpenStreetMapConfig.xapi_site}/api/#{API_VERSION}"
    bbox ||= "13.397643,52.523102,13.406419,52.526392"
    types = 'amenity' if types.blank?
    types = types.split(',')
    types << 'amenity' unless types.include?('amenity')
    type_string = types.map(&:underscore).join('|')
    begin
      # RAILS_DEFAULT_LOGGER.warn("#{self.base_uri}/#{self.api_key.upcase}/geocoding/v2/find.js?bbox=#{normalized_bbox}&object_type=#{types}&results=100")
      bounding_box = CGI.escape("[bbox=#{bbox}]")
      amenity_types = types.blank? ? types : CGI.escape("[#{type_string}]")
      t = Time.now
      RAILS_DEFAULT_LOGGER.debug "Fetching now"
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
    response = get("#{base_uri}/node/#{osmid}", :timeout => 5)
    raise_errors(response)
    node = OpenStreetMap::Node.new(response['osm']['node'])
  end
  
  # This requires a multistep 
  def self.update_node(node, oauth=nil)
    RAILS_DEFAULT_LOGGER.debug "Fetching node: #{osmid} ..."
    if (node = get_node(node.id))
      RAILS_DEFAULT_LOGGER.debug "Old version: #{node.version}"
      RAILS_DEFAULT_LOGGER.debug "Old changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
      changeset_id = create_changeset(oauth)
      RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
      node.set_wheelchair(wheelchair,changeset_id)
      RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug node.inspect
      RAILS_DEFAULT_LOGGER.debug node.to_xml
      new_version = update(node,oauth)
      RAILS_DEFAULT_LOGGER.debug "New version: #{new_version}"
      close_changeset(changeset_id, oauth)
    end
  end
  

  # Create a new node by calling the OSM API
  # Returns the id of the newly created node
  def self.create_node(node)
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
  
  def self.create(node)
    response = put("#{self.base_uri}/node/create", :body => node.to_xml)
    raise_errors(response)
    response.body.to_i
  end
    
  def self.update(node)
    response = put("#{self.base_uri}/node/#{node.id}", :body => node.to_xml)
    raise_errors(response)
    response.body
  end
  
  def self.create_changeset
    response = put("#{self.base_uri}/changeset/create", :body => '<osm><changeset><tag k="created_by" v="wheelmap.org"/><tag k="comment" v="Modify accessibility status for node"/></changeset></osm>')
    raise_errors(response)
    response.body.to_i
  end
  
  def self.close_changeset(id)
    response = put("#{self.base_uri}/changeset/#{id}/close")
    raise_errors(response)
    response.body
  end
  
  def self.raise_errors(response)
    RAILS_DEFAULT_LOGGER.warn("HTTP REQUEST: #{response.inspect}")
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
  
  def self.parse(response)
    response.body
  end
end