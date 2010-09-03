WORKING_DIR="tmp/osmosis-working-dir"
OSMOSIS_DIR="bin/osmosis"
OSMOSIS_BIN="#{OSMOSIS_DIR}/bin/osmosis"
VAR_DIR="tmp/var"
CHANGE_FILE="#{VAR_DIR}/replicate-#{Time.now.to_i}.osc"
MERGED_FILE="#{VAR_DIR}/merged.osc"
STATE_FILE="#{WORKING_DIR}/state.txt"
BACKUP_FILE="#{WORKING_DIR}/state.old"
LOCKFILE="tmp/replicate.lock"

require 'rake'

def ensure_directory_exists(dirname)
  if !File.exists? dirname
    puts "OK: creating #{dirname}"
    FileUtils.mkdir_p dirname, :verbose => true
  else
    puts "OK: #{dirname} already exists."
  end  
end

def ensure_configuration_file_exists
  config_file = "#{WORKING_DIR}/configuration.txt"
  if File.exists? config_file
    puts "OK: #{config_file} already exists."
  else
    puts "OK: creating #{config_file}"
    system "#{OSMOSIS_BIN} --rrii workingDirectory=#{RAILS_ROOT}/#{WORKING_DIR}"
  end
end

def ensure_state_file_exists
  if File.exists? STATE_FILE
    puts "OK: #{STATE_FILE} already exists."
  else
    STDERR.puts "ERROR: #{STATE_FILE} is missing!"
    STDERR.puts "       Go to http://planet.openstreetmap.org/minute-replicate/000/ and find the corresponding"
    STDERR.puts "       state file for the imported planet.dump"
  end
end

def ensure_lockfile_doesnt_exist
  if File.exists? LOCKFILE
    raise "Lockfile exists: #{LOCKFILE}"
  end
end

def remove_old_replication_files
  FileUtils.rm_rf Dir.glob("#{VAR_DIR}/replicate-*.osc"), :verbose => true
end

def get_new_replication_file
  system "#{OSMOSIS_BIN} --rri workingDirectory=#{RAILS_ROOT}/#{WORKING_DIR} --simc --wxc #{VAR_DIR}/replicate-#{Time.now.to_i}.osc"
end

def merge_replication_files
  system "#{OSMOSIS_BIN} --read-xml-change-0.6 #{MERGED_FILE} --sort-change-0.6 --read-xml-change-0.6 #{CHANGE_FILE} --sort-change-0.6 --merge-change-0.6 --wxc #{MERGED_FILE}.new"
  if File.exists? "#{MERGED_FILE}.new"
    FileUtils.mv "#{MERGED_FILE}.new", MERGED_FILE, :verbose => true
  end
end

def create_lock_file
  FileUtils.touch LOCKFILE, :verbose => true
end

def remove_lock_file
  FileUtils.rm_rf LOCKFILE, :verbose => true
end

def backup_state_file
  unless FileUtils.cp STATE_FILE, BACKUP_FILE, :verbose => true, :preserve => true
    raise "Could not backup backup file!"
  end
end

def restore_state_file
  unless FileUtils.cp BACKUP_FILE, STATE_FILE, :verbose => true, :preserve => true
    raise "Could not restore backup file!"
  end
end

def remove_merged_file
  FileUtils.rm_rf MERGED_FILE, :verbose => true
end


namespace :osm do  

  desc 'Import POI Data from STDIN'
  task :import => :environment do
    puts "Reading vom STDIN. Please pipe some data in: bzcat planet.osm.bz2 | rake osm:import"
    p = PlanetReader.new(STDIN)
    p.load()
  end
  
  namespace :replication do
    
    desc 'Prepare replication requirements'
    task :prepare do
      
      ensure_directory_exists OSMOSIS_DIR
      ensure_directory_exists VAR_DIR
      ensure_directory_exists WORKING_DIR
      ensure_configuration_file_exists
      ensure_state_file_exists
      puts "\nNow call rake osm:replication:sync"
    end
    
    
    desc 'Sync current database with osm planet data'
    task :sync do
      
      ensure_lockfile_doesnt_exist
      ensure_state_file_exists
      
      begin
        create_lock_file
        
        backup_state_file
        
        remove_old_replication_files
      
        get_new_replication_file        
        
        if File.exists? MERGED_FILE
          # There is some left over from last replication
          puts "INFO: merging #{MERGED_FILE} with #{CHANGE_FILE}"
          merge_replication_files

        else
          # There is nothing left
          FileUtils.cp CHANGE_FILE, MERGED_FILE, :verbose => true, :preserve => true
        end
        
        if system "cat #{MERGED_FILE} | RAILS_ENV=#{RAILS_ENV} rake osm:import"
          remove_merged_file
        end
        
      rescue Exception => e
        STDERR.puts "Something went wrong, restoring old state.txt"
        STDERR.puts e.message
        STDERR.puts e.backtrace
        restore_state_file
      ensure
        remove_lock_file
      end
    end
  end
end
