#!/usr/bin/env ruby
# by Helder Ribeiro 2009
#
# Plugin to monitor delayed_jobs' queue size
# Gives updates with number of jobs that haven't been started yet
# plus the ones that failed and are still rescheduled for another run
#
# Parameters supported:
#
#  config

require 'rubygems'
require 'mysql'
require 'time'
require 'yaml'

class Grapher

  def initialize(db_conf)
    @db_conf = db_conf
  end

  def config
    puts <<-END_CONFIG
graph_title Delayed_Jobs Average Job Run Time
graph_args -l 0
graph_vlabel average run time (s)
avg_run_time.label average job run time
avg_run_time.type GAUGE
    END_CONFIG
  end

  def get_data
    mysql = Mysql.new(@db_conf['host'] || 'localhost',
                      @db_conf['username'] || 'root', @db_conf['password'], 
                      @db_conf['database'], @db_conf['port'],
                      @db_conf['socket'])
    # get jobs that finished since the last poll, i.e. in the last 5 minutes
    result = mysql.query("SELECT first_started_at, finished_at \
                        FROM delayed_jobs WHERE \
                       finished_at > NOW() - 5 * 60")
    
    value = 0.0
    result.each_hash do |hash|
      values = [hash['finished_at'],hash['first_started_at']].map { |v|
        Time.parse(v)
      }
      run_time = (values[0] - values[1])
      value += run_time / result.num_rows
    end
    puts "avg_run_time.value #{value}"
  end


end

if __FILE__ == $0

  environment = ENV['RAILS_ENV'] || 'production'
  db_conf = YAML.load(File.read(ENV['DATABASE_YML']))[environment]
  grapher = Grapher.new(db_conf)

  case ARGV.first
  when 'config'
    grapher.config
  else
    grapher.get_data
  end

end
