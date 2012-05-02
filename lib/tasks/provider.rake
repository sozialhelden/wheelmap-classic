namespace :provider do
  desc 'Import data from provider'
  task :import => :environment do
    file_name = ENV['file']
    provider_name = ENV['provider']
    raise "Use bundle exec rake provider:import file=<file_name> provider=<provider_name>" if !file_name || !provider_name
    provider = Provider.find_or_create_by_name(provider_name)
    headers = [:OSM_Id, :OSM_Type, :OSM_Name, :OSM_Kategorie, :OSM_Rollstuhlstatus, :OSM_Latitude, :OSM_Longitude, :OSM_Strasse, :OSM_Hausnummer, :OSM_Stadt, :OSM_Plz, :AA_Direktlink, :AA_Ampel]
    FasterCSV.foreach(file_name, :force_quotes => true, :headers => headers) do |row|
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

    client    = Rosemary::BasicAuthClient.new('schmerzbereiter', 'password')
    api       = Rosemary::Api.new(client)
    changeset = Rosemary::Api.create_changeset('Import of Wheelchair data from Arzt-Auskunft')

    headers = [:OSM_Id, :OSM_Type, :OSM_Name, :OSM_Kategorie, :OSM_Rollstuhlstatus, :OSM_Latitude, :OSM_Longitude, :OSM_Strasse, :OSM_Hausnummer, :OSM_Stadt, :OSM_Plz, :AA_Direktlink, :AA_Ampel]
    FasterCSV.foreach(file_name, :force_quotes => true, :headers => headers) do |row|
      next if row[:OSM_Id] == 'OSM_Id'
      poi_id = find_poi_id(row)
      node = api.find_element(row[:OSM_Type], row[:OSM_Id]) rescue nil
      if node
        node.wheelchair = row[:AA_Ampel]
        api.save(node, changeset)
      end
    end
    changeset.close
  end

  def find_poi_id(row)
    row[:OSM_Type] == 'way' ? (row[:OSM_Id].to_i * -1) : row[:OSM_Id].to_i
  end
end