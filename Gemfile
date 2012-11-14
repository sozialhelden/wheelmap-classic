source 'http://rubygems.org'

group :default do
  gem 'rails', '3.0.17'
  gem 'mysql2', '~>0.2.18'
  gem 'oauth'
  gem 'devise'
  gem 'compass', '0.10.6'
  gem 'redgreengrid', :git => 'git@github.com:christoph-buente/redgreengrid.git'
  gem 'haml'
  gem 'sass'
  gem 'geoip'
  gem 'formtastic', '1.2.4'
  gem 'delayed_job'
  gem 'delayed_job_active_record'
  gem 'daemons'
  gem 'libxml-ruby'
  gem 'crewait', :path => "#{File.expand_path(__FILE__)}/../vendor/gems/crewait-0.1.6"
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
  gem 'big_sitemap', :git => 'git@github.com:sozialhelden/big_sitemap.git'
  gem 'unicorn'
  gem 'rgeo'
  gem 'spatial_adapter'
  gem 'friendly_id', '~>3.3.1' # upgrade to 4.x takes more effort.
  gem 'will_paginate'
  gem 'omniauth-osm'
  gem 'rosemary'
  #gem 'rosemary', :path => '../rosemary'
  gem 'librato-metrics'
  gem 'system_timer' # Optional for librato dependency faraday
  gem 'multipart-post'
  gem 'activeadmin'
  gem 'kaminari'
  gem 'carrierwave'
  gem 'rmagick'
  gem 'flash_cookie_session'
  gem 'exifr'
end

group :test, :development do
  gem 'rspec-rails', "2.8"
  gem 'spork'
  gem 'rb-fsevent'
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'guard-cucumber'
  gem 'ruby-debug'
end

group :test do
  gem 'webmock'
  gem 'factory_girl_rails'
  gem "capybara"  # on mac, you need sudo port install libffi
  gem 'cucumber'
  gem 'cucumber-rails'
  gem 'rspec'
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
  gem 'capistrano-ext'
end
