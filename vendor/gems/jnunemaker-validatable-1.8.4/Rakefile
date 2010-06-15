require 'rubygems'
require 'rake'

require File.expand_path('../lib/validatable', __FILE__)

require 'jeweler'
Jeweler::Tasks.new do |gem|
  gem.name        = 'jnunemaker-validatable'
  gem.summary     = 'Validatable is a library for adding validations.'
  gem.description = 'Validatable is a library for adding validations.'
  gem.email       = 'nunemaker@gmail.com'
  gem.homepage    = 'http://github.com/jnunemaker/validatable'
  gem.authors     = ['Jay Fields', 'John Nunemaker']
  gem.files       = FileList['lib/**/*.rb', '[A-Z]*', 'test/**/*'].to_a
  gem.version     = Validatable::Version
  
  gem.add_dependency('activesupport', '>= 2.3.4')
  gem.add_development_dependency('mocha', '>= 0.9.8')
  gem.add_development_dependency('dust')
  gem.add_development_dependency('expectations')
end

Jeweler::GemcutterTasks.new

require 'rake/testtask'
Rake::TestTask.new(:test) do |test|
  test.libs << 'test'
  test.ruby_opts << '-rubygems'
  test.pattern = 'test/**/test_*.rb'
  test.verbose = true
end

task :test    => :check_dependencies
task :default => :test
