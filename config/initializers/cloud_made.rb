require 'ostruct'
require 'yaml'
cloudmade_config = YAML.load_file("#{RAILS_ROOT}/config/cloudmade.yml")
CloudmadeConfig = OpenStruct.new cloudmade_config