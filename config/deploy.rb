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
after  'deploy',              'deploy:cache:clear'

namespace :unicorn do
  desc "Zero-downtime restart of Unicorn"
  task :restart, :except => { :no_release => true } do
    run <<-EOF
      if [ -f #{shared_path}/pids/unicorn.pid ]; then
        kill -s USR2 `cat #{shared_path}/pids/unicorn.pid`;
      else
        cd #{current_path} ; RAILS_ENV=#{rails_env} bundle exec unicorn_rails -c config/unicorn.rb -D;
      fi
    EOF
  end

  desc "Start unicorn"
  task :start, :except => { :no_release => true } do
    run "cd #{current_path} ; RAILS_ENV=#{rails_env} bundle exec unicorn_rails -c config/unicorn.rb -D"
  end

  desc "Stop unicorn"
  task :stop, :except => { :no_release => true } do
    run "kill -s QUIT `cat #{shared_path}/pids/unicorn.pid`"
  end
  after "deploy:restart", "unicorn:restart"
end

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

    run "touch #{shared_path}/config/database.yml"
  end

  task :symlink_configs do
    run "ln -nfs #{shared_path}/tmp/osmosis-working-dir #{release_path}/tmp/osmosis-working-dir"
    run "ln -nfs #{shared_path}/tmp/var #{release_path}/tmp/var"
    run "ln -nfs #{shared_path}/tmp/cache #{release_path}/tmp/cache"

    %w(database.yml open_street_map.yml).each do |file|
      run "ln -nfs #{shared_path}/config/#{file} #{release_path}/config/#{file}"
    end
  end

  task :remove_all_unfinished_locales do
    if rails_env == :production
      %w(bg de-CH nl pt ru zh pt pl).each do |locale|
        run "rm -f #{release_path}/config/locales/#{locale}.yml"
      end
    end
  end

  namespace :cache do
    task :clear do
      run "cd #{current_path} && RAILS_ENV=#{rails_env} bundle exec rake cache:clear"
    end
  end

end

namespace :tolk do
  desc <<-EOD
    Downloads all translation files (except the English one) from the server
    and stores them into the local config/locales folder.
  EOD
  task :download_translations do
    require 'config/environment'
    I18n.available_locales.each do |locale|
      next if locale == :en
      get "#{current_path}/config/locales/#{locale}.yml", "config/locales/#{locale}.yml"
    end
  end

  task :dump_all do
    run "cd #{current_path} && RAILS_ENV=#{rails_env} bundle exec rake tolk:dump_all"
  end

  task :sync do
    run "cd #{current_path} && RAILS_ENV=#{rails_env} bundle exec rake tolk:sync"
  end

  desc <<-EOD
    Downloads all translation files (except the English one) from the server
    and stores them into the local config/locales folder.
  EOD
  task :dump_and_download do
    dump_all
    download_translations
  end
end

task :log do
  run "tail -f #{deploy_to}/current/log/#{stage}.log"
end

task :sh do
  cmd = "ssh -l #{user} -t #{roles[:app].servers.first} 'cd #{deploy_to}/current; bash -l'"
  puts cmd
  system(cmd)
end

task :console do
  cmd = "ssh -l #{user} -t #{roles[:app].servers.first} 'cd #{deploy_to}/current; bash -l -c \"bundle exec rails c #{stage}\"'"
  puts cmd
  system(cmd)
end

task :c do
  console
end

set :stages,        %w(staging production)
set :default_stage, "staging"
require 'capistrano/ext/multistage'

# have builder check and install gems after each update_code
require 'bundler/capistrano'
set :bundle_without, [:development, :test, :metrics, :deployment]

require 'config/boot'
require 'hoptoad_notifier/capistrano'