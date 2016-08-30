# config/unicorn.rb
# Set environment to development unless something else is specified
env = ENV['RAILS_ENV'] || 'staging'

worker_processes 4
base_dir = "/var/apps/wheelmap/current"
shared_path = "/var/apps/wheelmap/shared"
working_directory base_dir

# This loads the application in the master process before forking
# worker processes
# Read more about it here:
# http://unicorn.bogomips.org/Unicorn/Configurator.html
preload_app true

GC.copy_on_write_friendly = true if GC.respond_to?(:copy_on_write_friendly=)

# https://newrelic.com/docs/ruby/ruby-gc-instrumentation
GC.enable_stats if GC.respond_to?(:enable_stats)
if defined?(GC::Profiler) && GC::Profiler.respond_to?(:enable)
  GC::Profiler.enable
end

timeout env == 'production' ? 300 : 30

listen 3000, :backlog => 1024

pid = "#{shared_path}/pids/unicorn.pid"

## Set the path of the log files inside the log folder of the testapp
#stdout_path "#{shared_path}/log/unicorn.stdout.log"
#stderr_path "#{shared_path}/log/unicorn.stderr.log"

# The new check_client_connection option allows unicorn to detect
# most disconnected local clients before potentially expensive
# application processing begins.
check_client_connection true

before_fork do |server, _worker|
  # This option works in together with preload_app true setting
  # What is does is prevent the master process from holding
  # the database connection
  defined?(ActiveRecord::Base) && ActiveRecord::Base.connection.disconnect!

  # Before forking, kill the master process that belongs to the .oldbin PID.
  # This enables 0 downtime deploys.
  old_pid = "#{shared_path}/pids/unicorn.pid.oldbin"

  if File.exist?(old_pid) && server.pid != old_pid
    begin
      Process.kill('QUIT', File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
      # someone else did our job for us
    end
  end
end

after_fork do |server, worker|
  # Here we are establishing the connection after forking worker
  # processes
  defined?(ActiveRecord::Base) && ActiveRecord::Base.establish_connection
  child_pid = server.config[:pid].sub('.pid', ".#{worker.nr}.pid")
  system("echo #{Process.pid} > #{child_pid}")
end
