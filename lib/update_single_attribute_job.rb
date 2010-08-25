class UpdateSingleAttributeJob < Struct.new(:node_id, :client, :attribute_hash)
  
  def perform
    begin
      new_node = OpenStreetMap.get_node(node_id)
      
      attribute_hash.each do |key,value|
        new_node.send("#{key}=", value)
      end
      
      raise ArgumentError.new("Client cannot be nil") if client.nil?
      osm = OpenStreetMap.new(client)
      osm.update_node(new_node)
    rescue OpenStreetMap::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :action => 'perform', :component => 'UpdateSingleAttributeJob', :parameters => {:new_node => new_node.inspect, :client => client.inspect, :attributes => attribute_hash})
    rescue Exception => e
      HoptoadNotifier.notify(e, :action => 'perform', :component => 'UpdateSingleAttributeJob', :parameters => {:node_id => node_id, :client => client.inspect, :attributes => attribute_hash})
      raise e
    end
    
  end
  
  def on_permanent_failure
    #TODO 
  end
  
end