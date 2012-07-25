require 'poi_locator'

namespace :poi do

  desc 'Assign all nodes to a region if possible.'
  task :locate => :environment do
    locator = PoiLocator.new
    locator.run
  end

end

namespace :region do

  desc 'Create bounding box from region'
  task :bbox => :environment do
    region_name = ENV['REGION']
    raise "Use: bundle exec rake region:bbox REGION=Berlin" unless region_name

    region = Region.find(region_name)

  end

end