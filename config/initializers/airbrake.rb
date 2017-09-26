require 'airbrake-ruby'

Airbrake.configure do |config|
  config.project_id = ENV['AIRBRAKE_PROJECT_ID']
  config.project_key = ENV['AIRBRAKE_API_KEY']
  config.environment = Rails.env

  Airbrake.add_filter do |notice|
    notice.ignore! if notice.stash[:exception].is_a?([
      'Rosemary::Conflict',
      'Rosemary::ServerError',
      'Rosemary::Gone',
      'Rosemary::Unavailable',
      'Net::ReadTimeout'
    ])
  end
end
