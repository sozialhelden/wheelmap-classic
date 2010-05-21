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
    puts "Fetching node: #{osmid} ..."
    if (node = fetch_node(osmid))
      puts "Old version: #{node.version}"
      puts "Old changeset: #{node.changeset}"
      puts "Creating new changeset ..."
      changeset_id = new_changeset
      puts "New changeset: #{changeset_id}"
      node.set_wheelchair(wheelchair,changeset_id)
      puts "Nodes changeset: #{node.changeset}"
      puts node.inspect
      puts node.to_xml
      new_version = put("/node/#{osmid}", :body => node.to_xml)
      puts "New version: #{new_version}"
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