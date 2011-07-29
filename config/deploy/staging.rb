role :web, "178.77.98.117"                          # Your HTTP server, Apache/etc
role :app, "178.77.98.117"                          # This may be the same as your `Web` server
role :db,  "178.77.98.117", :primary => true # This is where Rails migrations will run

set :deploy_to, "/var/www/rails/staging_wheelmap_org"
set :rails_env, :staging

$:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
require "rvm/capistrano"
set :rvm_ruby_string, 'ruby-1.8.7-p330'
set :rvm_type, :user
set :rvm_bin_path, "/home/rails/.rvm/bin"

# >>>>>>>>>>>>>>>>>>>>>> NEW SERVER
# role :web, "88.198.52.240"                          # Your HTTP server, Apache/etc
# role :app, "88.198.52.240"                          # This may be the same as your `Web` server
# role :db,  "88.198.52.240", :primary => true # This is where Rails migrations will run
# 
# set :deploy_to, "/var/apps/wheelmap/staging"
# set :rails_env, :staging
# 
# $:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
# require "rvm/capistrano"
# set :rvm_ruby_string, 'ree-1.8.7-2011.03'
# set :rvm_type, :system
# set :rvm_bin_path, "/home/rails/.rvm/bin"
# 
