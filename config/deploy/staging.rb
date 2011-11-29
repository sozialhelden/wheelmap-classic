set :rails_env, :staging

role :web, "88.198.52.240"                          # Your HTTP server, Apache/etc
role :app, "88.198.52.240"                          # This may be the same as your `Web` server
role :db,  "88.198.52.240", :primary => true # This is where Rails migrations will run
set :port, 22022
set :deploy_to, "/var/apps/wheelmap/staging"

$:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
require "rvm/capistrano"
set :rvm_ruby_string, 'ree-1.8.7-2011.03'
set :rvm_type, :system
set :rvm_bin_path, "/usr/local/rvm/bin"

# >>>>>>>>>>>>>>>>>>>>>> Virtual test server
# role :web, "10.211.55.9"                          # Your HTTP server, Apache/etc
# role :app, "10.211.55.9"                          # This may be the same as your `Web` server
# role :db,  "10.211.55.9", :primary => true # This is where Rails migrations will run
# set :deploy_to, "/var/apps/wheelmap/staging"
#
# $:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
# require "rvm/capistrano"
# set :rvm_ruby_string, 'ree-1.8.7-2011.03'
# set :rvm_type, :system
# set :rvm_bin_path, "/usr/local/rvm/bin"
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
# $:.unshift(File.expand_path('./lib', ENV['rvm_path'])) # Add RVM's lib directory to the load path.
# require "rvm/capistrano"
# set :rvm_ruby_string, 'ree-1.8.7-2011.03'
# set :rvm_type, :system
# set :rvm_bin_path, "/usr/local/rvm/bin"