source 'https://rubygems.org'

group :default do
  gem 'rails', '3.0.20'
  gem 'pg'
  gem 'activerecord-import', '<0.3.0', :require => false
  gem 'oauth'
  gem 'devise', '1.5.4'
  gem 'compass'
  gem 'redgreengrid', :git => 'git@github.com:christoph-buente/redgreengrid.git'
  gem 'haml'
  gem 'sass'
  gem 'bootstrap-sass'
  gem 'geoip'
  gem 'formtastic', '1.2.4'
  gem 'delayed_job'
  gem 'delayed_job_active_record'
  gem 'daemons'
  gem 'libxml-ruby'
  gem 'hoptoad_notifier'
  gem 'whenever', :require => false
  gem "routing-filter"
  gem 'newrelic_rpm'
  gem 'acts_as_api'
  gem 'inherited_resources'
  gem 'has_scope'
#  gem 'mapfish'
  gem 'rake'
  gem 'yajl-ruby'
  gem 'ya2yaml'
  gem 'fastercsv'
  gem 'ruport'
  gem 'memcache-client'
  gem 'jammit'
  gem 'big_sitemap' #, :git => 'git@github.com:sozialhelden/big_sitemap.git'
  gem 'unicorn'
  gem 'rgeo'
  gem 'spatial_adapter'
  gem 'friendly_id', '~>3.3.1' # upgrade to 4.x takes more effort.
  gem 'will_paginate'
  gem 'omniauth-osm'
  gem 'rosemary'
  # gem 'rosemary', :path => '../rosemary'
  gem 'librato-metrics'
  gem 'librato-rails'
  gem 'jquery-rails'
#  gem 'system_timer' # Optional for librato dependency faraday
  gem 'multipart-post'
  gem 'activeadmin'
  gem 'kaminari'
  gem 'carrierwave'
  gem 'carrierwave-meta'
  gem 'carrierwave_backgrounder', '0.0.9'
  gem 'rmagick'
  gem 'flash_cookie_session'
  gem 'cacheable_flash'
  gem 'exifr'
  gem 'awesome_nested_set'
  gem 'i18n-js'
end

group :test, :development do
  gem 'rspec-rails', "2.12.0"
  gem 'spork'
  gem 'rb-fsevent'
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'guard-cucumber', "1.2.2"
end

group :test do
  gem 'webmock', :require => nil
  gem 'factory_girl_rails', "1.6.0"
  gem "capybara", "1.1.1"  # on mac, you need sudo port install libffi
  gem 'cucumber', "1.2.1"
  gem 'cucumber-rails', :require => false
  gem 'rspec', "2.12.0"
  gem 'autotest'
  gem 'nokogiri'
  gem 'pickle'
  gem 'launchy'
  gem 'database_cleaner'
  gem 'shoulda-matchers'
  gem 'syntax'
end

group :deployment do
  gem 'capistrano'
  gem 'capistrano-maintenance'
  gem 'capistrano-ext'
end
