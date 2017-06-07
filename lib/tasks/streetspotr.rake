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
        # Find the POI
        current_poi = Poi.find_by(osm_id: osm_id)

        unless current_poi
          puts "Skipped: The POI #{osm_id} would be skipped."
          @skipped[:provided_poi] += 1
          next
        else
          find_provided_poi(current_poi, provider)
        end
      end
      photo_check_dryrun(row)
    end

    puts
    pp = ProvidedPoi.all
    puts "EXISTING: ProvidedPois: #{pp.count}."
    puts "WOULD SKIP: Photos: #{@skipped[:photo]}, ProvidedPois: #{@skipped[:provided_poi]}"
    puts "WOULD SAVE ACTIONS: Photos: #{@saved[:photo]}, ProvidedPois: #{@saved[:provided_poi]}"
    puts "WOULD TOTAL SAVE ACTIONS: #{@count}."

    previous_poi = current_poi
  end

  desc 'Import data from StreetSpotr'
  task import: :environment do

    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:import file=<your_csv_file>' unless csv_file

    # Set to nil for records that have multiple entries sharing one osm_id
    current_poi = nil
    previous_poi = nil
    provider = Provider.find_or_create_by(name: 'Streetspotr')

    # Counter for save actions in total
    @count = 0
    @skipped = Hash.new(0)
    @saved = Hash.new(0)

    # Remove 4-byte characters (e.g. emoji) in strings
    UTF8_TO_UTF8MB4_CONVERTER = ->(str) { str.encode('utf-8', invalid: :replace, undef: :replace, replace: '').each_char.select { |char| char.bytesize < 4 }.join }

    CSV.foreach(csv_file, converters: UTF8_TO_UTF8MB4_CONVERTER, headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:osm_id]

      # Loop through CSV and check if record has osm_id
      if osm_id.blank?
        unless previous_poi
          puts "Skipped: osm_id blank and POI not found!"
          @skipped[:provided_poi] += 1
          next
        else
          current_poi = previous_poi
          find_or_initialize_provided_poi(current_poi, provider)
          photo_check(current_poi,row)
        end
      else
        # Find the POI
        current_poi = Poi.find_by(osm_id: osm_id)

        unless current_poi
          puts "Skipped: POI for osm_id #{osm_id} not found."
          @skipped[:provided_poi] += 1
          next
        else
          find_or_initialize_provided_poi(current_poi, provider)
          photo_check(current_poi,row)
        end
      end
    end

    puts
    pp = ProvidedPoi.all
    puts "EXISTING: ProvidedPois: #{pp.count}."
    puts "SKIPPED: Photos: #{@skipped[:photo]}, Provided Pois: #{@skipped[:provided_poi]}."
    puts "SAVE ACTIONS: Photos: #{@saved[:photo]}, Provided Pois: #{@saved[:provided_poi]}"
    puts "TOTAL SUCCESSFUL SAVE ACTIONS: #{@count}."

    previous_poi = current_poi
  end

  def photo(poi, row)
    photo_url = row[:photo_url]
    new_photo = poi.photos.build
    new_photo.remote_image_url = photo_url
    new_photo.source_url = photo_url
    new_photo.user = User.wheelmap_visitor
    new_photo
  end

  def photo_check(poi, row)
    image = Photo.find_by(source_url: row[:photo_url])

    # Check for photo duplicates
    if image
      puts "Skipped: PHOTO #{image.id} already exists."
      @skipped[:photo] += 1
      @count += 1
    else
      p = photo(poi, row)
      p.save!
      @count += 1
      @saved[:photo] += 1
      puts "Success: PHOTO for osm_id #{poi.id} saved!"
    end
  end

  def photo_check_dryrun(row)
    image = Photo.find_by(source_url: row[:photo_url])

    # Check for photo duplicates
    if image
      puts "Skipped: PHOTO #{image.id} already exists."
      @skipped[:photo] += 1
      @count += 1
    else
      puts "Success: A new photo would be saved."
      @saved[:photo] += 1
      @count += 1
    end
  end

  def find_or_initialize_provided_poi(poi, provider)
    provided_poi = ProvidedPoi.find_or_initialize_by(poi_id: poi.id, provider_id: provider.id)
    provided_poi.save!
    @count += 1
    @saved[:provided_poi] += 1
    puts "Success: Provided Poi with provided_poi_id #{provided_poi.id} saved!"
  end

  def find_provided_poi(poi, provider)
    provided_poi = ProvidedPoi.find_by(poi_id: poi.id, provider_id: provider.id)
    @count += 1
    @saved[:provided_poi] += 1
    puts "Success: Provided Poi would be saved!"
  end
end
