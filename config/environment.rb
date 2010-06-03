RAILS_GEM_VERSION = '2.3.8' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')
require 'ostruct'
Rails::Initializer.run do |config|

  config.i18n.default_locale = :de
end

Haml::Template.options[:format] = :html5
Haml::Template.options[:attr_wrapper] = '"'


