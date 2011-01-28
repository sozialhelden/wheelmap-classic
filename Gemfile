source 'http://rubygems.org'

group :default do
  gem 'rails', '3.0.3'
  gem 'mysql2'
  gem 'spatial_adapter', :git => "git://github.com/cwise/spatial_adapter.git"
  gem 'oauth', :git => 'git://github.com/Bertg/oauth.git'
  gem 'httparty'
  gem 'devise'
  gem 'compass'
  gem 'redgreengrid'
  gem 'lemonade'
  gem 'haml'
  gem 'geoip'
  gem 'formtastic', '~> 1.1.0'
  gem 'delayed_job'
  gem 'libxml-ruby'
  gem 'crewait', :path => "#{File.expand_path(__FILE__)}/../vendor/gems/crewait-0.1.6"
  gem 'hoptoad_notifier'
  gem 'whenever', :require => false
end

group :test, :development do
  gem 'rspec-rails', "~>2.1"
end

group :test do
  gem 'fakeweb'
  gem 'webmock'
  gem 'factory_girl_rails'
  gem "capybara"  # on mac, you need sudo port install libffi
  gem 'cucumber'
  gem 'cucumber-rails'
  gem 'rspec'
  gem 'nokogiri'
  gem 'pickle'
  gem 'launchy'
end


group :deployment do
  gem 'capistrano'
  gem 'capistrano-ext'
end