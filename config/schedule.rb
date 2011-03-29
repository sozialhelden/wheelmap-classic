# Use this file to easily define all of your cron jobs.

set :output, File.join(File.expand_path(File.dirname(__FILE__)), "log", "cron_log.log")

job_type :rake,    "cd :path && RAILS_ENV=:environment /home/rails/.rvm/bin/rake :task :output"
job_type :command, "cd :path && :task :output"

# Sync with OSM 
every '* 0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 * * *' do
  rake "osm:replication:sync", :environment => :production
end

# Remove cached files older than 3 days
every '* * * * *' do
  command "find tmp/cache/ -mmin +4320 -type f -delete", :environment => :production
end

