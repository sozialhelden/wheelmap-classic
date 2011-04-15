class UpdateSingleAttributeJob < Struct.new(:node_id, :user, :client, :attribute_hash)
  
  def perform
    raise ArgumentError.new("Client cannot be nil") if client.nil?
    raise ArgumentError.new("User cannot be nil") if user.nil?
    begin
      OpenStreetMap.logger = Delayed::Worker.logger
      old_node = OpenStreetMap.get_node(node_id)
      Delayed::Worker.logger.info("OLD WHEELCHAIR STATUS: #{old_node.wheelchair}")
      
      new_node = old_node.clone
      
      attribute_hash.each do |key,value|
        new_node.send("#{key}=", value)
      end

      Delayed::Worker.logger.info("NEW WHEELCHAIR STATUS: #{new_node.wheelchair}")
      
      # quit if all attributes hash are the same in old and new node
      if attribute_hash.all?{|key,value| old_node.send(key) == new_node.send(key)}
        Delayed::Worker.logger.info("Ignoring, nodes are the same!")
        return
      end

      
      osm = OpenStreetMap.new(client)
      
      changeset = osm.find_or_create_changeset(user.changeset_id, "Modified wheelchair tag on wheelmap.org")
      user.update_attribute('changeset_id', changeset.id) if user.changeset_id != changeset.id
      
      osm.update_node(new_node, user.changeset_id)
    rescue OpenStreetMap::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :action => 'perform', :component => 'UpdateSingleAttributeJob', :parameters => {:user => user.inspect, :new_node => new_node.inspect, :client => client.inspect, :attributes => attribute_hash})
    rescue Exception => e
      HoptoadNotifier.notify(e, :action => 'perform', :component => 'UpdateSingleAttributeJob', :parameters => {:user => user.inspect, :node_id => node_id, :client => client.inspect, :attributes => attribute_hash})
      raise e
    end
    
  end
  
  def on_permanent_failure
    #TODO 
  end
  
end