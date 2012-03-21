require 'ostruct'
require 'yaml'
osm_config = YAML.load_file("#{Rails.root}/config/open_street_map.yml")
OpenStreetMapConfig = OpenStruct.new osm_config[Rails.env]
OpenStreetMap::Api.base_uri OpenStreetMapConfig.oauth_site