RAILS_GEM_VERSION = '2.3.5' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')
require 'ostruct'

Rails::Initializer.run do |config|
  
  config.gem 'compass',         :version => '0.10.1', :source => 'rubygems.org'
  config.gem 'redgreengrid',    :version => '0.3.2',  :source => 'rubygems.org'
  config.gem 'oauth',           :version => '0.4.0',  :source => 'rubygems.org'
  config.gem 'devise',          :version => '1.0.7',  :source => 'rubygems.org'
  config.gem 'httparty',        :version => '0.5.2',  :source => 'rubygems.org'
  config.gem 'formtastic'
  config.gem 'newrelic_rpm'
  config.i18n.default_locale = :de
end

Haml::Template.options[:format] = :html5
Haml::Template.options[:attr_wrapper] = '"'


