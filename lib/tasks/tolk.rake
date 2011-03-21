namespace :tolk do
  require 'yaml'
  desc "Use mysqldump to export all tolk related tables"
  task :dump_sql => :environment do
    load_project_db_settings
    t = Time.now.to_i    
    system "mysqldump --user=$MYSQL_USER --password=$MYSQL_PWD $MYSQL_DB tolk_translations tolk_locales tolk_phrases > #{Rails.root}/tmp/tolk_dump_#{t}.sql"
    puts "Dumped file to #{Rails.root}/tmp/tolk_dump_#{t}.sql"
  end
  
  desc "load tolk related tables from given sql file into database"
  task :load_sql => :environment do
    load_project_db_settings
    system "mysql --user=$MYSQL_USER --password=$MYSQL_PWD $MYSQL_DB < #{ENV['FILE']}"
  end
  
  def load_project_db_settings
    db = YAML::load(File.open("#{Rails.root}/config/database.yml"))[Rails.env]
    ENV['MYSQL_USER'] = db['username']
    ENV['MYSQL_PWD']  = db['password']
    ENV['MYSQL_DB']   = db['database']
  end
end