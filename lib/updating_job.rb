class UpdatingJob < Struct.new(:node, :client)
  
  def perform
    old_node = OpenStreetMap.get_node(node.id)
    node.tags.reverse_merge!(old_node.tags)
    osm = OpenStreetMap.new(client)
    osm.update_node(node)
  end
  
  def on_permanent_failure
    #TODO 
  end
end