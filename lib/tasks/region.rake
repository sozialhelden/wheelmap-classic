require 'open-uri'

namespace :region do
  desc 'Create bounding box from region'
  task reset_region_ids: :environment do
    region_name = ENV['REGION']
    raise 'Use: bundle exec rake region:bbox REGION=Berlin' unless region_name

    region = Region.find(region_name)
    left, bottom, right, top = region.bounding_box
    lowest_id = Poi.lowest_id
    Poi.within_bbox(left, bottom, right, top).select('osm_id').find_in_batches(batch_size: 100, start: lowest_id) do |batch|
      # puts batch.inspect
      Poi.update_all('region_id = NULL', ['osm_id IN (?)', batch.map(&:osm_id)])
    end
  end

  desc 'Read from CSV File'
  task from_file: :environment do
    file = ENV['FILE']
    raise 'Usage: bundle exec rake region:from_file FILE=regions.csv' unless file
    File.open(file, 'r') do |infile|
      while (line = infile.gets)
        line = line.delete("\n")
        state, region, id = line.split(',')
        region = region.tr(' ', '_')

        wkt_file = Rails.root.join('db', 'data', 'wkt', 'Europe', 'Germany', state, "#{region}.wkt")
        next if File.exist? wkt_file

        uri = "http://osm102.openstreetmap.fr/~jocelyn/polygons/get_wkt.py?id=#{id}&params=0"
        wkt = URI.parse(uri).read # string representation is the response body

        directory = Rails.root.join('db', 'data', 'wkt', 'Europe', 'Germany', state)
        FileUtils.mkdir_p directory
        File.open(wkt_file, 'w') do |out|
          out.write wkt.gsub(/^SRID=4326;/, '')
        end
      end
    end
  end

  desc 'Create a region for the hole world'
  task create_world: :environment do
    region = Region.where(name: 'world').first_or_initialize
    region.parent_id = nil
    region.grenze = 'POLYGON((-180.0 -90.0, 180.0 -90.0, 180.0 90.0, -180.0 90.0, -180.0 -90.0))'
    region.save!
    region.move_to_root
  end

  desc 'Create continents from wkt files'
  task import: [:environment, :create_world] do
    world = Region.where(name: 'world')
    dirs = %w(db data)
    postfix = ['wkt']
    base_dir = File.join([Rails.root, dirs])
    imported_region = import_region(base_dir, postfix, world)
  end

  def import_region(base_dir, postfix, parent)
    puts "Importing files from #{base_dir}/#{postfix.join('/')} into #{parent.name}"
    Dir.glob(File.join(base_dir, postfix, '*.wkt')).each do |wkt_file_name|
      base_name = File.basename(wkt_file_name, '.wkt')
      region_name = base_name.tr('_', ' ')
      puts "importing: #{region_name} into parent #{parent.name}"
      imported_region = Region.find_by_name(region_name)
      if imported_region
        # First time import handling ony
        if imported_region.lft.nil? && imported_region.rgt.nil?
          root = parent
          root = root.parent while !root.nil? && !root.parent.nil?
          puts "Updating Region #{imported_region.id} lft: #{root.rgt + 1}, rgt: #{root.rgt + 2}"
          Region.where(id: imported_region.id).update_all(lft: (root.rgt + 1), rgt: (root.rgt + 2))
          imported_region = imported_region.reload
        end
        imported_region.move_to_child_of(parent) unless imported_region.parent == parent

        # update geo-shape in case it changed.
        wkt_string = File.open(wkt_file_name).first.strip
        imported_region.grenze = wkt_string
        begin
          imported_region.save
        rescue
          STDERR.puts "ERROR saving #{imported_region.name}!!!"
          imported_region
        end
      else
        imported_region = Region.from_wkt_file(wkt_file_name, parent)
      end

      import_region(base_dir, postfix + [base_name], imported_region)
      imported_region
    end
  end
end
