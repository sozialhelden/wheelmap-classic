set :rails_env, :production

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> All the same
require "whenever/capistrano"
set :whenever_command, "bundle exec whenever"
set :whenever_environment, :production

# Delayed Job  
require "delayed/recipes"
before "deploy:restart", "delayed_job:stop"
after  "deploy:restart", "delayed_job:start"

after "deploy:stop",  "delayed_job:stop"
after "deploy:start", "delayed_job:start"

# >>>>>>>>>>>>>>>>>>>>>> NEW SERVER
role :web, "88.198.52.240"                          # Your HTTP server, Apache/etc
role :app, "88.198.52.240"                          # This may be the same as your `Web` server
role :db,  "88.198.52.240", :primary => true # This is where Rails migrations will run
set :port, 22022
set :deploy_to, "/var/apps/wheelmap/production"

$:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
require "rvm/capistrano"
set :rvm_ruby_string, 'ree-1.8.7-2011.03'
set :rvm_type, :system
set :rvm_bin_path, "/usr/local/rvm/bin"
# >>>>>>>>>>>>>>>>>>>>>> VIRTUAL SERVER
# role :web, "10.211.55.9"                          # Your HTTP server, Apache/etc
# role :app, "10.211.55.9"                          # This may be the same as your `Web` server
# role :db,  "10.211.55.9", :primary => true # This is where Rails migrations will run
# set :deploy_to, "/var/apps/wheelmap/production"
# 
# $:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
# require "rvm/capistrano"
# set :rvm_ruby_string, 'ree-1.8.7-2011.03'
# set :rvm_type, :system
# set :rvm_bin_path, "/usr/local/rvm/bin"