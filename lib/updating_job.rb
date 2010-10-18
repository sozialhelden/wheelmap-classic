class UpdatingJob < Struct.new(:node, :client)
  
  def perform
    begin
      lat = node.lat
      lon = node.lon
      OpenStreetMap.logger = Delayed::Worker.logger
      old_node = OpenStreetMap.get_node(node.id)
      old_tags = old_node.tags
      Delayed::Worker.logger.debug("OLD TAGS: #{old_tags.to_yaml}")
      new_tags = node.tags.reverse_merge(old_tags)
      Delayed::Worker.logger.debug("NEW TAGS: #{new_tags.to_yaml}")
      node = old_node.clone
      node.tags = new_tags
      node.lat = lat
      node.lon = lon
      # if old_node == node
      #   # Quit here, if there are no changes to be made
      #   HoptoadNotifier.notify(Exception.new('No update needed'), :component => 'UpdatingJob#perform', :parameters => {:old_node => old_node.inspect, :node => node.inspect, :client => client})
      #   return true 
      # end

      raise ArgumentError.new("Client cannot be nil") if client.nil?
      osm = OpenStreetMap.new(client)
      osm.update_node(node)
    rescue OpenStreetMap::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :component => 'UpdatingJob#perform', :parameters => {:old_node => old_node.inspect, :node => node.inspect, :client => client})
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'UpdatingJob#perform', :action => 'perform', :parameters => {:node => node.inspect, :client => client.inspect})
      raise e
    end
    
  end
  
  def on_permanent_failure
    #TODO 
  end
end