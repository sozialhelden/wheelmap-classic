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

  desc 'Import region from poly file'
  task :import => :environment do
    poly_file_name = ENV['FILE']
    region_name = ENV['NAME']
    parent_name = ENV['PARENT']
    raise "Use: bundle exec rake region:import FILE=berlin.poly NAME=Berlin PARENT=Deutschland" if !poly_file_name || !region_name

    raise "Region already exists" if Region.find_by_name(region_name)

    parent = Region.find_by_name(parent_name) if parent_name

    system "perl #{Rails.root}/script/poly2wkt.pl #{poly_file_name} > #{Rails.root}/tmp/#{region_name}.wkt"

    wkt_string = File.open("#{Rails.root}/tmp/#{region_name}.wkt").first
    puts wkt_string

    region = Region.new(:name => region_name, :parent_id => parent.try(:id), :grenze => wkt_string)
    region.grenze = Polygon.from_ewkt(wkt_string)
    region.save!

  end

end