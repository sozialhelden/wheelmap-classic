require 'poi_locator'

namespace :poi do

  desc 'Assign all nodes to a region if possible.'
  task :locate => :environment do
    locator = PoiLocator.new
    locator.run
  end
end