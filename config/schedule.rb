# Use this file to easily define all of your cron jobs.

set :output, File.join(File.expand_path(File.dirname(__FILE__)),"..", "log", "cron_log.log")

case ENV['RAILS_ENV']
when 'production'

  # Sync with OSM but not between 1:59 and 3:00 o'clock
  every '* * * * *' do
    rake "osm:replication:sync"
    rake "report:minutely"
  end

  every :sunday, :at => '2:30 am' do
    rake "sitemap:generate"
  end

  every '12 * * * *' do
    rake "poi:locate"
  end

  every '*/30 * * * *' do
    rake "report:hourly"
  end

  every :day, :at => '0:20am' do
    rake "db:backup"
  end
end