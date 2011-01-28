# Use this file to easily define all of your cron jobs.

set :output, File.join(File.expand_path(File.dirname(__FILE__)), "log", "cron_log.log")
set :environment, Rails.env

every 1.minute do
  rake "osm:replication:sync"
end

