namespace :streetspotr do

  desc 'Check data from StreetSpotr'
  task :check do
    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:check file=<your_csv_file>' unless csv_file

    wheelchair_status = Hash.new(0)

    CSV.foreach(csv_file, headers: true, header_converters: :symbol) do |row|
      id = row[:refid]
      next if id.blank?

      step = step(row)
      toilet = toilet(row)
      indoor = indoor(row)

      status = wheelchair_status(step, toilet, indoor)

      puts "Step: #{step}, Toilet: #{toilet}, Indoor: #{indoor} -> #{status}"

      wheelchair_status[status.to_sym] += 1
    end

    puts
    puts "Yes: #{wheelchair_status[:yes]}, Limited: #{wheelchair_status[:limited]}, No: #{wheelchair_status[:no]}."
  end

  desc 'Import data from StreetSpotr'
  task :import => :environment do
    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:import file=<your_csv_file>' unless csv_file

    poi = nil
    provider = Provider.find_or_create_by_name('Streetspotr')

    CSV.foreach(csv_file, headers: true, header_converters: :symbol, col_sep: ';') do |row|
      osm_id = row[:refid]

      if osm_id.blank?
        # Blank line (only photo)
        raise 'Empty line without valid previous POI line.' unless poi

        # OSM id is blank (multiple photos per POI)
        p = photo(poi, row)
        p.save
      else
        # Find the POI
        poi = Poi.find(osm_id.to_i) rescue nil

        raise 'Unknown POI.' unless poi

        step = step(row)
        toilet = toilet(row)
        indoor = indoor(row)

        # Set Node attributes
        status = wheelchair_status(step, toilet, indoor)

        puts "Step: #{step}, Toilet: #{toilet}, Indoor: #{indoor} -> #{status}"

        provided_poi = ProvidedPoi.find_or_initialize_by_poi_id_and_provider_id(poi.id, provider.id)
        # puts "SET WHEELCHAIR: '#{status}'"
        provided_poi.wheelchair = minimal_status([provided_poi.wheelchair, status].compact.uniq)
        provided_poi.save

        p = photo(poi, row)
        p.save
      end

      sleep 0.1
    end

    puts
    puts "Yes: #{wheelchair[:yes]}, Limited: #{wheelchair[:limited]}, No: #{wheelchair[:no]}."
  end

  def step(row)
    row[:step].to_s.strip.downcase == 'ja' ? true : false
  end

  def toilet(row)
    row[:toilet].to_s.strip.downcase == 'ja' ? true : false
  end

  def indoor(row)
    row[:indoor].to_s.strip.downcase == 'ja' ? true : false
  end

  def photo(node, row)
    photo_url = row[:photo_url]
    photo_caption = row[:photo_caption]
    new_photo = node.photos.build
    new_photo.remote_image_url = photo_url
    new_photo.caption = photo_caption unless photo_caption.blank?
    new_photo.user = User.wheelmap_visitor
    new_photo
  end

  def minimal_status(stati)
    return 'no' if stati.include?('no')
    return 'limited' if stati.include?('limited')
    return stati.first
  end

  def wheelchair_status(step, toilet, indoor)
    s = nil
    if step
      s = 'no'
    else
      if toilet
        if indoor
          s = 'yes'
        else
          s = 'limited'
        end
      else
        s = 'limited'
      end
    end

    s
  end
end