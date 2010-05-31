require 'ostruct'
require 'yaml'
osm_config = YAML.load_file("#{RAILS_ROOT}/config/open_street_map.yml")
OpenStreetMapConfig = OpenStruct.new osm_config[RAILS_ENV]
