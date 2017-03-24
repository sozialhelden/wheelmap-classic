require 'poi_locator'

namespace :poi do
  desc 'Assign all nodes to a region if possible.'
  task locate: :environment do
    locator = PoiLocator.new(nil)
    locator.run
  end

  desc 'Relocate all unassigned POIs to new regions'
  task relocate: :environment do
    Region.all.each do |region|
      left, bottom, right, top = region.bounding_box
      Poi.where(region_id: 0).within_bbox(left, bottom, right, top).update_all(region_id: nil)
    end
    Rake::Task['poi:locate'].invoke
  end
end

namespace :region do
  desc 'Create bounding box from region'
  task bbox: :environment do
    region_name = ENV['REGION']
    raise 'Use: bundle exec rake region:bbox REGION=Berlin' unless region_name

    region = Region.find(region_name)
  end
end
