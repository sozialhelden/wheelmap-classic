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

end