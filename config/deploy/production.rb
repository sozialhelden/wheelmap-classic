set :rails_env, :production

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> All the same
set :whenever_command, "bundle exec whenever"
set :whenever_environment, :production
require "whenever/capistrano"

# Delayed Job
require "delayed/recipes"
before "delayed_job:stop", "delayed_job:unmonitor"
before "deploy:restart", "delayed_job:stop"
after  "deploy:restart", "delayed_job:start"
after  "delayed_job:start", "delayed_job:monitor"

after "deploy:stop",  "delayed_job:stop"
after "deploy:start", "delayed_job:start"

role :web, "176.9.63.170"                          # Your HTTP server, Apache/etc
role :app, "176.9.63.170"                          # This may be the same as your `Web` server
role :db,  "176.9.63.170", :primary => true        # This is where Rails migrations will run
set :port, 22022
set :deploy_to, "/var/apps/wheelmap/production"

set :default_environment, {
  'PATH' => '/opt/rbenv/shims:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games'
}
