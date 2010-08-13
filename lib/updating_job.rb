class UpdatingJob < Struct.new(:node, :client)
  
  def perform
    osm = OpenStreetMap.new(client)
    osm.update_node(node)
  end
  
  def on_permanent_failure
    #TODO 
  end
end