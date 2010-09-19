require 'ostruct'
require 'yaml'
google_config = YAML.load_file("#{RAILS_ROOT}/config/google.yml")
GoogleConfig = OpenStruct.new google_config[RAILS_ENV]
