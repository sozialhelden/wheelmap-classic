# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)
require 'rake'
include Rake::DSL

begin
  require 'rspec/core/rake_task'

  # Grab recently touched specs
  def recent_specs(touched_since)
    recent_specs = FileList['app/**/*'].map do |path|
      next unless File.mtime(path) > touched_since

      spec = File.join('spec', File.dirname(path).split('/')[1..-1].join('/'),
                       "#{File.basename(path, '.*')}_spec.rb")
      spec if File.exist?(spec)
    end.compact

    recent_specs += FileList['spec/**/*_spec.rb'].select do |path|
      File.mtime(path) > touched_since
    end
    recent_specs.uniq
  end

  desc 'Run recent specs'
  RSpec::Core::RakeTask.new('spec:recent') do |t|
    t.pattern = recent_specs(Time.now - 600) # 10 min.
  end
rescue LoadError
end

Wheelmap::Application.load_tasks
