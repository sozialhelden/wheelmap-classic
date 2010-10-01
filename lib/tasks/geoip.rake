namespace :geoip do
  
  desc 'Download lates geoip database'
  task :download do
    db_file = "#{RAILS_ROOT}/../shared/config/GeoLiteCity.dat.gz"
    system "wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz -O #{db_file}"
    system "gunzip -f #{db_file}"
  end
end