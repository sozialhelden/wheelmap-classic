RAILS_GEM_VERSION = '2.3.5' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  #config.gem 'authlogic', :version => '~> 2.0'
  config.gem 'compass', :source => 'gemcutter.org'
  config.gem 'compass-colors', :source => 'gemcutter.org'
  config.gem 'redgreengrid', :source => 'gemcutter.org'
  config.i18n.default_locale = :de
end

Haml::Template.options[:format] = :html5
Haml::Template.options[:attr_wrapper] = '"'
