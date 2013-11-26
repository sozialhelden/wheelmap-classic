# Use this file to easily define all of your cron jobs.

set :output, File.join(File.expand_path(File.dirname(__FILE__)),"..", "log", "cron_log.log")

job_type :rake,         "cd :path && RAILS_ENV=:environment bundle exec rake :task :output"
job_type :find_command, "cd :path && :task :output"

# Sync with OSM but not between 1:59 and 3:00 o'clock
every '* * * * *' do
  rake "osm:replication:sync",  :environment => :production
  rake "report:minutely",       :environment => :production
end

#Remove cached files older than 3 days
every 10.minutes do
 find_command "find tmp/cache/ -mmin +4320 -type f -delete", :environment => :production
end

every :sunday, :at => '2:30 am' do
  rake "sitemap:generate", :environment => :production
end

every '12 * * * *' do
  rake "poi:locate",    :environment => :production
end

every '*/30 * * * *' do
  rake "report:hourly", :environment => :production
end

# every :day, :at => '0:20am', :environment => :production do
#   rake "db:backup"
# end