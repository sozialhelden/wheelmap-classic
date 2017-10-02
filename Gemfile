source 'https://rubygems.org'

group :default do
  gem 'activerecord-import', '>= 0.4.0', require: false
  gem 'mysql2', '~> 0.3.18'
  gem 'rails', '~> 4.1.0'

  gem 'activerecord-mysql2spatial-adapter', '~> 0.5.0.nonrelease'
  gem 'activeresource'
  gem 'protected_attributes' # for backwards compability of strong parameters
  gem 'rgeo', '~> 0.5.0'
  gem 'rgeo-activerecord', '~> 1.2.0'

  gem 'acts_as_api'
  gem 'airbrake', '~> 5.5'
  gem 'airbrake-ruby', '~> 1.5'
  gem 'daemons'
  gem 'delayed_job'
  gem 'delayed_job_active_record'
  gem 'devise', '~> 3.2.0'
  gem 'devise-encryptable'
  gem 'formtastic'
  gem 'formtastic-bootstrap'
  gem 'haml'
  gem 'has_scope'
  gem 'inherited_resources', '~> 1.6.0'
  gem 'libxml-ruby'
  gem 'newrelic_rpm'
  gem 'oauth'
  gem 'rake', '~> 10.4'
  gem 'redgreengrid', git: 'https://github.com/christoph-buente/redgreengrid.git'
  gem 'routing-filter'
  gem 'ruport'
  gem 'simple_form'
  gem 'whenever', require: false
  gem 'ya2yaml'
  gem 'yajl-ruby'

  gem 'actionpack-page_caching', '~> 1.0', '>= 1.0.2'
  gem 'dalli'

  gem 'activeadmin', '1.0.0.pre2'
  gem 'apipie-rails'
  gem 'awesome_nested_set', '~>3.1'
  gem 'backup'
  gem 'big_sitemap'
  gem 'cacheable_flash'
  gem 'carrierwave', git: 'https://github.com/carrierwaveuploader/carrierwave', ref: 'c2ee2e8' # to be used before release 0.11.0 becaus of deprecation warnings
  gem 'carrierwave-meta', '~> 0.0.7'
  gem 'carrierwave_backgrounder', '~> 0.4.2'
  gem 'dotenv-rails'
  gem 'ember-data-source', '~> 0.14'
  gem 'ember-rails', '~> 0.14'
  gem 'ember-source', '~> 1.1.2'
  gem 'exifr'
  gem 'figaro'
  gem 'flash_cookie_session'
  gem 'font-awesome-rails', '~> 3.2.1'
  gem 'friendly_id', '~> 5.0.5'
  gem 'geocoder'
  gem 'htmlentities', require: false
  gem 'i18n', '<0.7.0'
  gem 'i18n-js', '~> 3.0.0.rc9'
  gem 'js-routes' # Because of initializer
  gem 'kaminari', '~> 0.14'
  gem 'kaminari-i18n'
  gem 'librato-metrics'
  gem 'librato-rails'
  gem 'multipart-post'
  gem 'omniauth-osm'
  gem 'react-rails', '~>1.4.1'
  gem 'rmagick'
  gem 'rosemary'
  gem 'ruby-progressbar'
  gem 'test-unit', '~> 3.0', require: false
  gem 'unicorn'
  gem 'will_paginate'

  gem 'bootstrap-sass', '~> 2.3'
  gem 'browserify-rails', '~> 3.1.0'
  gem 'coffee-rails'
  gem 'compass'
  gem 'compass-colors'
  gem 'compass-rails'
  gem 'jquery-rails', '2.3.0'
  gem 'sass', '~>3.3' # >= 3.3 is needed for BEM syntax
  gem 'sass-rails'
  gem 'sprockets-es6', '~> 0.9.0'
  gem 'sprockets-rails', require: 'sprockets/railtie'
  gem 'uglifier'
  gem 'useragent', '~> 0.16.8'
end

group :test, :development do
  gem 'guard'
  gem 'guard-rspec'
  gem 'pry'
  gem 'pry-byebug', '~> 3.4'
  gem 'rb-fsevent'
  gem 'rspec-rails', '~> 3.4'
  gem 'rubocop', require: false
  gem 'simplecov', '~> 0.11.2'
  gem 'thin'
end

group :test do
  gem 'factory_girl_rails'
  gem 'webmock', require: nil

  gem 'capybara', '~> 2.6', '>= 2.6.2' # on mac, you need sudo port install libffi
  gem 'database_cleaner'
  gem 'poltergeist'

  gem 'email_spec'
  gem 'json-schema', '~> 2.7'
  gem 'launchy', require: false
  gem 'nokogiri'
  gem 'pickle', require: false
  gem 'shoulda-matchers', '~> 3.1'
  gem 'syntax'
  gem 'timecop', '~> 0.8.1'
end

group :production, :vagrant do
  gem 'therubyracer'
end

group :development do
  gem 'capistrano', '>= 3.1.0'
  gem 'capistrano-bundler',                 require: false
  gem 'capistrano-deploytags', '~> 1.0.0',  require: false
  gem 'capistrano-npm',                     require: false
  gem 'capistrano-rails',                   require: false
  gem 'capistrano-rbenv',                   require: false
end
