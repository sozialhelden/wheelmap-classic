worker_processes 2
base_dir = "/var/apps/wheelmap/staging/current"
shared_path = "/var/apps/wheelmap/staging/shared"
working_directory base_dir

# This loads the application in the master process before forking
# worker processes
# Read more about it here:
# http://unicorn.bogomips.org/Unicorn/Configurator.html
preload_app true

if GC.respond_to?(:copy_on_write_friendly=)
  GC.copy_on_write_friendly = true
end

timeout 30

# This is where we specify the socket.
# We will point the upstream Nginx module to this socket later on
listen "#{base_dir}/tmp/sockets/unicorn.sock", :backlog => 64

pid "#{shared_path}/pids/unicorn.pid"

# Set the path of the log files inside the log folder of the testapp
stdout_path "#{shared_path}/log/unicorn.stdout.log"
stderr_path "#{shared_path}/log/unicorn.stderr.log"

before_fork do |server, worker|
# This option works in together with preload_app true setting
# What is does is prevent the master process from holding
# the database connection
  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.connection.disconnect!
end

after_fork do |server, worker|
# Here we are establishing the connection after forking worker
# processes
  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.establish_connection
end