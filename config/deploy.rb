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
set :linked_files, %w{ config/database.yml config/open_street_map.yml config/metrics.yml config/librato.yml config/newrelic.yml .env config/secrets.yml}


set :bundle_roles, [:app, :worker]
set :bundle_without, %w{ development test metrics deployment }.join(' ')
set :bundle_jobs, 4
set :bundle_binstubs, -> { shared_path.join('bin') }

# Default value for linked_dirs is []
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}
set :linked_dirs, %w{ log tmp vendor/bundle public/system node_modules }

# Default value for keep_releases is 5
set :keep_releases, 5


# Clear existing task so we can replace it rather than "add" to it.
Rake::Task["deploy:compile_assets"].clear
Rake::Task["deploy:set_linked_dirs"].clear

namespace :deploy do

  task :set_linked_dirs do
     # noop due to cap/rails adding this to the run list
     # Ref: https://github.com/capistrano/rails/blob/54da36a2dda5084a3cbe380b4a8f1ba282379f72/lib/capistrano/tasks/assets.rake#L121
  end

  desc 'Compile assets'
  task :compile_assets => [:set_rails_env] do
    # invoke 'deploy:assets:precompile'
    invoke 'deploy:assets:precompile_local'
    invoke 'deploy:assets:backup_manifest'
  end

  namespace :assets do

    desc "Precompile assets locally and then rsync to web servers"
    task :precompile_local do
      # compile assets locally
      run_locally do
        execute "RAILS_ENV=#{fetch(:stage)} bundle exec rake assets:precompile"
      end

      # rsync to asset server
      local_dir = "./public/"
      on roles(:asset) do
        # this needs to be done outside run_locally in order for host to exist
        remote_dir = "#{host.user}@#{host.hostname}:#{release_path}/public/"
        execute "mkdir -p #{release_path}/public/assets/"
        run_locally { execute "rsync -av --delete #{local_dir} #{remote_dir}" }
        # We create this file so the consul health check will pass. We can't use an
        # existing file since they are all unpredictably named.
        execute "touch #{release_path}/public/assets/ping"

        # stolen from https://github.com/capistrano/capistrano/blob/master/lib/capistrano/tasks/deploy.rake#L101
        # we can't directly invoke the task since that runs on deploy roles only
        tmp_current_path = release_path.parent.join(current_path.basename)
        execute :ln, "-s", release_path, tmp_current_path
        execute :mv, tmp_current_path, current_path.parent
      end

      on roles(:app) do
        # this needs to be done outside run_locally in order for host to exist
        remote_dir = "#{host.user}@#{host.hostname}:#{release_path}/public/assets/"
        execute "mkdir -p #{release_path}/public/assets/"
        run_locally { execute "rsync -av --delete #{local_dir}/assets/.sprockets-manifest-* #{remote_dir}/assets" }
      end

      # clean up
      run_locally { execute "rm -rf #{local_dir}" }
    end

  end

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      # execute :touch, release_path.join('tmp/restart.txt')
      sudo "systemctl restart webapp.service"
    end
  end

  desc 'Stopp application'
  task :stop do
    on roles(:app), in: :sequence, wait: 5 do
      sudo "systemctl stop webapp.service"
    end
  end

  desc 'Start application'
  task :start do
    on roles(:app), in: :sequence, wait: 5 do
      sudo "systemctl start webapp.service"
    end
  end

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

#  after :finished, 'airbrake:deploy'
#  after :finished, 'newrelic:notice_deployment'
end
