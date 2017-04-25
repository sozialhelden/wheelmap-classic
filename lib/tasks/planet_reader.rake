WORKING_DIR = 'tmp/osmosis-working-dir'.freeze
OSMOSIS_DIR = 'bin/osmosis'.freeze
OSMOSIS_BIN = "#{OSMOSIS_DIR}/bin/osmosis".freeze
VAR_DIR = 'tmp/var'.freeze
CHANGE_FILE = "#{VAR_DIR}/replicate-#{Time.now.to_i}.osc".freeze
MERGED_FILE = "#{VAR_DIR}/merged.osc".freeze
SHAPE_FILE = "#{VAR_DIR}/shapes.osc".freeze
STATE_FILE = "#{WORKING_DIR}/state.txt".freeze
BACKUP_FILE = "#{WORKING_DIR}/state.old".freeze
DOWNLOAD_LOCK = "#{WORKING_DIR}/download.lock".freeze

require 'rake'

def ensure_directory_exists(dirname)
  if !File.exist? dirname
    puts "OK: creating #{dirname}"
    FileUtils.mkdir_p dirname, verbose: true
  else
    puts "OK: #{dirname} already exists."
  end
end

def ensure_configuration_file_exists
  config_file = "#{WORKING_DIR}/configuration.txt"
  if File.exist? config_file
    puts "OK: #{config_file} already exists."
  else
    puts "OK: creating #{config_file}"
    system "#{OSMOSIS_BIN} --rrii workingDirectory=#{Rails.root}/#{WORKING_DIR}"
  end
end

def ensure_state_file_exists
  if File.exist? STATE_FILE
    puts "OK: #{STATE_FILE} already exists."
  else
    STDERR.puts "ERROR: #{STATE_FILE} is missing!"
    STDERR.puts '       Go to http://planet.openstreetmap.org/minute-replicate/000/ and find the corresponding'
    STDERR.puts '       state file for the imported planet.dump'
  end
end

def remove_old_replication_files
  FileUtils.rm_rf Dir.glob("#{VAR_DIR}/replicate-*.osc"), verbose: true
end

def remove_shape_replication_file
  FileUtils.rm_rf SHAPE_FILE, verbose: true
end

def get_new_replication_file
  puts 'INFO: Fetching node changes.'
  system "#{OSMOSIS_BIN} --rri workingDirectory=#{Rails.root}/#{WORKING_DIR} --simc --wxc #{CHANGE_FILE}"
end

def get_new_shape_replication_files
  puts "INFO: Fetching shape changes."
  system "#{MAKE_OSC} -d >> #{SHAPE_FILE}"
end

def merge_replication_files
  system "#{OSMOSIS_BIN} --read-xml-change-0.6 #{MERGED_FILE} --sort-change-0.6 --read-xml-change-0.6 #{CHANGE_FILE} --sort-change-0.6 --merge-change-0.6 --wxc #{MERGED_FILE}.new"
  if File.exist? "#{MERGED_FILE}.new"
    FileUtils.mv "#{MERGED_FILE}.new", MERGED_FILE, verbose: true
  end
end

def merge_shape_replication_files
  system "#{OSMOSIS_BIN} --read-xml-change-0.6 #{MERGED_FILE} --sort-change-0.6 --read-xml-change-0.6 #{SHAPE_FILE} --sort-change-0.6 --merge-change-0.6 --wxc #{MERGED_FILE}.new"
  if File.exist? "#{MERGED_FILE}.new"
    FileUtils.mv "#{MERGED_FILE}.new", MERGED_FILE, verbose: true
  end
end

def backup_state_file
  unless FileUtils.cp STATE_FILE, BACKUP_FILE, verbose: true, preserve: true
    raise 'Could not backup backup file!'
  end
end

def restore_state_file
  unless FileUtils.cp BACKUP_FILE, STATE_FILE, verbose: true, preserve: true
    raise 'Could not restore backup file!'
  end
end

def remove_merged_file
  FileUtils.rm_rf MERGED_FILE, verbose: true
end

def tag_filter
  tag_filter = []
  NodeType.combination.keys.each do |key|
    tag_filter << "#{key}=#{NodeType.combination[key].keys.join(',')}"
  end
  tag_filter.join(' ')
end

namespace :osm do
  desc 'Download POI Data for a given key,value combination and import'
  task download: :environment do
    key = ENV['key'] || raise('rake osm:download key=<osmkey> value=<osmvalue>')
    value = ENV['value'] || raise('rake osm:download key=<osmkey> value=<osmvalue>')
    ENV['file'] ||= "/tmp/#{Time.now.to_i}.osm" # saving to file for further processing
    puts "Saving to #{ENV['file']}"
    system "curl -s http://open.mapquestapi.com/xapi/api/0.6/node%5B#{key}=#{value}%5D > #{ENV['file']}"
    Rake::Task['osm:import'].invoke
  end

  desc 'Strip planet dump from unwanted data'
  task strip_planet: :environment do
    file = ENV['file']
    raise 'Run rake osm:strip_planet file=planet-latest.osm-pbf' unless file
    format = file.include?('pbf') ? 'pbf' : 'xml'
    commando = <<-EOR
#{OSMOSIS_BIN} --read-#{format} file=#{file} \
--tag-filter reject-relations \
--tag-filter reject-ways \
--tag-filter accept-nodes #{tag_filter} \
--write-#{format} file=stripped_#{file}
    EOR
    system commando
  end

  desc 'Import POI Data from STDIN'
  task import: :environment do
    puts 'Reading vom STDIN. Please pipe some data in: bzcat planet.osm.bz2 | rake osm:import FULL=1 CREATE_TABLE=1 SWAP_TABLE=1'
    file = ENV['file']
    full_dump = ENV['FULL'].present?
    create_table = ENV['CREATE_TABLE'].present?
    swap_table = ENV['SWAP_TABLE'].present?
    p = PlanetReader.new(file || STDIN, full_dump, create_table, swap_table)
    p.load
  end

  namespace :replication do
    desc 'Prepare replication requirements'
    task prepare: :environment do
      ensure_directory_exists OSMOSIS_DIR
      ensure_directory_exists VAR_DIR
      ensure_directory_exists WORKING_DIR
      ensure_configuration_file_exists
      ensure_state_file_exists
      puts "\nNow call rake osm:replication:sync"
    end

    desc 'Sync current database with osm planet data'
    task sync: :environment do
      ensure_state_file_exists

      begin

        backup_state_file

        remove_old_replication_files

        get_new_replication_file

        if File.exist? MERGED_FILE
          # There is some left over from last replication
          puts "INFO: merging #{MERGED_FILE} with #{CHANGE_FILE}"
          merge_replication_files
        else
          # There is nothing left
          FileUtils.cp CHANGE_FILE, MERGED_FILE, verbose: true, preserve: true
        end

        get_new_shape_replication_files

        if File.exist?(SHAPE_FILE) && File.size(SHAPE_FILE) > 150
          puts "INFO: merging #{MERGED_FILE} with #{SHAPE_FILE}"
          merge_shape_replication_files
        else
          puts 'INFO: No changes in shape files.'
        end

        ENV['file'] = MERGED_FILE
        if Rake::Task['osm:import'].invoke
          remove_merged_file
          remove_shape_replication_file
        end

      rescue Exception => e
        STDERR.puts 'Something went wrong, restoring old state.txt'
        STDERR.puts e.message
        STDERR.puts e.backtrace
        restore_state_file
      end
    end
  end
end
