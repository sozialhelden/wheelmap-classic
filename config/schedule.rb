# Use this file to easily define all of your cron jobs.

set :output, File.join(File.expand_path(File.dirname(__FILE__)), "log", "cron_log.log")
set :path, '/home/rails/.rvm/bin/'

every 1.minute do
  rake "osm:replication:sync", :environment => :staging
end

