#= Description
#
# This is a wrapper class updating Open Street Map Nodes
module OpenStreetMap
  include HTTParty
  API_VERSION = "0.6".freeze
  #http://api.openstreetmap.org/api/0.6/changeset/create
  # base_uri "http://api.openstreetmap.org/api/#{API_VERSION}" #live
  base_uri OpenStreetMapConfig.oauth_site
  # basic_auth(OpenStreetMapConfig.user, OpenStreetMapConfig.password)
  
  # This required a multistep 
  def self.update(osmid, oauth, wheelchair)
    RAILS_DEFAULT_LOGGER.debug "Fetching node: #{osmid} ..."
    if (node = get_node(osmid))
      RAILS_DEFAULT_LOGGER.debug "Old version: #{node.version}"
      RAILS_DEFAULT_LOGGER.debug "Old changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
      changeset_id = create_changeset(oauth)
      RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
      node.set_wheelchair(wheelchair,changeset_id)
      RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug node.inspect
      RAILS_DEFAULT_LOGGER.debug node.to_xml
      new_version = update_node(node,oauth)
      RAILS_DEFAULT_LOGGER.debug "New version: #{new_version}"
      save_changeset(changeset_id, oauth)
    end
  end
  
  def self.get_node(osmid)
    response = get("/node/#{osmid}")
    raise_errors(response)
    RAILS_DEFAULT_LOGGER.debug(response.inspect)
    node = OpenStreetMap::Node.new(response['osm']['node'])
  end
    
  def self.update_node(node, oauth)
    response = oauth.put("#{self.base_uri}/node/#{node.id}", node.to_xml)
    raise_errors(response)
    response.body
  end
  
  def self.create_changeset(oauth)
    response = oauth.put("#{self.base_uri}/changeset/create", '<osm><changeset><tag k="created_by" v="wheelmap.org"/><tag k="comment" v="Modify accessibility status for node"/></changeset></osm>')
    raise_errors(response)
    response.body
  end
  
  def self.save_changeset(id, oauth)
    response = oauth.put("#{self.base_uri}/changeset/#{id}/close")
    raise_errors(response)
  end
  
  def self.raise_errors(response)
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