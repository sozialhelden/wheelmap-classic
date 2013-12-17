source 'https://rubygems.org'

group :default do
  gem 'rails', '3.2.16'
  gem 'mysql2'
  gem 'activerecord-import', '<0.3.0', :require => false
  gem 'rgeo'
  gem 'rgeo-activerecord'
  gem 'activerecord-mysql2spatial-adapter'
  gem 'oauth'
  gem 'devise'
  gem 'devise-encryptable'
  gem 'redgreengrid', :git => 'git@github.com:christoph-buente/redgreengrid.git'
  gem 'haml'
  gem 'formtastic', '2.2.1'
  gem 'delayed_job'
  gem 'delayed_job_active_record'
  gem 'daemons'
  gem 'libxml-ruby'
  gem 'airbrake'
  gem 'whenever', :require => false
  gem "routing-filter"
  gem 'newrelic_rpm'
  gem 'acts_as_api'
  gem 'inherited_resources'
  gem 'has_scope'
  gem 'rake'
  gem 'yajl-ruby'
  gem 'ya2yaml'
  gem 'ruport'
  gem 'memcache-client'
  # gem 'jammit'
  gem 'big_sitemap'
  gem 'unicorn'
  gem 'friendly_id', '~>3.3.1' # upgrade to 4.x takes more effort.
  gem 'will_paginate'
  gem 'omniauth-osm'
  gem 'rosemary'
  # gem 'rosemary', :path => '../rosemary'
  gem 'librato-metrics'
  gem 'librato-rails'
#  gem 'system_timer' # Optional for librato dependency faraday
  gem 'multipart-post'
  gem 'sass-rails' # goes here instead of group assets because activeadmin uses it in the initializer
  gem 'activeadmin', '0.6.2'
  gem 'meta_search'
  gem 'kaminari'
  gem 'carrierwave'
  gem 'carrierwave-meta'
  gem 'carrierwave_backgrounder'
  gem 'rmagick'
  gem 'flash_cookie_session'
  gem 'cacheable_flash'
  gem 'exifr'
  gem 'awesome_nested_set'
  gem 'i18n-js'
  gem 'font-awesome-rails'
  gem 'ember-rails'
  gem 'backup'
  gem 'geocoder'
  gem 'ruby-progressbar'
end

group :assets do
  gem 'jquery-rails', '2.3.0'
  gem 'coffee-rails'
  gem 'uglifier'
  gem 'compass'
  gem 'compass-colors'
  gem 'compass-rails'
  gem 'bootstrap-sass'
end

group :test, :development do
  gem 'rspec-rails'
  gem 'spork'
  gem 'rb-fsevent'
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'guard-cucumber', "1.2.2"
end

group :test do
  gem 'webmock', :require => nil
  gem 'factory_girl_rails'
  gem "capybara", "1.1.1"  # on mac, you need sudo port install libffi
  gem 'cucumber', "1.2.1", :require => false
  gem 'cucumber-rails', :require => false
  gem 'rspec', "2.12.0"
  gem 'autotest', :require => false
  gem 'nokogiri'
  gem 'pickle', :require => false
  gem 'launchy', :require => false
  gem 'database_cleaner', :require => false
  gem 'shoulda-matchers'
  gem 'syntax'
  gem 'email_spec'
end

group :production do
  gem 'therubyracer'
end

group :deployment do
  gem 'capistrano'
  gem 'capistrano-maintenance'
  gem 'capistrano-ext'
end
