set :stages,        %w(staging production)
set :default_stage, "staging"
require 'capistrano/ext/multistage'
################################################################################
##                                                                            ##
##  ROCKET RENTALS Hosting Deployment Configuration                           ##
##                                                                            ##
################################################################################
##                                                                            ##
##  Thank you for using ROCKET RENTALS Hosting.                               ##
##                                                                            ##
##  In order to get your application up and running in 5 simple steps,        ##
##  please follow the instructions in this file.                              ##
##                                                                            ##
##  A.  Choose a title for your application                                   ##
##                                                                            ##
##      Your application title will become part of your application's file    ##
##      system path. It will not be visible to your users.                    ##
##                                                                            ##
##      Please use only downcase letters [a-z] or numbers [0-9], the          ##
##      underscore [_], and no other special characters.                      ##
##                                                                            ##
##      Just replace << APPLICATION TITLE >> in the following line.           ##
##                                                                            ##
## README! Is set in config/deploy/production.rb #set :application, 'wheelmap_org'
##                                                                            ##
##  B.  Configure your environment                                            ##
##                                                                            ##
##      The following parameters will tell the deployment script about your   ##
##      hosting environment. You can set or find out all of these values      ##
##      through the hosting configuration panel at:                           ##
##                                                                            ##
##      http://login.rocket-rentals.de.                                       ##
##                                                                            ##
##  B.1 Website                                                               ##
##                                                                            ##
##      If you haven't done so, please create a Website using the hosting     ##
##      configuration panel. You can do this by clicking:                     ##
##                                                                            ##
##      Sites -> Websites -> Website -> Add new Website                       ##
##                                                                            ##
##      - Specify the domain you have purchased for your site                 ##
##        (e.g. my-website.com ; please don't use www. in the domain name)    ##
##      - Specify additional options if you like                              ##
##      - Click "Save"                                                        ##
##                                                                            ##
##      Now, please replace << DOMAIN >> in the following line by your        ##
##      domain name (again without www.).                                     ##
##                                                                            ##
        set :domain, 'wheelmap.org'
##                                                                            ##
##  B.2 Shell-User                                                            ##
##                                                                            ##
##      If you haven't done so, please create a shell user using the hosting  ##
##      configuration panel. You can do this by clicking:                     ##
##                                                                            ##
##      Sites -> Shell -> Shell-User -> Add new Shell-User                    ##
##                                                                            ##
##      - Select the Site your application should run on                      ##
##      - Specify a Username (e.g. "cap") and a password                      ##
##      - Click "Save"                                                        ##
##                                                                            ##
##      You will find your Shell-User's username in the third column of the   ##
##      table, labeled "Username", shown on the current page. It is composed  ##
##      of your ROCKET RENTALS Hosting account name and the Username          ##
##      (e.g. "cap") you just chose.                                          ##
##                                                                            ##
##      Please note, that it may take up to 30 minutes for your shell user    ##
##      to become available as we're setting up your own chrooted environ-    ##
##      ment with your very own GEM_HOME, etc.                                ##
##                                                                            ##
##      Just replace << USER NAME >> in the following line.                   ##
##                                                                            ##
        set :user, 'hagenburgercap'
        set :ssh_options, :keys => [ File.expand_path("~/.ssh/wheelmap_rsa") ]
##                                                                            ##
##      Next, replace << PASSWORD >> in the following line by the one you     ##
##      just chose for your Shell-User.                                       ##
##                                                                            ##
        #set :password, '******'
        # => SSH keys
##                                                                            ##
##  B.3 Database                                                              ##
##                                                                            ##
##      If you haven't done so, please create a database using the hosting    ##
##      configuration panel. You can do this by clicking:                     ##
##                                                                            ##
##      Sites -> Database -> Database -> Add new Database                     ##
##                                                                            ##
##      - Specify a Database name (e.g. "my_application_db")                  ##
##      - Specify a user (e.g. "my_application_db") and a password            ##
##      - Select an apropriate charset ("UTF-8" in most cases)                ##
##      - Disable Remote access unless you need to access your database from  ##
##        an external application which is NOT on a ROCKET RENTALS Hosting    ##
##        Server.                                                             ##
##      - Click "Save"                                                        ##
##                                                                            ##
##      You will find your Database name in the third column of the           ##
##      table, labeled "Database name", shown on the current page. It is      ##
##      composed of your ROCKET RENTALS Hosting client number (e.g. "c8" )    ##
##      and the Database name you just chose.                                 ##
##                                                                            ##
##      Just replace << DATABASE NAME >> (2 times) in the following lines.    ##
##            
##      IS SET IN STAGING CONFIG                                              ##
##        # set :db_names, {
##        #   :production => 'c15wheelmap', 
##        #   :development => 'c15wheelmap' #,
##        #   # :test => '<< DATABASE NAME >>'
##        # }
##                                                                            ##
##      (If you wish, you can create separate databases for your Rails        ##
##      environments.)                                                        ##
##                                                                            ##
##      Next, replace << USER NAME >> in the following line by the one you    ##
##      just chose for your Database. Please also prepend your client number  ##
##      (e.g. "c8") like you did for the Database name.                       ##
##                                                                            ##
##        set :db_user, 'c15wheelmap'
##                                                                            ##
##      Finally, replace << PASSWORD >> in the following line by the one you  ##
##      just chose for your Database.                                         ##
##                                                                            ##
##        set :db_password, 'gdf97634dLFS'
##                                                                            ##
##  C.  Point to your source code                                             ##
##                                                                            ##
##      Please select whether you use Subversion or Git for version control   ##
##      and uncomment the appropriate line.
##                                                                            ##
        # set :scm, :subversion
        set :scm, :git
##                                                                            ##
##      Next, specify your repository URI. Note: your repository must be      ##
##      accessible from the computer you are running this script on, i.e.     ##
##      your machine. Please make sure you have the correct key file, pass    ##
##      phrase, etc.                                                          ##
##                                                                            ##
        #set :repository, "https://<< my-server.com >>/<< my-repository >>/svn/trunk"   
        set :repository, "git@github.com:sozialhelden/wheelmap.git"
##                                                                            ##
##      If necessary, please also specify any credentials needed for scm      ##
##      access.                                                               ##
##                                                                            ##
#        set :scm_username, "<< REPOSITORY USER NAME >>"
#        set :scm_username, "<< REPOSITORY PASSWORD >>"
##                                                                            ##
##      Please uncomment any of the following options if needed.              ##
##                                                                            ##
#       set :git_enable_submodules, 1 
      set :git_shallow_clone, 1
#       set :branch, 'master'
##                                                                            ##
##  D.  Redirect to your application                                          ##
##                                                                            ##
##      In order to make your application available on the Web, you need to   ##
##      redirect Web traffic to its location. You can do so by clicking:      ##
##                                                                            ##
##      Sites -> Websites -> Website -> Your Website in the table -> Redirect ##
##                                                                            ##
##      - Select "No flag" as Redirect Type                                   ##
##      - Enter "/<< APPLICATION TITLE >>" as Redirect Path, where            ##
##        << APPLICATION TITLE >> is the same you specified in A.             ##
##        Please note the leading / before the title.                         ##
##      - Click "Save"                                                        ##
##                                                                            ##
##  E.  Deploy                                                                ##
##                                                                            ##
##      Now, we are going to deploy your application to the server using      ##
##      Capistrano. Please do the following:                                  ##
##                                                                            ##
##      - Save this file and copy it into the config/ dir of your Rails app   ##
##      - Open a terminal and cd into the root dir of your Rails app          ##
##      - Run "sudo gem install capistrano" to install the latest version of  ##
##        Capistrano                                                          ##
##      - Run "capify ." to enable Capistrano for your Rails app              ##
##      - Run "cap deploy:setup && cap deploy:migrations" to deploy your app  ##
##                                                                            ##
################################################################################
##                                                                            ##
##  AND YOU'RE DONE. YOU SHOULD BE ABLE TO ACCESS YOUR APPLICATION USING:     ##
##                                                                            ##
##  http://<< DOMAIN >>                                                       ##
##                                                                            ##
##  (Please note, that it may take up to 1 minute until your application      ##
##  becomes available.)                                                       ##
##                                                                            ##
################################################################################
##                                                                            ##
##  NEXT STEPS                                                                ##
##                                                                            ##
##  Whenever you'd like to re-deploy a new version of your app, simply open   ##
##  a terminal, cd into the root dir of your Rails app, and run:              ##
##                                                                            ##
##  "cap deploy"                                                              ##
##                                                                            ##
##  or                                                                        ##
##                                                                            ##
##  "cap deploy:migrations" (if you need to migrate your database)            ##
##                                                                            ##
##  To find about more on what you can do using capistrano, check out:        ##
##  http://www.capify.org                                                     ##
##                                                                            ##
################################################################################
##                                                                            ##
##  TROUBLESHOOTING / MISSING GEMS                                            ##
##                                                                            ##
##  If you can't access your app, please read the output of Capistrano        ##
##  and/or the error messages when accessing your site carefully.             ##
##                                                                            ##
##  In many cases, your app will be missing gems. You can install gems on     ##
##  your own by ssh-ing onto the server using the shell user account you      ##
##  created earlier, like so:                                                 ##
##                                                                            ##
##  ssh << USER NAME >>@<< DOMAIN >>                                          ##
##                                                                            ##
##  Once logged in, you can install a gem using:                              ##
##                                                                            ##
##  gem install << GEM NAME >>                                                ##
##                                                                            ##
################################################################################
##                                                                            ##
##  SUPPORT                                                                   ##
##                                                                            ##
##  If you have questions or can't get your app working, please don't         ##
##  hesitate to contact us by sending an email to:                            ##
##                                                                            ##
##  hello@rocket-rentals.de                                                   ##
##                                                                            ##
################################################################################





################################################################################
##                                                                            ##
##  NO MORE CONFIGURATION NEEDED FROM HERE                                    ##
##                                                                            ##
 
set :gem_home, "/var/www/#{domain}/.gem"
set :deploy_via, :copy
set :use_sudo, false
set :default_environment, {'GEM_HOME' => '/.gem', 'GEM_PATH' => '/.gem:/opt/ruby-enterprise/lib/ruby/gems/1.8'}

role :app, domain
role :web, domain
role :db,  domain, :primary => true

after 'deploy:update_code', 'deploy:symlinking'

namespace :deploy do

  task( :start ) { delayed_job.start}

  task( :stop ) { delayed_job.stop}

  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
    delayed_job.restart
  end
  
  # redefine deploy:symlink to create relative instead of absolute links
  # this is necessary in chrooted deployments
  task :symlink, :except => { :no_release => true } do
    on_rollback do
      if previous_release
        run "rm -f #{current_path}; cd #{deploy_to} ; ln -s #{relative_path previous_release} #{relative_path current_path}; true"
      else
        logger.important "no previous release to rollback to, rollback of symlink skipped"
      end
    end
    run "rm -f #{current_path} && cd #{deploy_to} && ln -s #{relative_path latest_release} #{relative_path current_path}"
  end
  
  # Link in some additional resources
  task :symlinking do
    run <<-CMD
      cd #{latest_release}/config && ln -nfs ../../../#{File.join(relative_path(shared_path), 'config', 'cloudmade.yml')} cloudmade.yml
    CMD
    
    run <<-CMD
      cd #{latest_release}/config && ln -nfs ../../../#{File.join(relative_path(shared_path), 'config', 'open_street_map.yml')} open_street_map.yml
    CMD
  end
  # redefine deploy:finalize_update to create relative instead of absolute links
  # this is necessary in chrooted deployments  
  task :finalize_update, :except => { :no_release => true } do
    run "chmod -R g+w #{latest_release}" if fetch(:group_writable, true)

    # mkdir -p is making sure that the directories are there for some SCM's that don't
    # save empty folders
    run <<-CMD
      rm -rf #{latest_release}/log #{latest_release}/public/system #{latest_release}/tmp/pids &&
      mkdir -p #{latest_release}/public &&
      mkdir -p #{latest_release}/tmp &&
      cd #{latest_release} && ln -s ../../#{File.join(relative_path(shared_path), 'log')} log &&
      cd #{File.join latest_release, 'public'} && ln -s ../../../#{File.join(relative_path(shared_path), 'system')} system &&
      cd #{File.join latest_release, 'tmp'} && ln -s ../../../#{File.join(relative_path(shared_path), 'pids')} pids
    CMD

    if fetch(:normalize_asset_timestamps, true)
      stamp = Time.now.utc.strftime("%Y%m%d%H%M.%S")
      asset_paths = %w(images stylesheets javascripts).map { |p| "#{latest_release}/public/#{p}" }.join(" ")
      run "find #{asset_paths} -exec touch -t #{stamp} {} ';'; true", :env => { "TZ" => "UTC" }
    end
  end    
end

namespace :delayed_job do
  
  desc "Stop the delayed_job process"
  task :stop, :roles => :app do
    run "cd #{current_path};#{rails_env} script/delayed_job stop"
  end

  desc "Start the delayed_job process"
  task :start, :roles => :app do
    run "cd #{current_path};#{rails_env} script/delayed_job start"
  end

  desc "Restart the delayed_job process"
  task :restart, :roles => :app do
    run "cd #{current_path};#{rails_env} script/delayed_job restart"
  end
end

namespace :rocket_rentals do

  desc "Create database.yml"
  task :configure_database do
    db_config = <<-EOF
base: &base
  adapter: mysql
  host: 127.0.0.1
  port: 3306
  username: #{db_user}
  password: #{db_password}
  encoding: utf8
EOF
    db_names.each do |environment,db_name|
      db_config << <<-EOF

#{environment}:
  database: #{db_name}
  <<: *base
EOF
    end
    run "mkdir -p #{File.join latest_release, 'config'}"
    put db_config, File.join(latest_release, 'config','database.yml')
  end

  desc "Set GEM_PATH"
  task :configure_gem_path do
    run "cp #{File.join latest_release, 'config', 'environment.rb'} #{File.join latest_release, 'config','environment.rb.' + release_name }"
    run "echo \"# ROCKET RENTALS Hosting: set GEM_PATH for user installed gems\" > #{File.join latest_release, 'config', 'environment.rb'}"
    run "echo \"ENV['GEM_PATH'] = ((ENV['GEM_PATH']||'').split(':') << '#{gem_home}').join(':')\" >> #{File.join latest_release, 'config', 'environment.rb'}"
    run "cat #{File.join latest_release, 'config','environment.rb.' + release_name } >> #{File.join latest_release, 'config', 'environment.rb'}"
    run "rm #{File.join latest_release, 'config','environment.rb.' + release_name }"    
  end
  
  desc "Create .htaccess file"
  task :configure_app_root do
    run "echo $'\\nPassengerAppRoot #{File.join '/var/www', domain, 'u/apps', application, relative_path(latest_release)}' >> #{File.join latest_release, 'public', '.htaccess'}"
  end
  
  desc "Create application symlink"
  task :create_app_symlink do
    run "cd /web && ln -sf ../#{File.join 'u/apps', application, relative_path(current_path), 'public'} #{application}"
  end
  
  desc "set ENV['RAILS_ENV'] for mod_rails (phusion passenger)"
  task :configure_rails_env do
    run <<-CMD
      echo "RailsEnv #{rails_env}" >> #{latest_release}/public/.htaccess
    CMD
  end
  

end

after 'deploy:setup',       'rocket_rentals:create_app_symlink'
after 'deploy:update_code', 'rocket_rentals:configure_database'
after 'deploy:update_code', 'rocket_rentals:configure_gem_path'
after 'deploy:update_code', 'rocket_rentals:configure_app_root'
after 'deploy:update_code', 'rocket_rentals:configure_rails_env'

# make relative path from absolute and root part
def relative_path(absolute_path, root=deploy_to)
  absolute_path.gsub(Regexp.new("^#{File.join root, '/'}"),'./')
end