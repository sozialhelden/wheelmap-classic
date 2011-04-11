set :deploy_to, "/var/www/rails/production_wheelmap_org"
set :rails_env, :production

set :whenever_command, "bundle exec whenever"
set :whenever_environment, :production
require "whenever/capistrano"
