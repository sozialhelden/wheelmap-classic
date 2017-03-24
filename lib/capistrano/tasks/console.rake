namespace :rails do
  desc 'Remote console to a given host'
  task :console do
    roles = ENV['ROLES'] || 'app'
    on roles(roles) do |h|
      run_interactively "bundle exec rails console #{fetch(:stage)}", h.user
    end
  end

  desc 'Remote dbconsole to a given host'
  task :dbconsole do
    on roles(:app) do |h|
      run_interactively "bundle exec rails dbconsole #{fetch(:stage)}", h.user
    end
  end

  def run_interactively(command, user)
    info "Running `#{command}` as #{user}@#{host}"
    exec %(ssh #{user}@#{host} -p #{fetch(:ssh_options)[:port] || 22} -i #{fetch(:ssh_options)[:keys].join(' ')} -t "bash --login -c 'cd #{fetch(:deploy_to)}/current && #{command}'")
  end
end
