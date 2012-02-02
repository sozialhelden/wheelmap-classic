namespace :housekeeping do

  desc 'remove sessions older than 10 days'
  task :session_cleanup => :environment do

    class Session < ActiveRecord::Base;end

    latest_date = 7.days.ago
    Session.find_in_batches(:batch_size => 100, :conditions => ['updated_at < ?', latest_date]) do |session_batch|
      Session.delete_all(['id in (?)', session_batch.map(&:id)])
      sleep 1
    end
  end

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

  desc 'Eliminate &#38; encodings from name and website'
  task :eliminate_ampersand => :environment do
    Poi.find_in_batches do |batch|
      batch.each do |node|
        old_name = node.tags['name']
        node.name = old_name.gsub(/&#38;|&amp;/, '&') if old_name
        old_website = node.tags['website']
        node.tags['website'] = old_website.gsub(/&#38;|&amp;/, '&') if old_website
        node.save(:validate => false) if node.tags['name'] != old_name || node.tags['website'] != old_website
      end
      putc '.'
      STDOUT.flush
    end
  end
end