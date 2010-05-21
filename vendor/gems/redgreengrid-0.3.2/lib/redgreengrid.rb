# Redgreengrid

require 'redgreengrid/helpers'

begin
  ActionView::Base.class_eval do
    include RedGreenGrid::Helpers
  end
rescue
end

options = {
  :stylesheets_directory => File.expand_path(File.join(File.dirname(__FILE__), '..', 'sass')),
  :templates_directory => File.expand_path(File.join(File.dirname(__FILE__), '..', 'templates'))
}

Compass::Frameworks.register('redgreengrid', options)
