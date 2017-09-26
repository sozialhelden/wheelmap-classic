require 'airbrake-ruby'

Airbrake.configure do |config|
  config.project_id = ENV['AIRBRAKE_PROJECT_ID']
  config.project_key = ENV['AIRBRAKE_API_KEY']
  config.environment = Rails.env
  config.ignore << 'Rosemary::Conflict'
  config.ignore << 'Rosemary::ServerError'
  config.ignore << 'Rosemary::Gone'
  config.ignore << 'Rosemary::Unavailable'
  config.ignore << 'Net::ReadTimeout'
end
