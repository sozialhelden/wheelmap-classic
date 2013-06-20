set :rails_env, :production

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> All the same
require "whenever/capistrano"
set :whenever_environment, :production

# Delayed Job
require "delayed/recipes"
before "delayed_job:stop", "delayed_job:unmonitor"
before "deploy:restart", "delayed_job:stop"
after  "deploy:restart", "delayed_job:start"
after  "delayed_job:start", "delayed_job:monitor"

after "deploy:stop",  "delayed_job:stop"
after "deploy:start", "delayed_job:start"

# >>>>>>>>>>>>>>>>>>>>>> NEW SERVER
role :web, "176.9.63.170"                          # Your HTTP server, Apache/etc
role :app, "176.9.63.170"                          # This may be the same as your `Web` server
role :db,  "176.9.63.170", :primary => true        # This is where Rails migrations will run
set :port, 22022
set :deploy_to, "/var/apps/wheelmap/production"

set :default_environment, {
  'PATH' => '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games'
}

# >>>>>>>>>>>>>>>>>>>>>> VIRTUAL SERVER
# role :web, "10.211.55.12"                          # Your HTTP server, Apache/etc
# role :app, "10.211.55.12"                          # This may be the same as your `Web` server
# role :db,  "10.211.55.12", :primary => true # This is where Rails migrations will run
# set :deploy_to, "/var/apps/wheelmap/production"
#
# set :default_environment, {
#   'PATH' => '/opt/ruby-enterprise/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games'
# }
