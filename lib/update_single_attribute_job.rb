class UpdateSingleAttributeJob < Struct.new(:node_id, :client, :attribute_hash)
  
  def perform
    begin
      osm = OpenStreetMap.new(client)
      osm.update_single_attribute(node_id, attribute_hash)
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'UpdateSingleAttributeJob#perform', :parameters => {:node_id => node_id, :client => client, :attributes => attribute_hash})
      raise e
    end
    
  end
  
  def on_permanent_failure
    #TODO 
  end
  
end