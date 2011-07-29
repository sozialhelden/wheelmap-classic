role :web, "178.77.98.117"                          # Your HTTP server, Apache/etc
role :app, "178.77.98.117"                          # This may be the same as your `Web` server
role :db,  "178.77.98.117", :primary => true # This is where Rails migrations will run

set :deploy_to, "/var/www/rails/production_wheelmap_org"
set :rails_env, :production

$:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
require "rvm/capistrano"
set :rvm_ruby_string, 'ree-1.8.7-2011.03'
set :rvm_type, :user
set :rvm_bin_path, "/usr/local/rvm/bin"

require "whenever/capistrano"
set :whenever_command, "bundle exec whenever"
set :whenever_environment, :production


