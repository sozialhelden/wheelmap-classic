require 'yaml'
require 'librato/metrics'
unless Rails.env.test?
  metrics_config = YAML.load_file("#{Rails.root}/config/metrics.yml")[Rails.env]
  Librato::Metrics.authenticate(metrics_config['email'], metrics_config['api_key'])
end