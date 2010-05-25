CloudMadeConfig = OpenStruct.new(YAML.load_file("#{RAILS_ROOT}/config/cloudmade.yml"))
Cloudmade.api_key = CloudMadeConfig.api_key