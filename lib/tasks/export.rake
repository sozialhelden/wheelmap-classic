namespace :export do
  require 'csv'
  require 'rgeo'

  desc 'Export CSV of nodes in a category'
  task :category_nodes => :environment do
    category_name = ENV['CATEGORY']
    raise "Run rake export:category_nodes CATEGORY=sport" unless category_name
    category = Category.find_by_identifier(category_name)
    raise "Category #{category_name} not found!" unless category
    csv_string = ""
    csv_string = CSV.generate(:force_quotes => true) do |csv|
      csv << ["osm_id", "lat", "lon", "Rollstuhlstatus", "Kommentar", "name", "Typ", "Strasse", "Hausnummer", "PLZ", "Stadt", "Telefon", "URL"]
      category.pois.find_each do |poi|
        csv << [poi.osm_id, poi.lat, poi.lon, poi.wheelchair, poi.wheelchair_description, poi.name, poi.node_type.try(:localized_name), poi.street, poi.housenumber, poi.postcode, poi.city, poi.phone, poi.website]
      end
    end
    puts csv_string
  end

  desc 'Export CSV of nodes in a category and region'
  task :filter_region_nodes => :environment do
    region_name = ENV['REGION']
    raise "Run rake export:filter_region_nodes REGION=berlin" unless region_name
    region = Region.find(region_name)

    bounding_box = RGeo::Cartesian::BoundingBox.create_from_geometry(region.grenze)

    csv_string = CSV.generate(:force_quotes => true) do |csv_out|
      FCSV(STDIN, :force_quotes => true, :headers => true) do |csv_in|
        csv_out << ["osm_id", "lat", "lon", "Rollstuhlstatus", "Kommentar", "name", "Typ", "Strasse", "Hausnummer", "PLZ", "Stadt", "Telefon", "URL"]
        csv_in.each do |row|
          point = factory.point(row[2].to_f, row[1].to_f)
          if bounding_box.contains?(point) && grenze.contains?(point)
            # csv << [poi.osm_id, poi.lat, poi.lon, poi.wheelchair, poi.wheelchair_description, poi.name, poi.node_type.try(:localized_name), poi.street, poi.housenumber, poi.postcode, poi.city, poi.phone, poi.website]
            csv_out << row
          end
        end
      end
    end
    STDOUT.puts csv_string
  end


  desc 'Export CSV of nodes in a region'
  task :region_nodes => :environment do
    region_name = ENV['REGION']
    raise "Run rake export:region_nodes REGION=Berlin" unless region_name
    region = Region.find_by_name(region_name)
    raise "Region #{region_name} not found!" unless region
    csv_string = ""
    csv_string = FasterCSV.generate(:force_quotes => true) do |csv|
      csv << ["osm_id", "lat", "lon", "Rollstuhlstatus", "Kommentar", "name", "Typ", "Strasse", "Hausnummer", "PLZ", "Stadt", "Telefon", "URL"]
      Poi.including_category.within_region(region).find_each do |poi|
        csv << [poi.osm_id, poi.lat, poi.lon, poi.wheelchair, poi.wheelchair_description, poi.name, poi.node_type.try(:localized_name), poi.street, poi.housenumber, poi.postcode, poi.city, poi.phone, poi.website]
      end
    end
    puts csv_string
  end

  desc 'Export Categories and NodeTypes'
  task :categories => :environment do
    csv_string = ""
    csv_string = CSV.generate(:force_quotes => true) do |csv|
      csv << ["wheelmap-Kategorien", "wheelmap-Typen", "OSM Key", "OSM Value"]
      Category.all.each do |category|
        category.node_types.each do |node_type|
          csv << [node_type.category.localized_name, node_type.localized_name, node_type.osm_key, node_type.osm_value]
        end
      end
    end
    puts csv_string
  end

  desc 'Export Categories and NodeTypes'
  task :node_type_fixture => :environment do
    NodeType.order('osm_value ASC').all.each do |n|
      puts "tag_#{n.identifier}:"
      puts "  osm_key: #{n.osm_key}"
      puts "  osm_value: #{n.osm_value}"
      puts
    end

  end


  desc 'Export Categories and NodeTypes'
  task :sorted_categories => :environment do
    csv_string = ""
    csv_string = CSV.generate(:force_quotes => true) do |csv|
      csv << ["wheelmap-Kategorien", "wheelmap-Typen", "OSM Key", "OSM Value"]
      Category.all.sort_by{|c| I18n.t("poi.category.#{c.identifier}")}.each do |category|
        category.node_types.sort_by{|n| I18n.t("poi.name.#{category.identifier}.#{n.identifier}")}.each do |node_type|
          csv << [node_type.category.localized_name, node_type.localized_name, node_type.osm_key, node_type.osm_value]
        end
      end
    end
    puts csv_string
  end

  desc 'Export nodes from OSM XML file'
  task :for_yellow_pages => :environment do
    puts "Usage: rake export:from_osm outfile=germany.csv"
    outfile = ENV['outfile'] || 'germany.csv'

    csv_string = CSV.open(outfile, "wb", :force_quotes => true) do |csv|
      csv << ["OSM ID", "OSM TYPE", "Name", "Kategorie", "Rollstuhlstatus", "lat", "lon", "Strasse", "Hausnummer", "Stadt", "Postleitzahl"]
      Region.find('Germany').pois_of_children.including_category.find_each(start: Poi.lowest_id) do |poi|
        csv << [poi.id, poi.node_type.localized_name, poi.name, poi.category.localized_name, poi.wheelchair, poi.lat, poi.lon, poi.street, poi.housenumber, poi.city, poi.postcode]
        putc '.'
        STDOUT.flush
      end
    end
  end

  task :tags => :environment do
    puts "Tags = {"
    NodeType.order('osm_value ASC').all.each do |n|
      puts "  :#{n.osm_value} => :#{n.osm_key},"
    end
    puts "}"
  end

end