namespace :housekeeping do
  
  desc 'Determine node type for nodes without node type'
  task :calculate_node_type => :environment do
    Poi.without_node_type.find_in_batches do |batch|
      batch.each do |node|
        node.set_node_type
        node.save if node.changed?
      end
      putc '.'
      STDOUT.flush
    end
  end
end