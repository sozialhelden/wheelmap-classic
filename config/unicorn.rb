# config/unicorn.rb
# Set environment to development unless something else is specified
env = ENV["RAILS_ENV"] || "staging"

worker_processes (env == 'production' ? 9 : 1)
base_dir = "/var/apps/wheelmap/#{env}/current"
shared_path = "/var/apps/wheelmap/#{env}/shared"
working_directory base_dir

# This loads the application in the master process before forking
# worker processes
# Read more about it here:
# http://unicorn.bogomips.org/Unicorn/Configurator.html
preload_app true

if GC.respond_to?(:copy_on_write_friendly=)
  GC.copy_on_write_friendly = true
end

# https://newrelic.com/docs/ruby/ruby-gc-instrumentation
if GC.respond_to?(:enable_stats)
  GC.enable_stats
end
if defined?(GC::Profiler) and GC::Profiler.respond_to?(:enable)
  GC::Profiler.enable
end

timeout (env == 'production' ? 300 : 30)

# This is where we specify the socket.
# We will point the upstream Nginx module to this socket later on
listen 3000, :backlog => 1024

pid "#{shared_path}/pids/unicorn.pid"

# Set the path of the log files inside the log folder of the testapp
stdout_path "#{shared_path}/log/unicorn.stdout.log"
stderr_path "#{shared_path}/log/unicorn.stderr.log"

# The new check_client_connection option allows unicorn to detect
# most disconnected local clients before potentially expensive
# application processing begins.
check_client_connection true

before_fork do |server, worker|
  # This option works in together with preload_app true setting
  # What is does is prevent the master process from holding
  # the database connection
  defined?(ActiveRecord::Base) and ActiveRecord::Base.connection.disconnect!

  # Before forking, kill the master process that belongs to the .oldbin PID.
  # This enables 0 downtime deploys.
  old_pid = "#{shared_path}/pids/unicorn.pid.oldbin"

  if File.exists?(old_pid) && server.pid != old_pid
    begin
      Process.kill("QUIT", File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
      # someone else did our job for us
    end
  end
end

after_fork do |server, worker|
# Here we are establishing the connection after forking worker
# processes
  defined?(ActiveRecord::Base) and ActiveRecord::Base.establish_connection
  child_pid = server.config[:pid].sub('.pid', ".#{worker.nr}.pid")
  system("echo #{Process.pid} > #{child_pid}")
end
