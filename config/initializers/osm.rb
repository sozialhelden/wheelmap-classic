OpenStreetMapConfig = OpenStruct.new(YAML.load_file("#{RAILS_ROOT}/config/open_street_map.yml"))
OpenStreetMap,basic_auth( OpenStreetMapConfig.user, OpenStreetMapConfig.password)
