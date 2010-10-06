namespace :db do  

  desc 'Dump POI Data'
  task :dump_pois do
    system "mysql -uroot wheelmap_development | bzip2 > tmp/pois.sql.bz2"
  end
end  
