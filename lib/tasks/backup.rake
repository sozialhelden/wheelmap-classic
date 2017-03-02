namespace :db do
  desc 'Back up the database'
  task :backup do
    sh 'bundle exec backup perform --trigger my_backup --config_file config/backup.rb --data-path db --log-path log --tmp-path tmp'
  end
end
