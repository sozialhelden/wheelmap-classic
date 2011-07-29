role :web, "88.198.52.240"                          # Your HTTP server, Apache/etc
role :app, "88.198.52.240"                          # This may be the same as your `Web` server
role :db,  "88.198.52.240", :primary => true # This is where Rails migrations will run

set :deploy_to, "/var/apps/wheelmap/staging"
set :rails_env, :staging

$:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
require "rvm/capistrano"
set :rvm_ruby_string, 'ruby-1.8.7-p330'
set :rvm_type, :system
set :rvm_bin_path, "/home/rails/.rvm/bin"

