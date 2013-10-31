namespace :housekeeping do

  desc 'Remove queued nodes from osm file'
  task :remove_queued_nodes => :environment do
    file = ENV['file']
    raise "Run rake housekeeping:remove_queued_nodes file=<yourfile>" unless file
    File.open(file, 'r') do |f|
      while line = f.readline do
        next unless line =~ /<node/
        id="-5703"
        queued_node_id = line.gsub(/^.*?id=\"-(\d+)\".*?$/, '\1')
        queued_node = QueuedNode.find(queued_node_id) rescue nil
        if queued_node
          puts "Delete node with id #{queued_node_id}"
          queued_node.delete
        end
      end
    end
  end

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
      photo.process_image_upload = true
      begin
        photo.image.recreate_versions!
        photo.save
      rescue
        # something went wrong, maybe original file is missin
        Rails.logger.warn "Could not regenerate thumbnails for Photo ID: #{photo.id}!!!"
      end
    end
  end

  desc 'Recalculate image meta information'
  task :recalculate_image_meta => :environment do
    Photo.find_each do |photo|
      photo.process_image_upload = true
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
    WHITELIST = %w(ar bg da de el en es fr is it ja ko lv pl pt-BR ru sv sk tlh tr zh-TW)
    Dir.glob(Rails.root.join('config', 'locales', '*')).each do |directory|
      FileUtils.rm_rf(directory, :verbose => true) unless WHITELIST.include?(File.basename(directory))
    end
  end


  desc "Create a wheelmap visitor user account"
  task :create_wheelmap_visitor => :environment do
    w = User.find_or_initialize_by_email('visitor@wheelmap.org')
    w.password                      = 'extremelylongandunsecurepassword'
    w.password_confirmation         = 'extremelylongandunsecurepassword'
    w.wants_newsletter            ||= false
    w.oauth_token                 ||= "token"
    w.oauth_secret                ||= "secret"
    w.first_name                  ||= "Wheelmap"
    w.last_name                   ||= "Visitor"
    w.terms                         = true
    w.accepted_at                 ||= Time.now
    w.privacy_policy                = true
    w.privacy_policy_accepted_at  ||= Time.now
    w.save!
  end

  desc "Remove all shapes aka building shapes from db."
  task :remove_shapes => :environment do
    Poi.where('osm_id < 0').select(:osm_id).find_in_batches(start: Poi.lowest_id) do |batch|
      poi_ids = batch.map(&:osm_id)
      Poi.delete_all(:osm_id => poi_ids)
      sleep 0.1
      putc '.'
      STDOUT.flush
    end
  end

end
