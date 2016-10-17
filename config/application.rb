require File.expand_path('../boot', __FILE__)

require 'rails/all'

if defined?(Bundler)
  # If you precompile assets before deploying to production, use this line
  Bundler.require(*Rails.groups(:assets => %w(development test)))
  # If you want your assets lazily compiled in production, use this line
  # Bundler.require(:default, :assets, Rails.env)
end

module Wheelmap
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Custom directories with classes and modules you want to be autoloadable.
    # config.autoload_paths += %W(#{config.root}/extras)
    config.autoload_paths += %W(#{config.root}/app/representations)
    config.autoload_paths += %W(#{config.root}/app/controllers/concerns)

    # Only load the plugins named here, in the order given (default is alphabetical).
    # :all can be used as a placeholder for all plugins not explicitly named.
    # config.plugins = [ :exception_notification, :ssl_requirement, :all ]
    require  'rack_i18n_locale_switcher'
#    require  'rack_request_logger'
    config.middleware.use(Rack::I18nLocaleSwitcher)
    config.i18n.fallbacks = true
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
    config.i18n.default_locale = :de
    config.i18n.enforce_available_locales = false

    config.i18n.available_locales = [:de]
    # Use all locales that we have translations when not in production
    Dir.glob(Rails.root.join('config', 'locales', '*')).each do |directory|
      locale = File.basename(directory).to_sym
      config.i18n.available_locales << locale unless config.i18n.available_locales.include?(locale)
    end

 #   config.middleware.use(Rack::RequestLogger)

    # Activate observers that should always be running.
    # config.active_record.observers = :cacher, :garbage_collector, :forum_observer

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # Configure CORS headers so requests to
    config.middleware.insert_before 0, "Rack::Cors" do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end

    # Configure the default encoding used in templates for Ruby 1.9.
    config.encoding = "utf-8"

    # Configure sensitive parameters which will be filtered from the log file.
    config.filter_parameters += [:password, :password_confirmation, :old_password, :key, :secret, :oauth_token, :oauth_secret]

    # Enable the asset pipeline
    config.assets.enabled = true

    # Use rspec for test generation instead of test:unit
    config.generators do |g|
      g.test_framework :rspec
    end

    # Add the fonts path
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

    # Add the flash path
    config.assets.paths << Rails.root.join('app', 'assets', 'flash')

    # Add the javascripts path
    config.assets.paths << Rails.root.join('app', 'assets', 'javascripts')

    # Add the images path
    config.assets.paths << Rails.root.join('app', 'assets', 'images')

    # Add the stylesheets path
    config.assets.paths << Rails.root.join('app', 'assets', 'stylesheets')

    config.browserify_rails.source_map_environments << 'development'
    config.browserify_rails.commandline_options = '-t babelify'

    config.to_prepare do
      Devise::SessionsController.layout "relaunch"
    end

  end
end
