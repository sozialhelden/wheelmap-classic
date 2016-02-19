# config valid only for Capistrano 3.1
#lock '3.2.1'
set :start_time, Time.now.to_i

set :application, 'wheelmap'
set :repo_url, 'git@github.com:sozialhelden/wheelmap.git'

set :whenever_identifier, ->{ "#{fetch(:application)}_#{fetch(:stage)}" }
set :whenever_command_environment_variables, "RAILS_ENV"=> fetch(:stage)

# Default value for :scm is :git
set :scm, :git

set :deploytag_time_format, "%Y%m%d%H%M%S"

# Default value for :format is :pretty
set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :debug

# Default value for :pty is false
set :pty, true

# Default value for :linked_files is []
set :linked_files, %w{ config/database.yml config/open_street_map.yml config/metrics.yml config/librato.yml config/newrelic.yml config/application.yml}

# Default value for :bundle_without is %w{development test}.join(' ')
set :bundle_without, %w{ development test metrics deployment }.join(' ')

# Default value for :bundle_jobs is: nil
set :bundle_jobs, 4

# Default value for linked_dirs is []
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}
set :linked_dirs, %w{ log tmp/var tmp/osmosis-working-dir tmp/cache tmp/sockets tmp/pids vendor/bundle public/system public/assets }

set :rbenv_type, :system # :user or :system, depends on your rbenv setup
set :rbenv_ruby, '2.2.2'
set :rbenv_custom_path, '/opt/rbenv'

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 5

# Compile assets from gulp directory
set :gulp_executable, -> { "#{fetch(:release_path)}/node_modules/.bin/gulp" }
set :gulp_tasks, 'browserify'

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      # execute :touch, release_path.join('tmp/restart.txt')
      sudo "/etc/init.d/unicorn_#{fetch(:stage)} upgrade"
    end
  end

  desc 'Stopp application'
  task :stop do
    on roles(:app), in: :sequence, wait: 5 do
      sudo "/etc/init.d/unicorn_#{fetch(:stage)} stop"
    end
  end

  desc 'Start application'
  task :start do
    on roles(:app), in: :sequence, wait: 5 do
      sudo "/etc/init.d/unicorn_#{fetch(:stage)} start"
    end
  end

  before :updated, 'npm:install'
  before :updated, 'gulp'

  before :publishing, 'delayed_job:stop'
  after  :publishing, 'delayed_job:start'

  before :stop,  'delayed_job:stop'
  after  :start, 'delayed_job:start'

  after  :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
        within release_path do
          with rails_env: fetch(:stage) do
            execute :rake, 'cache:clear'
          end
        end
    end
  end

  after :finished, :notify_deployment do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      within release_path do
        with rails_env: fetch(:stage), branch: fetch(:branch), start_time: fetch(:start_time), source: fetch(:stage), rev: fetch(:rev) do
          execute :rake, 'metrics:deploy'
        end
      end
    end
  end

  after :finished, 'airbrake:deploy'
  after :finished, 'newrelic:notice_deployment'
end