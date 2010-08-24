class UpdateSingleAttributeJob < Struct.new(:node_id, :client, :attribute_hash)
  
  def perform
    begin
      old_node = OpenStreetMap.get_node(node_id)
      new_node = OpenStreetMap.get_node(node_id)
      
      attribute_hash.each do |key,value|
        new_node.send("#{key}=", value)
      end
      
      # if old_node == new_node
      #   # Quit here, if there are no changes to be made
      #   HoptoadNotifier.notify(Exception.new('No update needed'), :component => 'UpdateSingleAttributeJob#perform', :parameters => {:old_node => old_node.inspect, :new_node => new_node.inspect, :client => client, :attributes => attribute_hash})
      #   return true
      # end
      
      raise ArgumentError.new("Client cannot be nil") if client.nil?
      osm = OpenStreetMap.new(client)
      osm.update_node(new_node)
    rescue OpenStreetMap::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :component => 'UpdateSingleAttributeJob#perform', :parameters => {:old_node => old_node.inspect, :new_node => new_node.inspect, :client => client, :attributes => attribute_hash})
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'UpdateSingleAttributeJob#perform', :parameters => {:node_id => node_id, :client => client, :attributes => attribute_hash})
      raise e
    end
    
  end
  
  def on_permanent_failure
    #TODO 
  end
  
end