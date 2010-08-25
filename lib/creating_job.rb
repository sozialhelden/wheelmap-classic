class CreatingJob < Struct.new(:node, :client)
  
  def perform
    begin
      osm = OpenStreetMap.new(client)
      osm.create_node(node)
    rescue Exception => e
      HoptoadNotifier.notify(e, :action => 'perform',
                                :component => 'CreatingJob',
                                :parameters => {
                                  :node => node.inspect,
                                  :client => client.inspect
                                })
      raise e
    end
  end
  
  def on_permanent_failure
    #TODO 
  end
end