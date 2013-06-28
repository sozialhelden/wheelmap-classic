namespace :region do

  desc 'Create bounding box from region'
  task :reset_region_ids => :environment do
    region_name = ENV['REGION']
    raise "Use: bundle exec rake region:bbox REGION=Berlin" unless region_name

    region = Region.find(region_name)
    left, bottom, right, top =  region.bounding_box
    lowest_id = Poi.lowest_id
    Poi.within_bbox(left, bottom, right, top).select('osm_id').find_in_batches(:batch_size => 100, :start => lowest_id) do |batch|
      # puts batch.inspect
      Poi.update_all('region_id = NULL', ['osm_id IN (?)', batch.map(&:osm_id)])
    end

  end

  desc 'Create a region for the hole world'
  task :create_world => :environment do
    region = Region.find_or_initialize_by_name('World')
    region.parent_id = nil
    region.grenze = 'POLYGON((-180.0 -90.0, 180.0 -90.0, 180.0 90.0, -180.0 90.0, -180.0 -90.0))'
    region.save!
    region.move_to_root
  end

  desc 'Create continents from wkt files'
  task :import => [:environment, :create_world] do
    world = Region.find('world')
    dirs = ["db","data"]
    postfix = ["wkt"]
    base_dir = File.join([Rails.root, dirs ])
    imported_region = import_region(base_dir, postfix, world)
  end

  def import_region(base_dir, postfix, parent)
    puts "Importing files from #{base_dir}/#{postfix.join('/')} into #{parent.name}"
    Dir.glob(File.join(base_dir, postfix, "*.wkt")).each do |wkt_file_name|

      base_name = File.basename(wkt_file_name, '.wkt')
      region_name = base_name.gsub(/_/, ' ')
      puts "importing: #{region_name} into parent #{parent.name}"
      imported_region = nil
      if imported_region = Region.find_by_name(region_name)
        # First time import handling ony
        if imported_region.lft.nil? and imported_region.rgt.nil?
          root = parent
          while !root.nil? && !root.parent.nil? do
            root = root.parent
          end
          puts "Updating Region #{imported_region.id} lft: #{root.rgt + 1}, rgt: #{root.rgt + 2}"
          Region.where(:id => imported_region.id).update_all(:lft => (root.rgt + 1), :rgt => (root.rgt + 2))
          imported_region = imported_region.reload
        end
        imported_region.move_to_child_of(parent) unless imported_region.parent == parent

        # update geo-shape in case it changed.
        wkt_string = File.open(wkt_file_name).first.strip
        # For some reason INSERT Statement with geomFromWKB inserts null value.
        Region.where(:id => imported_region.id).update_all(:grenze => wkt_string)
        # imported_region.grenze = Polygon.from_ewkt(wkt_string)
        # imported_region.save
      else
        imported_region = Region.from_wkt_file(wkt_file_name, parent)
      end

      import_region(base_dir, postfix + [base_name], imported_region)
      imported_region
    end
  end
end