namespace :provider do
  desc 'Import data from provider'
  task :import => :environment do
    file_name = ENV['file']
    provider_name = ENV['provider']
    raise "Use bundle exec rake provider:import file=<file_name> provider=<provider_name>" if !file_name || !provider_name
    provider = Provider.find_or_create_by_name(provider_name)
    headers = [:OSM_Id, :OSM_Type, :OSM_Name, :OSM_Kategorie, :OSM_Rollstuhlstatus, :OSM_Latitude, :OSM_Longitude, :OSM_Strasse, :OSM_Hausnummer, :OSM_Stadt, :OSM_Plz, :AA_Direktlink, :AA_Ampel]
    CSV.foreach(file_name, :force_quotes => true, :headers => headers) do |row|
      poi_id = find_poi_id(row)
      poi = Poi.find(poi_id) rescue nil
      next unless poi
      provided_poi = ProvidedPoi.find_or_create_by_poi_id_and_provider_id(poi_id, provider)
      provided_poi.wheelchair = row[:"AA_Ampel"]
      provided_poi.url        = row[:"AA_Direktlink"]
      provided_poi.save!
    end
  end

  task :check_osm_status => :environment do
    file_name = ENV['file']
    raise "Use bundle exec rake provider:import file=<file_name>" unless file_name

    Rosemary::Api.base_uri 'http://www.openstreetmap.org'
    client    = Rosemary::BasicAuthClient.new('schmerzbereiter', 'password')
    api       = Rosemary::Api.new(client)
    changeset = api.find_or_create_open_changeset(11487230, 'Import of wheelchair data from Arzt Auskunft')
    puts changeset.id

    headers = [:OSM_Id, :OSM_Type, :OSM_Name, :OSM_Kategorie, :OSM_Rollstuhlstatus, :OSM_Latitude, :OSM_Longitude, :OSM_Strasse, :OSM_Hausnummer, :OSM_Stadt, :OSM_Plz, :AA_Direktlink, :AA_Ampel]
    CSV.foreach(file_name, :force_quotes => true, :headers => headers) do |row|
      next if row[:OSM_Id] == 'OSM_Id'
      poi_id = find_poi_id(row)
      begin
        node = api.find_element(row[:OSM_Type], row[:OSM_Id])
        if node.wheelchair != row[:AA_Ampel]
          node.wheelchair = row[:AA_Ampel]
          api.save(node, changeset)
        end
      rescue Rosemary::Unavailable => e
        puts "Timeout while fetching #{row[:OSM_Type]} #{row[:OSM_Id]}!"
        redo # If the API times out, we want to try fetch the node again
      rescue Rosemary::Gone => e
        puts "#{row[:OSM_Type]} #{row[:OSM_Id]} is gone!"
      rescue Rosemary::NotFound => e
        puts "#{row[:OSM_Type]} #{row[:OSM_Id]} not found!"
      rescue Exception => e
        puts e.message
      end
    end
    api.close_changeset(changeset)
  end

  def find_poi_id(row)
    row[:OSM_Type] == 'way' ? (row[:OSM_Id].to_i * -1) : row[:OSM_Id].to_i
  end
end