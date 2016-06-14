Wheelmap::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # In the development environment your application's code is reloaded on
  # every request.  This slows down response time but is perfect for development
  # since you don't have to restart the webserver when you make code changes.
  config.cache_classes = false

  config.cache_store = :mem_cache_store, 'localhost', { :namespace => "wheelmap/#{Rails.env}/",
                                                        :c_threshold => 10_000,
                                                        :compression => true,
                                                        :debug => Rails.env.development?,
                                                        :readonly => false,
                                                        :urlencode => false
                                                      }

  # Show full error reports and disable caching
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  config.eager_load = false

  # Raise exception on mass assignment protection for Active Record models
  config.active_record.mass_assignment_sanitizer = :strict

  # Don't care if the mailer can't send
  config.action_mailer.raise_delivery_errors = false
  config.action_mailer.default_url_options = { :host => '0.0.0.0:3000' }

  # Print deprecation notices to the Rails logger
  config.active_support.deprecation = :log

  # Only use best-standards-support built into browsers
  config.action_dispatch.best_standards_support = :builtin

  # We use sql as schema format, because schema.rb does not support spatial indexes.
  # These are used for geo data
  config.active_record.schema_format = :sql

  # Do not compress assets
  config.assets.compress = false

  # Expands the lines which load the assets
  config.assets.debug = true

  config.assets.digest = false

  config.ember.variant = :development

end

