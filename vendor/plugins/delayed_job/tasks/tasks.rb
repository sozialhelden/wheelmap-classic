# Re-definitions are appended to existing tasks
task :environment
task :merb_env

namespace :jobs do
  
  desc "Alias for :clear:all"
  task :clear => :"clear:all"

  namespace :clear do
    
    desc "Clear the whole delayed_job queue."
    task :all => [:merb_env, :environment] do
      Delayed::Job.delete_all
    end
    
    desc "Clear finished jobs."
    task :finished => [:merb_env, :environment] do
      Delayed::Job.delete_all('finished_at IS NOT NULL')
    end

    desc "Clear failed jobs."
    task :failed => [:merb_env, :environment] do
      Delayed::Job.delete_all('failed_at IS NOT NULL')
    end

  end

  desc "Start a delayed_job worker."
  task :work => [:merb_env, :environment] do
    Delayed::Worker.new(:min_priority => ENV['MIN_PRIORITY'], :max_priority => ENV['MAX_PRIORITY']).start
  end
end
