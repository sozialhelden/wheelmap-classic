# encoding: utf-8

namespace :streetspotr do
  include ActionView::Helpers::TextHelper

  desc 'Check data from StreetSpotr'
  task check: :environment do
    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:check file=<your_csv_file>' unless csv_file

    current_poi = nil
    previous_poi = nil

    @count = 0
    @skipped = Hash.new(0)
    @saved = Hash.new(0)
    provider = Provider.find_or_initialize_by(name: 'Streetspotr')

    CSV.foreach(csv_file, headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:osm_id]

      # Loop through CSV and check if record has osm_id
      if osm_id.blank?
        unless previous_poi
          puts "Skipped: The POI would be skipped."
          @skipped[:provided_poi] += 1
          next
        else
          current_poi = previous_poi
          find_provided_poi(current_poi, provider)
        end
      else
        begin
          # Find the POI
          current_poi = Poi.find_by!(osm_id: osm_id)
        rescue ActiveRecord::RecordNotFound
          puts "Skipped: The POI #{osm_id} would be skipped."
          @skipped[:provided_poi] += 1
          next
        end
        find_provided_poi(current_poi, provider)
        previous_poi = current_poi
      end
      photo_check_dryrun(row)
    end

    puts
    pp = ProvidedPoi.all
    photos = Photo.all
    puts "EXISTING: ProvidedPois: #{pp.count}, Photos: #{photos.count}."
    puts "WOULD SKIP: Photos: #{@skipped[:photo]}, ProvidedPois: #{@skipped[:provided_poi]}"
    puts "WOULD SAVE ACTIONS: Photos: #{@saved[:photo]}, ProvidedPois: #{@saved[:provided_poi]}"
  end

  desc 'Import data from StreetSpotr'
  task import: :environment do

    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:import file=<your_csv_file>' unless csv_file

    # Set to nil for records that have multiple entries sharing one osm_id
    current_poi = nil
    previous_poi = nil
    provider = Provider.find_or_create_by(name: 'Streetspotr')

    @saved = Hash.new(0)
    @not_found = Hash.new(0)

    pp_before_import = ProvidedPoi.all.count
    photos_before_import = Photo.all.count

    # Remove 4-byte characters (e.g. emoji) in strings
    UTF8_TO_UTF8MB4_CONVERTER = ->(str) { str.encode('utf-8', invalid: :replace, undef: :replace, replace: '').each_char.select { |char| char.bytesize < 4 }.join }

    CSV.foreach(csv_file, converters: UTF8_TO_UTF8MB4_CONVERTER, headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:osm_id]
      # binding.pry

      # Loop through CSV and check if record has osm_id
      if osm_id.blank?
        unless previous_poi
          puts "Skipped: osm_id blank and POI not found!"
          @not_found[:poi_and_osm_id] += 1
          next
        else
          current_poi = previous_poi
        end
      else
        begin
          # Find the POI
          current_poi = Poi.find_by!(osm_id: osm_id)
        rescue ActiveRecord::RecordNotFound
          puts "Skipped: POI for osm_id #{osm_id} not found."
          @not_found[:poi] += 1
          next
        end
      end
      ProvidedPoi.find_or_create_by!(poi_id: current_poi.id, provider_id: provider.id)
      Photo.find_or_create_by(source_url: row[:photo_url]) do |p|
        p.poi = current_poi
        p.remote_image_url = p.source_url
        p.user = User.wheelmap_visitor
        @saved[:photo] += 1
      end
      previous_poi = current_poi
    end

    puts
    puts "POIS not found: #{@not_found[:poi]}."
    puts "POIS and OSM_ID nil: #{@not_found[:poi_and_osm_id]}."
    puts "CREATED: Photos: #{@saved[:photo]}"
    pp = ProvidedPoi.all.count
    photos = Photo.all.count
    puts "EXISTING BEFORE IMPORT: ProvidedPois: #{pp_before_import}, Photos: #{photos_before_import}."
    puts "EXISTING AFTER IMPORT: ProvidedPois: #{pp}, Photos: #{photos}."
  end

  def find_provided_poi(poi, provider)
    provided_poi = ProvidedPoi.find_by(poi_id: poi.id, provider_id: provider.id)
    @saved[:provided_poi] += 1
    puts "Success: Provided Poi would be saved!"
  end
end
