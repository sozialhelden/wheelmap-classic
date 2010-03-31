RAILS_GEM_VERSION = '2.3.5' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  config.gem 'compass',         :version => '0.10.0.rc1',   :source => 'rubygems.org'
  config.gem 'redgreengrid',    :version => '0.3.0',        :source => 'rubygems.org'
  config.i18n.default_locale = :de
end

Haml::Template.options[:format] = :html5
Haml::Template.options[:attr_wrapper] = '"'
