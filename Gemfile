source 'https://rubygems.org'

group :default do
  gem 'rails', '3.2.22.1'
  gem 'mysql2', '~> 0.3.0'
  gem 'activerecord-import', '<0.3.0', :require => false
  gem 'rgeo'
  gem 'rgeo-activerecord'
  gem 'activerecord-mysql2spatial-adapter'
  gem 'oauth'
  gem 'devise', '~> 2.2'
  gem 'devise-encryptable'
  gem 'redgreengrid', :git => 'https://github.com/christoph-buente/redgreengrid.git'
  gem 'haml'
  gem 'formtastic', '2.2.1'
  gem 'formtastic-bootstrap'
  gem 'simple_form'
  gem 'delayed_job'
  gem 'delayed_job_active_record'
  gem 'daemons'
  gem 'libxml-ruby'
  gem 'airbrake', '~> 4.1'
  gem 'whenever', :require => false
  gem "routing-filter"
  gem 'newrelic_rpm'
  gem 'acts_as_api'
  gem 'inherited_resources', '~> 1.4.0'
  gem 'has_scope'
  gem 'rake', '~> 10.4'
  gem 'yajl-ruby'
  gem 'ya2yaml'
  gem 'ruport'
  gem 'memcache-client'
  # gem 'jammit'
  gem 'big_sitemap'
  gem 'unicorn'
  gem 'friendly_id', '~>4.0.0' # upgrade to 4.x was easy
  gem 'will_paginate'
  gem 'omniauth-osm'
  gem 'rosemary'
  # gem 'rosemary', :path => '../rosemary'
  gem 'librato-metrics'
  gem 'librato-rails'
#  gem 'system_timer' # Optional for librato dependency faraday
  gem 'multipart-post'
  gem 'sass-rails' # goes here instead of group assets because activeadmin uses it in the initializer
  gem 'sass', '~>3.3' # >= 3.3 is needed for BEM syntax
  gem 'activeadmin', '0.6.6'
  gem 'meta_search'
  gem 'kaminari', '~> 0.14'
  gem 'kaminari-i18n'
  gem 'carrierwave', github: 'carrierwaveuploader/carrierwave', ref: 'c2ee2e8' # to be used before release 0.11.0 becaus of deprecation warnings
  gem 'carrierwave-meta', '~> 0.0.7'
  gem 'carrierwave_backgrounder', '~> 0.4.2'
  gem 'rmagick'
  gem 'flash_cookie_session'
  gem 'cacheable_flash'
  gem 'exifr'
  gem 'awesome_nested_set', '<3.0'
  gem 'i18n', '<0.7.0'
  gem 'i18n-js', '~> 3.0.0.rc9'
  gem 'font-awesome-rails', '~> 3.2.1'
  gem 'ember-rails', '~> 0.14'
  gem 'ember-data-source', '~> 0.14'
  gem 'ember-source', '~> 1.1.2'
  gem 'backup'
  gem 'geocoder'
  gem 'ruby-progressbar'
  gem 'figaro'
  gem 'strong_parameters'
  gem 'apipie-rails'
  gem 'htmlentities', require: false
  gem 'test-unit', '~> 3.0', require: false
  gem 'react-rails', '~>1.4.1'
  gem 'js-routes' # Because of initializer
end

group :assets do
  gem 'jquery-rails', '2.3.0'
  gem 'coffee-rails'
  gem 'uglifier'
  gem 'turbo-sprockets-rails3'
  gem 'compass'
  gem 'compass-colors'
  gem 'compass-rails'
  gem 'bootstrap-sass', '~> 2.3'
end

group :test, :development do
  gem 'rspec-rails', '~> 3.4'
  gem 'rb-fsevent'
  gem 'teaspoon', '1.1.1'
  gem 'teaspoon-jasmine'
  gem 'phantomjs'
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-cucumber', '~> 1.6'
  gem 'pry'
end

group :test do
  gem 'minitest'
  gem 'webmock', :require => nil
  gem 'factory_girl_rails'
  gem 'capybara', '~> 2.6', '>= 2.6.2' # on mac, you need sudo port install libffi
  gem 'cucumber', :require => false
  gem 'cucumber-rails', :require => false
  gem 'autotest', :require => false
  gem 'nokogiri'
  gem 'pickle', :require => false
  gem 'launchy', :require => false
  gem 'database_cleaner', :require => false
  gem 'shoulda-matchers'
  gem 'syntax'
  gem 'email_spec'
end

group :production, :vagrant do
  gem 'therubyracer'
end

group :development do
  gem 'capistrano',       '>= 3.1.0'
  gem 'capistrano-rails',                   require: false
  gem 'capistrano-rbenv',                   require: false
  gem 'capistrano-bundler',                 require: false
  gem 'capistrano-deploytags', '~> 1.0.0',  require: false
  gem 'capistrano-npm',                     require: false
end
