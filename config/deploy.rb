set :application, "wheelmap"
set :repository,  "git@github.com:sozialhelden/wheelmap.git"

set :branch, ENV['BRANCH'] || "master"

set :use_sudo, false

set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

set :deploy_via, :remote_cache
set :git_shallow_clone, 1

set :default_run_options, :pty => true # or else you'll get "sorry, you must have a tty to run sudo"

set :ssh_options, :keys => [ File.expand_path("~/.ssh/wheelmap_rsa") ], :forward_agent => true

set :user, 'rails'

# If you are using Passenger mod_rails uncomment this:
# if you're still using the script/reapear helper you will need
# these http://github.com/rails/irs_process_scripts

after  'deploy:setup',        'deploy:create_shared_config'
after  'deploy:update_code',  'deploy:symlink_configs'
after  'deploy:update_code',  'deploy:remove_all_unfinished_locales'


namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
  
  task :create_shared_config do
    run "mkdir -p #{shared_path}/config/"
    run "mkdir -p #{shared_path}/tmp/var"
    run "mkdir -p #{shared_path}/tmp/osmosis-working-dir"
    run "mkdir -p #{shared_path}/tmp/cache"
    run "mkdir -p #{shared_path}/sitemaps"
    
    run "touch #{shared_path}/config/database.yml"
  end

  task :symlink_configs do
    run "ln -nfs #{shared_path}/tmp/osmosis-working-dir #{release_path}/tmp/osmosis-working-dir"
    run "ln -nfs #{shared_path}/tmp/var #{release_path}/tmp/var"
    run "ln -nfs #{shared_path}/tmp/cache #{release_path}/tmp/cache"
    run "ln -nfs #{shared_path}/sitemaps #{release_path}/public/sitemaps"
    
    %w(database.yml open_street_map.yml).each do |file|
      run "ln -nfs #{shared_path}/config/#{file} #{release_path}/config/#{file}"
    end
  end
  
  task :remove_all_unfinished_locales do
    if rails_env == :production
      %w(de-CH ko pt-PT ru zh pt).each do |locale|
        run "rm -f #{release_path}/config/locales/#{locale}.yml"
      end
    end
  end
end

set :stages,        %w(staging production)
set :default_stage, "staging"
require 'capistrano/ext/multistage'

# have builder check and install gems after each update_code
require 'bundler/capistrano'
set :bundle_without, [:development, :test, :metrics, :deployment]

require 'config/boot'
require 'hoptoad_notifier/capistrano'