Airbrake.configure do |config|
  config.api_key = ENV['airbrake_api_key']
  config.ignore << "Rosemary::Conflict"
  config.ignore << "Rosemary::ServerError"
  config.ignore << "Net::ReadTimeout"
end

