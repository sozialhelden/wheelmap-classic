class UpdatingJob < Struct.new(:node, :client)
  
  def perform
    begin
      old_node = OpenStreetMap.get_node(node.id)
      node.tags.reverse_merge!(old_node.tags)
      osm = OpenStreetMap.new(client)
      osm.update_node(node)
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'UpdatingJob#perform', :action => 'perform', :parameters => {:node => node.inspect, :client => client.inspect})
      raise e
    end
    
  end
  
  def on_permanent_failure
    #TODO 
  end
end