namespace :housekeeping do

  desc 'Determine node type for nodes without node type'
  task :calculate_node_type => :environment do
    lowest_id = Poi.lowest_id
    Poi.without_node_type.find_in_batches(:start => lowest_id) do |batch|
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
    lowest_id = Poi.lowest_id
    Poi.find_in_batches(:start => lowest_id) do |batch|
      batch.each do |node|
        node.node_type_id = nil
        node.set_node_type
        Poi.update_all("node_type_id = #{node.node_type_id || 'NULL'}", "osm_id = #{node.id}") if node.changed?
      end
      putc '.'
      STDOUT.flush
    end
  end

  desc 'Recalculate image meta information'
  task :recalculate_image_versions => :environment do
    Photo.find_each do |photo|
      photo.image.recreate_versions!
    end
  end

  desc 'Recalculate image meta information'
  task :recalculate_image_meta => :environment do
    Photo.find_each do |photo|
      photo.image.store_meta
      photo.image.versions.map(&:first).each do |version|
        photo.image.send(version).store_meta
      end
      photo.save if photo.changed?
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

  desc "Remove all unfinished translations"
  task :remove_all_unfinished_locales do
    WHITELIST = %w(ar bg da de el en es fr is it ja ko lv pl pt-br ru sv sk tlh tr zh-tw)
    Dir.glob(Rails.root.join('config', 'locales', '*')).each do |directory|
      FileUtils.rm_rf(directory, :verbose => true) unless WHITELIST.include?(File.basename(directory))
    end
  end
end
