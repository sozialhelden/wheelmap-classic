set :rails_env, :staging
set :branch, ENV['BRANCH'] || "master"

# Delayed Job
require "delayed/recipes"
before "deploy:restart", "delayed_job:stop"
after  "deploy:restart", "delayed_job:start"

after "deploy:stop",  "delayed_job:stop"
after "deploy:start", "delayed_job:start"

role :web, "176.9.63.171"                          # Your HTTP server, Apache/etc
role :app, "176.9.63.171"                          # This may be the same as your `Web` server
role :db,  "176.9.63.171", :primary => true # This is where Rails migrations will run
set :port, 22022
set :deploy_to, "/var/apps/wheelmap/staging"

# This is required to start/stop delayed job.
set :default_environment, {
  'PATH' => '/opt/rbenv/shims:/opt/rbenv/bin:/opt/rbenv/bin/rbenv:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games'
}
