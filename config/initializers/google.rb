require 'ostruct'
require 'yaml'
google_config = YAML.load_file("#{Rails.root}/config/google.yml")
GoogleConfig = OpenStruct.new google_config[Rails.env]
