require 'fastercsv'
require 'net/http'
require 'xmlsimple'
require 'pp'

namespace :wheelmap do
  desc "Imports VBB CSV file"
  task :import_vbb do
    
    rows = FasterCSV.read(File.join(RAILS_ROOT, 'db', 'VBB_Berlin_Koordinaten.csv'))
    rows[130..135].each do |row|
      puts row.first
      xml_data = Net::HTTP.get_response(URI.parse(osm_url(row.first))).body
     osm_data = XmlSimple.xml_in(xml_data)
      puts osm_url(row.first)
      pp osm_data
      if osm_data['node'] and osm_data['node'].first
        node = osm_data['node'].first
        tags = clean_up_tags(parse_tags(node))
        puts "  #{tags['name']}"
        puts "  #{node['lat']}"
        puts "  #{node['id']}"
      end
    end
  end
end


def osm_url(name)
  "http://osmxapi.hypercube.telascience.org/api/0.6/node" +
  '%5Bname%3D' + URI::escape(name).gsub('+', '%2B') + '%5D' +
  '%5Bstation%3D' + %w(subway light_rail).join('%7C') + '%5D'
end


def parse_tags(node)
  returning({}) do |tags|
    if node['tag'].is_a?(Array)
      node['tag'].each do |tag|
        tags[tag["k"]] = tag["v"]
      end
    end
  end
end


def clean_up_tags(tags)
  returning tags do |tags|
    tags['station'] = 'subway' if tags['hvv:psv_type'] == 'U'
    tags['station'] = 'light-rail' if tags['hvv:psv_type'] == 'S'
    tags['amenity'] = 'ferry-terminal' if tags['ferry'] == 'halt'
  end
end
