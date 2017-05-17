# encoding: UTF-8

namespace :import do
  desc 'Import data from Heidelberg Hürdenlos'
  task from_heidelberg_huerdenlos: :environment do

    # This method needs to be on top otherwise it would take the method `wheelchair_status_from` from `import.rake` file
    def wheelchair_status_from(aa_ampel)
      case aa_ampel
      when 'Grün' then 'yes'
      when 'Gelb' then 'limited'
      when 'Rot' then 'no'
      else
        'unknown'
      end
    end

    poi = nil
    skipped = Hash.new(0)
    saved = Hash.new(0)

    file_name = ENV['FILE']
    raise 'Use bundle exec rake import:from_heidelberg_huerdenlos FILE=<file_name>' unless file_name
    provider = Provider.find_or_create_by(name: 'Heidelberg Hürdenlos')

    CSV.foreach(file_name, force_quotes: true, headers: true, encoding: 'UTF-8', header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:osm_id]

      if osm_id.blank?
        # Each csv record must refer to a unique identifier (osm_id), otherwise skip
        puts "Skipped: osm_id blank!"
        skipped[:removed] += 1
        next
      else
        # Find the POI in the DB
        poi = Poi.find_or_initialize_by(osm_id: osm_id)

        if poi
          provided_poi = ProvidedPoi.find_or_initialize_by(poi_id: osm_id, provider_id: provider.id)
          provided_poi.wheelchair = wheelchair_status_from(row[:aa_ampel])
          provided_poi.url        = row[:aa_direktlink]
          provided_poi.save!
          saved[:success] += 1
          puts "Saved ProvidedPoi with osm_id #{provided_poi.poi_id}."
        else
          puts "Skipped: osm_id #{osm_id} found in CSV but POI not found in the DB."
          skipped[:not_found] += 1
          next
        end
      end
    end
    puts
    puts "Skipped: #{skipped[:removed]} POI (removed)"
    puts "Skipped: #{skipped[:not_found]} POI (not found)"
    puts "Saved: #{saved[:success]} ProvidedPoi"
  end
end
