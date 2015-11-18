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

    # Only load the plugins named here, in the order given (default is alphabetical).
    # :all can be used as a placeholder for all plugins not explicitly named.
    # config.plugins = [ :exception_notification, :ssl_requirement, :all ]
    require  'rack_i18n_locale_switcher'
#    require  'rack_request_logger'
    config.middleware.use(Rack::I18nLocaleSwitcher)
 #   config.middleware.use(Rack::RequestLogger)

    # Activate observers that should always be running.
    # config.active_record.observers = :cacher, :garbage_collector, :forum_observer

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

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

    # Precompile additional assets
    config.assets.precompile += %w( .svg .eot .woff .ttf )

    # Add the flash path
    config.assets.paths << Rails.root.join('app', 'assets', 'flash')

    # Precompile additional assets
    config.assets.precompile += %w( .swf )

    # Needed for the ActiveAdmin's manifest assets.
    config.assets.precompile += ['active_admin.css', 'active_admin.js']

    config.assets.precompile += %w( relaunch.css relaunch_ie.css screen.css node.css nodes.css search.css)
    config.assets.precompile += %w( relaunch.js ie.js modernizr.js default.js search.js nodes.js ember.js ember-data.js app.js)
    config.assets.precompile += %w( i18n/*.js )

    # Version of your assets, change this if you want to expire all your assets
    config.assets.version = '1.0'

    config.to_prepare do
      Devise::SessionsController.layout "relaunch"
    end

    # Command line options used when running browserify
    config.browserify_rails.commandline_options = "-t babelify"

    # Environments, in which to generate source maps
    config.browserify_rails.source_map_environments << "development"

    # Should the node_modules directory be evaluated for changes on page load
    config.browserify_rails.evaluate_node_modules = true

  end
end
