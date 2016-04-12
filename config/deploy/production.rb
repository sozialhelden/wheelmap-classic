# Settings for delayed job
set :delayed_job_server_role, :worker
set :delayed_job_args, "-p wheelmap_production"
set :rails_env, "production" #added for delayed job

set :stage, :production
set :deploy_to, "/var/apps/#{fetch(:application)}/#{fetch(:stage)}"

set :branch, :production
set :rev, proc { `git rev-parse --short #{fetch(:branch)}`.chomp }

# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.

role :app,    %w{176.9.63.170}
role :web,    %w{176.9.63.170}
role :db,     %w{176.9.63.170}
role :worker, %w{176.9.63.170}

# Extended Server Syntax
# ======================
# This can be used to drop a more detailed server definition into the
# server list. The second argument is a, or duck-types, Hash and is
# used to set extended properties on the server.

server '176.9.63.170', user: 'rails', roles: %w{web app db worker}, port: 22022


# Custom SSH Options
# ==================
# You may pass any option but keep in mind that net/ssh understands a
# limited set of options, consult[net/ssh documentation](http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start).
#
# Global options
# --------------
set :ssh_options, {
  keys: %w(~/.ssh/wheelmap_rsa),
  forward_agent: true,
  config: true,
  port: 22022
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