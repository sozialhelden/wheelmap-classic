require 'faster_csv'
namespace :streetspotr do
  
  desc 'Upload provider entries to openstreetmap unless present'
  task :upload => :environment do
    provider = Provider.find_or_create_by_name('Streetspotr')
    updating_user = User.wheelmap_visitor
    provider.provided_pois.each do |pp|
      node = pp.poi
      if node.try(:wheelchair) == 'unknown'
        UpdateTagsJob.enqueue(node.osm_id.abs, node.osm_type, { 'wheelchair' => pp.wheelchair }, updating_user, 'tag_website')
      end
    end
  end
  
  task :check do
    csv_file = ENV['file']
    raise "Usage: bundle exec rake streetspotr:import file=<your_csv_file" unless csv_file

    hash = {}
    FasterCSV.foreach(csv_file, :headers => false) do |row|
      id = row[1]
      next if id.blank?
      w = wheelchair(step(row), toilet(row), indoor(row))
      hash[id] ||= []
      hash[id] << w unless hash[id].include?(w)
    end
    hash.keys.each do |id|
      puts "#{id} #{hash[id].inspect} => #{minimal_status(hash[id])}"
    end
  end
  
  desc 'Import data from StreetSpotr'
  task :import => :environment do
    csv_file = ENV['file']
    raise "Usage: bundle exec rake streetspotr:import file=<your_csv_file" unless csv_file
    poi = nil
    user = User.find_by_email()
    provider = Provider.find_or_create_by_name('Streetspotr')
    FasterCSV.foreach(csv_file, :headers => false) do |row|
      osm_id = row[1]
      if osm_id.blank?
        next unless poi
        # Just the image to process!!
        p = photo(poi, row)
        p.save
        sleep 0.1
      else
        # Find the poi
        puts ">>>>>>>>>>>>>>>>> #{osm_id.to_i}"
        poi = Poi.find(osm_id.to_i) rescue nil
        next unless poi

        # Set Node attributes
        status = wheelchair(step(row), toilet(row), indoor(row))
        provided_poi = ProvidedPoi.find_or_initialize_by_poi_id_and_provider_id(poi.id, provider.id)
        puts "SET WHEELCHAIR: '#{status}'"
        provided_poi.wheelchair = minimal_status([provided_poi.wheelchair, status].compact.uniq)
        puts provided_poi.inspect
        provided_poi.save
        p = photo(poi, row)
        p.save
        sleep 0.1
      end
    end   
      
    
  end
  
  def step(row)
    row[20] == 'Ja' ? true : false
  end
  
  def toilet(row)
    row[21] == 'Ja' ? true : false
  end
  
  def indoor(row)
    row[22] == 'Ja' ? true : false
  end
  
  def photo(node, row)
    photo_url = row[18]
    photo_caption = row[19]
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
  
  def wheelchair(step, toilet, indoor)
    if step 
      return 'no'
    else
      if toilet
        if indoor
          return 'yes'
        else
          return 'limited'
        end
      else
        return 'limited'
      end
    end
  end
end