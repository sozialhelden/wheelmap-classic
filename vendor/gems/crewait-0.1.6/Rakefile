# Rakefile
require 'rubygems'
require 'rake'
require 'echoe'

Echoe.new('crewait', '0.1.6') do |p|
  p.description    = "Intuitive and fast bulk insertion in ActiveRecord"
  p.url            = "http://github.com/theAlmanac/crewait"
  p.author         = "Jonah Bloch-Johnson"
  p.email          = "me@jonah.org"
  # p.ignore_pattern = ["tmp/*", "script/*"]
  p.development_dependencies = []
end

Dir["#{File.dirname(__FILE__)}/tasks/*.rake"].sort.each { |ext| load ext }