# Crewait is a tool for ActiveRecord for mass-importing of data.
# The idea is the you start a Crewait session, you use ActiveRecord::Base#crewait instead of #create, and then at some point you tell it to go!, which bulk inserts all those created records into SQL.
module Crewait

  def self.start_waiting(config = {})
    config(config)
    # clear our all important hash caches
    @@hash_of_hashes = {}
    @@hash_of_next_inserts = {}
  end

  # add one crewait instance
  def self.for(model, hash)
    # if this class is new, add in the next_insert_value
    @@hash_of_next_inserts[model] ||= model.next_insert_id
    # if this class is new, create a new hash to receive it
    @@hash_of_hashes[model] ||= {}
    @@hash_of_hashes[model].respectively_insert(model, hash)
    hash[:id] = @@hash_of_next_inserts[model] + @@hash_of_hashes[model].inner_length - 1
    # add dummy methods
    unless @@config[:no_methods]
      eigenclass = class << hash; self; end
      eigenclass.class_eval {
        hash.each do |key, value|
          define_method(key) { value }
          # define_method(key.to_s + '=') { set_value(fake_id, )}
        end
      }
    end
    hash
  end

  def self.go!
    @@hash_of_hashes.each do |key, hash|
      hash.import_to_sql(key)
    end
    @@hash_of_hashes = {}
    @@hash_of_next_inserts = {}
  end

  def self.config(hash)
    @@config = {} unless defined?(@@config)
    @@config.merge!(hash)
  end

  module BaseMethods
    def next_insert_id
      connection = ActiveRecord::Base.connection
      database, adapter = connection.current_database, connection.adapter_name
      sql = case adapter.downcase
      when 'postgresql'
        "SELECT nextval('#{self.table_name}_id_seq')"
      when /mysql/
        "SELECT auto_increment FROM information_schema.tables WHERE table_name='#{self.table_name}' AND table_schema ='#{database}'"
      else
        raise "your database/adapter (#{adapter}) is not supported by crewait! want to write a patch?"
      end
      results = ActiveRecord::Base.connection.execute(sql)
      case adapter.downcase
      when 'postgresql'
        results[0]["nextval"].to_i
      when 'mysql'
        results.fetch_hash['auto_increment'].to_i
      when 'mysql2'
        results.map {|x| x[0]}[0].to_i
      else
        raise "your database/adapter (#{adapter}) is not supported by crewait! want to write a patch?"
      end
    end

    def crewait(hash)
			Crewait.for(self, hash)
  	end
  end

  module HashMethods
    def import_to_sql(model_class)
      if model_class.respond_to? :table_name
        model_class = model_class.table_name
      end
      keys = self.keys
      values = []
      keys.each do |key|
        values << (self[key].any? {|x| x != true} ? self[key] : self[key].collect {|x| 1})
      end
      values = values.transpose
      sql = values.to_crewait_sql

  		while !sql.empty? do
  			query_string = "insert low_priority into #{model_class} (#{keys.join(', ')}) values #{sql.shift}"
  			while !sql.empty? && (query_string.length + sql.last.length < 999_999)  do
  				query_string << ',' << sql.shift
  			end
  			query_string << " ON DUPLICATE KEY UPDATE #{keys.map{|k| k.to_s + '=' + 'VALUES(' + k.to_s + ')'}.join(',')}"
        ActiveRecord::Base.connection.execute(query_string)
  		end
    end
    # this was originally called "<<", but changed for namespacing
    def respectively_insert(model_class, other_hash)
      new_keys = other_hash.keys - self.keys
      length = new_keys.empty? ? 0 : self.inner_length
      new_keys.each do |key|
        self[key] = Array.new(length)
      end
      self.keys.each do |key|
        if model_class.serialized_attributes.key?(key.to_s)
          self[key] << YAML.dump(other_hash[key])
        else        
          self[key] << other_hash[key]
        end
      end
    end
    def inner_length
      !self.values.empty? ? self.values.first.length : 0
    end
  end

  module ArrayMethods
    def to_crewait_sql
    	self.collect {|x| "(#{x.collect{|x| x.nil? ? 'NULL' : "#{ActiveRecord::Base.sanitize(x)}"}.join(', ')})" }
    end
  end
end

class ActiveRecord::Base
  extend Crewait::BaseMethods
end

class Hash
  include Crewait::HashMethods
end

class Array
  include Crewait::ArrayMethods
end