# Use this file to easily define all of your cron jobs.

set :output, File.join(File.expand_path(File.dirname(__FILE__)), "log", "cron_log.log")

job_type :rake,         "cd :path && RAILS_ENV=:environment /home/rails/.rvm/bin/rake :task :output"
job_type :find_command, "cd :path && :task :output"

# Sync with OSM but not between 1:59 and 3:00 o'clock
every '* * * * *' do
  rake "osm:replication:sync", :environment => :production
end

# every '* 3-23 * * *' do
#   rake "osm:replication:sync", :environment => :production
# end

#Remove cached files older than 1 days
every 10.minutes do
 find_command "find tmp/cache/ -mmin +1440 -type f -delete", :environment => :production
end
