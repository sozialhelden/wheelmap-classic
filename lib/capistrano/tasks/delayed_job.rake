namespace :delayed_job do

  def args
    fetch(:delayed_job_args, "")
  end

  def delayed_job_roles
    fetch(:delayed_job_server_role, :worker)
  end

  desc 'Stop the delayed_job process'
  task :stop do
    on roles(delayed_job_roles) do
      sudo "systemctl stop worker.service"
    end
  end

  desc 'Start the delayed_job process'
  task :start do
    on roles(delayed_job_roles) do
      sudo "systemctl start worker.service"
    end
  end

  desc 'Restart the delayed_job process'
  task :restart do
    on roles(delayed_job_roles) do
      sudo "systemctl restart worker.service"
    end
  end

end
