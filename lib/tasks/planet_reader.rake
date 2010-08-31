namespace :osm do  
  desc 'Import POI Data from STDIN'
  task :import_planet => :environment do
    puts "Reading vom STDIN. Please pipe some data in: rake osm:import_planet < planet.osm"
    p = PlanetReader.new(STDIN)
    p.load()
  end
end
