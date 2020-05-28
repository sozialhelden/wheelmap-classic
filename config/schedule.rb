# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end
# Learn more: http://github.com/javan/whenever
job_type :command_without_output, 'cd :path && :task'
set :output, File.join(File.expand_path(File.dirname(__FILE__)), '..', 'log', 'cron_log.log')

case ENV['RAILS_ENV']
when 'production'

  # Sync with OSM but not between 1:59 and 3:00 o'clock
  every '* * * * *' do
    set :job_template, nil
    command_without_output "flock -n tmp/pids/replicate.lock -c 'script/replicate.sh'"
  end

  # every '* * * * *' do
  #   set :job_template, "bash -l -c ':job'"
  #   rake 'report:minutely'
  # end

  every :sunday, at: '2:30 am' do
    set :job_template, "bash -l -c ':job'"
    rake 'sitemap:generate'
  end

  every '12 * * * *' do
    set :job_template, "bash -l -c ':job'"
    rake 'poi:locate'
  end

  # every '*/30 * * * *' do
  #   set :job_template, "bash -l -c ':job'"
  #   rake 'report:hourly'
  # end

  every :day, at: '0:20am' do
    set :job_template, "bash -l -c ':job'"
    rake 'db:backup'
  end
end
