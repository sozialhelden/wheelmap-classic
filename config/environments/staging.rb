Wheelmap::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # The production environment is meant for finished, "live" apps.
  # Code is not reloaded between requests
  config.cache_classes = true

  # Full error reports are disabled and caching is turned on
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Specifies the header that your server uses for sending files
  config.action_dispatch.x_sendfile_header = 'X-Sendfile'

  config.eager_load = true

  # Compress JavaScripts and CSS
  config.assets.compress = true
  config.assets.js_compressor = :uglifier

  # Don't fallback to assets pipeline if a precompiled asset is missed
  config.assets.compile = false

  # Generate digests for assets URLs
  config.assets.digest = true

  # Defaults to Rails.root.join("public/assets")
  # config.assets.manifest = YOUR_PATH

  # Specifies the header that your server uses for sending files
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for nginx

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # See everything in the log (default is :info)
  config.log_level = :info

  # Use a different logger for distributed setups
  # config.logger = SyslogLogger.new
  config.logger = Logger.new($stdout)

  # Use a different cache store in staging
  # default is:
  # config.cache_store = :file_store, "tmp/cache/"
  config.cache_store = :mem_cache_store, 'app-database', { :namespace => "wheelmap/#{Rails.env}/",
                                                        :c_threshold => 10_000,
                                                        :compression => true,
                                                        :debug => Rails.env.staging?,
                                                        :readonly => false,
                                                        :urlencode => false
                                                      }

  # Disable Rails's static asset server
  # In production, Apache or nginx will already do this
  config.serve_static_assets = false

  # Enable serving of images, stylesheets, and javascripts from an asset server
  config.action_controller.asset_host = 'asset%d.staging.new.wheelmap.org'

  # Disable delivery errors, bad email addresses will be ignored
  # config.action_mailer.raise_delivery_errors = false
  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.default_url_options = { 
    :host => 'staging.wheelmap.org',
    :from => 'noreply@wheelmap.org',
  }

  config.action_mailer.smtp_settings = {
    :authentication => :plain,
    :address        => 'smtp.mailgun.org',
    :port           => 587,
    :domain         => 'mg.wheelmap.org',
    :user_name      => Rails.application.secrets.mail_user,
    :password       => Rails.application.secrets.mail_password
  }

  # Enable threaded mode
  # config.threadsafe!

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation can not be found)
  config.i18n.fallbacks = true
  config.i18n.available_locales = [:ar, :bg, :cs, :da, :de, :el, :en, :es, :fr, :hu, :is, :it, :ja, :ko, :lv, :pl, :pt, :pt_BR, :ru, :sk, :sv, :tlh, :tr, :zh_TW]

  # Send deprecation notices to registered listeners
  config.active_support.deprecation = :notify

  config.ember.variant = :development
end
