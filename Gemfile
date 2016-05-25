source 'https://rubygems.org'

group :default do
  gem 'rails', '~> 4.0.0'
  gem 'mysql2', '~> 0.3.18'
  gem 'activerecord-import', '<0.3.0', :require => false

  gem 'rgeo', '~> 0.5.0'
  gem 'rgeo-activerecord', '~> 1.2.0'
  gem 'activerecord-mysql2spatial-adapter', '~> 0.5.0.nonrelease'
  gem 'protected_attributes' # for backwards compability of strong parameters
  gem 'activeresource'


  gem 'oauth'
  gem 'devise', '~> 3.2.0'
  gem 'devise-encryptable'
  gem 'redgreengrid', :git => 'https://github.com/christoph-buente/redgreengrid.git'
  gem 'haml'
  gem 'formtastic'
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
  gem 'inherited_resources', '~> 1.6.0'
  gem 'has_scope'
  gem 'rake', '~> 10.4'
  gem 'yajl-ruby'
  gem 'ya2yaml'
  gem 'ruport'

  gem 'dalli'
  gem 'actionpack-page_caching', '~> 1.0', '>= 1.0.2'

  gem 'big_sitemap'
  gem 'unicorn'
  gem 'friendly_id', '~> 5.0.5'
  gem 'will_paginate'
  gem 'omniauth-osm'
  gem 'rosemary'
  gem 'librato-metrics'
  gem 'librato-rails'
  gem 'multipart-post'
  gem 'sass-rails' # goes here instead of group assets because activeadmin uses it in the initializer
  gem 'sass', '~>3.3' # >= 3.3 is needed for BEM syntax

  gem 'activeadmin', '~> 1.0.0.pre2'

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
  gem 'apipie-rails'
  gem 'htmlentities', require: false
  gem 'test-unit', '~> 3.0', require: false
  gem 'react-rails', '~>1.4.1'
  gem 'js-routes' # Because of initializer
  gem 'dotenv-rails'
end

group :assets do
  gem 'jquery-rails', '2.3.0'
  gem 'coffee-rails'
  gem 'uglifier'
  gem 'compass'
  gem 'compass-colors'
  gem 'compass-rails'
  gem 'bootstrap-sass', '~> 2.3'
end

group :test, :development do
  gem 'rspec-rails', '~> 3.4'
  gem 'rb-fsevent'
  gem 'guard'
  gem 'guard-rspec'
  gem 'pry'
  gem 'thin'
end

group :test do
  gem 'minitest'
  gem 'webmock', :require => nil
  gem 'factory_girl_rails'

  gem 'capybara', '~> 2.6', '>= 2.6.2' # on mac, you need sudo port install libffi
  gem 'poltergeist'
  gem 'database_cleaner'

  gem 'autotest', :require => false
  gem 'nokogiri'
  gem 'pickle', :require => false
  gem 'launchy', :require => false
  gem 'shoulda-matchers', '~> 3.1', '>= 3.1.1'
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
