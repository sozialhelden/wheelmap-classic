namespace :osm do
  
  desc 'Download all tile for germany'
  task :download_tiles do
    system <<-CMD
      pwd
      cd bin
      pwd
      java -jar JTileDownloader.jar dl=tilesBBoxLatLon.xml
    CMD
  end
end
