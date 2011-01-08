# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Wheelmap::Application.initialize!

Haml::Template.options[:format] = :html5
Haml::Template.options[:attr_wrapper] = '"'
