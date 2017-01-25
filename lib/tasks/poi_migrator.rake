require 'poi_migration'

namespace :poi_migrator do
	desc 'Migrate pois with invalid wheelchair_toilet tag'
	task :run => :environment do
		# Load pois from the database
		pois = Poi.where("tags LIKE ?", '%wheelchair_toilet%')
    puts "Loaded #{pois.count} pois with wheelchair_toilet tag"

    # Loop through pois, migrate and save
		pois.each do |poi|
			poi_migrate = PoiMigration.convert(poi)
			puts "Migrated Poi ID: #{poi.osm_id} - #{poi_migrate.tags}"
			poi_migrate.save
		end
	end
end
