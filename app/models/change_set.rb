#= Description
#
# This is a wrapper class updating Open Street Map Nodes
class ChangeSet
  include HTTParty
  #http://api.openstreetmap.org/api/0.6/changeset/create
  base_uri "http://api.openstreetmap.org/api/0.6/" #live
  # base_uri "http://api06.dev.openstreetmap.org/" #test
  basic_auth 'wheelmap_visitor', 'B1lderbuch'

  # This required a multistep 
  def self.update(osmid, wheelchair)
    RAILS_DEFAULT_LOGGER.debug "Fetching node: #{osmid} ..."
    if (node = fetch_node(osmid))
      RAILS_DEFAULT_LOGGER.debug "Old version: #{node.version}"
      RAILS_DEFAULT_LOGGER.debug "Old changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug "Creating new changeset ..."
      changeset_id = new_changeset
      RAILS_DEFAULT_LOGGER.debug "New changeset: #{changeset_id}"
      node.set_wheelchair(wheelchair,changeset_id)
      RAILS_DEFAULT_LOGGER.debug "Nodes changeset: #{node.changeset}"
      RAILS_DEFAULT_LOGGER.debug node.inspect
      RAILS_DEFAULT_LOGGER.debug node.to_xml
      new_version = put("/node/#{osmid}", :body => node.to_xml)
      RAILS_DEFAULT_LOGGER.debug "New version: #{new_version}"
      save_changeset(changeset_id)
    end
  end
  
  def self.fetch_node(osmid)
    result = get("/node/#{osmid}")
    node = OpenStreetMap::Node.new(result['osm']['node'])
  end
  
  def self.new_changeset
    put("/changeset/create", :body => '<osm><changeset><tag k="created_by" v="wheelmap.org"/><tag k="comment" v="Modify accessibility status for node"/></changeset></osm>')
  end
  
  def self.save_changeset(id)
    new_version = put("/changeset/#{id}/close")
  end
end