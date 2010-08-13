class UpdateSingleAttributeJob < Struct.new(:node_id, :client, :attribute_hash)
  
  def perform
    osm = OpenStreetMap.new(client)
    osm.update_single_attribute(node_id, attribute_hash)
  end
  
  def on_permanent_failure
    #TODO 
  end
  
end