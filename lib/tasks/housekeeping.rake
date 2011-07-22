namespace :housekeeping do
  
  desc 'Determine node type for nodes without node type'
  task :calculate_node_type => :environment do
    Poi.without_node_type.find_in_batches do |batch|
      batch.each do |node|
        node.set_node_type
        Poi.update_all("node_type_id = #{node.node_type_id || 'NULL'}", "osm_id = #{node.id}") if node.changed?
      end
      putc '.'
      STDOUT.flush
    end
  end
  
  desc 'Determine node type for nodes with outdated node type'
  task :recalculate_node_type => :environment do
    Poi.find_in_batches do |batch|
      batch.each do |node|
        node.node_type_id = nil
        node.set_node_type
        Poi.update_all("node_type_id = #{node.node_type_id || 'NULL'}", "osm_id = #{node.id}") if node.changed?
      end
      putc '.'
      STDOUT.flush
    end
  end
end