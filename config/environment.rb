RAILS_GEM_VERSION = '2.3.5' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  config.gem 'ccsv',            :version => '0.1',          :source => 'rubygems.org'
  config.gem 'compass',         :version => '0.10.0.pre8',  :source => 'rubygems.org'
  config.gem 'compass-colors',  :version => '0.3.1',        :source => 'rubygems.org'
  config.gem 'redgreengrid',    :version => '0.3.1',        :source => 'rubygems.org'
  config.gem 'osmlib-base',     :lib => 'OSM', :version => '0.1.4',        :source => 'rubygems.org'
  config.i18n.default_locale = :de
end

Haml::Template.options[:format] = :html5
Haml::Template.options[:attr_wrapper] = '"'
