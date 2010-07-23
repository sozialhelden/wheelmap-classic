class SingleAttributeUpdatingJob < Struct.new(:node_id, :attribute_hash)
  
  def perform
    osm = OpenStreetMap.new(OpenStreetMapConfig.user, OpenStreetMapConfig.password)
    osm.update_single_attribute(node_id, attribute_hash)
  end
  
  def on_permanent_failure
    #TODO 
  end
  
end