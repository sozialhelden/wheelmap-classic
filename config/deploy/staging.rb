set :rails_env, :staging

# Delayed Job
require "delayed/recipes"
before "deploy:restart", "delayed_job:stop"
after  "deploy:restart", "delayed_job:start"

after "deploy:stop",  "delayed_job:stop"
after "deploy:start", "delayed_job:start"

role :web, "176.9.63.170"                          # Your HTTP server, Apache/etc
role :app, "176.9.63.170"                          # This may be the same as your `Web` server
role :db,  "176.9.63.170", :primary => true # This is where Rails migrations will run
set :port, 22022
set :deploy_to, "/var/apps/wheelmap/staging"

set :default_environment, {
  'PATH' => '/opt/ruby-enterprise/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games'
}

# >>>>>>>>>>>>>>>>>>>>>> Virtual test server
# role :web, "10.211.55.12"                          # Your HTTP server, Apache/etc
# role :app, "10.211.55.12"                          # This may be the same as your `Web` server
# role :db,  "10.211.55.12", :primary => true # This is where Rails migrations will run
# set :deploy_to, "/var/apps/wheelmap/staging"
#
# set :default_environment, {
#   'PATH' => '/opt/ruby-enterprise/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games'
# }
#
