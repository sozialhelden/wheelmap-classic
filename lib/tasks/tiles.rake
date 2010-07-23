namespace :osm do
  
  desc 'Download all tile for germany'
  task :download_tiles do
    puts "This may take a while ..."
    system <<-CMD
      cd bin
      java -jar JTileDownloader.jar dl=tilesBBoxLatLon.xml
    CMD
  end
end
