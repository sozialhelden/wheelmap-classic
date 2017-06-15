# encoding: utf-8

namespace :streetspotr do
  include ActionView::Helpers::TextHelper

  desc 'Import data from StreetSpotr'
  task :import, [:mode] => [:environment] do |task, args|
    method = :find_or_create_by!

    if args[:mode] == :dry_run
      method = :find_or_initialize_by
    end

    # Set to nil for records that have multiple entries sharing one osm_id
    current_poi = nil
    previous_poi = nil
    provider = Provider.find_or_create_by(name: 'Streetspotr')

    @saved = Hash.new(0)
    @not_found = Hash.new(0)

    pp_before_import = ProvidedPoi.all.count
    photos_before_import = Photo.all.count

    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:import file=<your_csv_file>' unless csv_file

    # Remove 4-byte characters (e.g. emoji) in strings
    UTF8_TO_UTF8MB4_CONVERTER = ->(str) { str.encode('utf-8', invalid: :replace, undef: :replace, replace: '').each_char.select { |char| char.bytesize < 4 }.join }

    CSV.foreach(csv_file, converters: UTF8_TO_UTF8MB4_CONVERTER, headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:osm_id]

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
      ProvidedPoi.send(method, poi_id: current_poi.id, provider_id: provider.id) do |pp|
        @saved[:provided_poi] += 1
      end

      Photo.send(method, source_url: row[:photo_url]) do |p|
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
    puts "CREATED: Provided Pois: #{@saved[:provided_poi]}"
    pp = ProvidedPoi.all.count
    photos = Photo.all.count
    puts "EXISTING BEFORE IMPORT: ProvidedPois: #{pp_before_import}, Photos: #{photos_before_import}."
    puts "EXISTING AFTER IMPORT: ProvidedPois: #{pp}, Photos: #{photos}."
  end

  desc 'Check data from StreetSpotr'
  task check: :environment do
    Rake::Task['streetspotr:import'].invoke(:dry_run)
  end
end
