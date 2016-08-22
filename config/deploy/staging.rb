# Settings for delayed job
set :delayed_job_server_role, :worker
set :delayed_job_args, "-p wheelmap_staging"
set :rails_env, "staging" #added for delayed job

set :stage, :staging
set :deploy_to, "/var/apps/#{fetch(:application)}"

set :branch, ENV['BRANCH'] || 'master'
set :rev, proc { `git rev-parse --short #{fetch(:branch)}`.chomp }

set :whenever_identifier, ->{ "#{fetch(:application)}_#{fetch(:stage)}" }

# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.

# role :app,    %w{192.168.33.10}
# role :web,    %w{192.168.33.10}
# role :db,     %w{192.168.33.13}
role :worker, %w{192.168.33.20}
#
# role :app,    %w{176.9.63.171}
# role :web,    %w{176.9.63.171}
# role :db,     %w{176.9.63.171}
# role :worker, %w{176.9.63.171}

# Extended Server Syntax
# ======================
# This can be used to drop a more detailed server definition into the
# server list. The second argument is a, or duck-types, Hash and is
# used to set extended properties on the server.

server '192.168.33.20', user: 'deploy', roles: %w{worker}#, my_property: :my_value
# server '176.9.63.171', user: 'rails', roles: %w{web app}, my_property: :my_value


# Custom SSH Options
# ==================
# You may pass any option but keep in mind that net/ssh understands a
# limited set of options, consult[net/ssh documentation](http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start).
#
# Global options
# --------------
set :ssh_options, {
  keys: %w(~/.ssh/sozialhelden_chef_id_rsa),
  forward_agent: true,
  config: true,
  port: 22
  # auth_methods: %w(password)
}
#
# And/or per server (overrides global)
# ------------------------------------
# server 'example.com',
#   user: 'user_name',
#   roles: %w{web app},
#   ssh_options: {
#     user: 'user_name', # overrides user setting above
#     keys: %w(/home/user_name/.ssh/id_rsa),
#     forward_agent: false,
#     auth_methods: %w(publickey password)
#     # password: 'please use keys'
#   }
