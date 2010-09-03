# Crewait is a tool for ActiveRecord for mass-importing of data.
# The idea is the you start a Crewait session, you use ActiveRecord::Base#crewait instead of #create, and then at some point you tell it to go!, which bulk inserts all those created records into SQL.
module Crewait
  
  def self.start_waiting
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
    @@hash_of_hashes[model].respectively_insert(hash)
    # add dummy methods
    fake_id = @@hash_of_next_inserts[model] + @@hash_of_hashes[model].inner_length - 1
    eigenclass = class << hash; self; end
    eigenclass.class_eval {
      define_method(:id) { fake_id }
      hash.each do |key, value|
        define_method(key) { value }
        # define_method(key.to_s + '=') { set_value(fake_id, )}
      end
    }
    hash
  end
  
  def self.go!
    @@hash_of_hashes.each do |key, hash|
      hash.import_to_sql(key)
    end
    @@hash_of_hashes = {}
    @@hash_of_next_inserts = {}
  end
  
  module BaseMethods
    def next_insert_id
      connection = ActiveRecord::Base.connection
      database = connection.current_database
      adapter = connection.adapter_name
      case adapter.downcase
        when 'postgresql' then
          ActiveRecord::Base.connection.execute("SELECT nextval('#{self.table_name}_id_seq')")[0]["nextval"].to_i
        when 'mysql' then
          ActiveRecord::Base.connection.execute( "
            SELECT auto_increment
            FROM information_schema.tables
            WHERE table_name='#{self.table_name}' AND
              table_schema ='#{database}'
            " ).fetch_hash['auto_increment'].to_i
        else
          raise "your database is not supported by crewait! want to write a patch?"
      end
    end

    def crewait(hash)
  		stay_a_hash = hash.delete(:stay_a_hash)
  		unless stay_a_hash
  			Crewait.for(self, hash)
  		else
  			object = self.new(hash)
  			object.before_validation
  	  	Crewait.for(object.class, object.attributes)
  		end
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
  			query_string = "INSERT INTO #{model_class} (#{keys.join(', ')}) VALUES #{sql.shift}"
  			while !sql.empty? && (query_string.length + sql.last.length < 999_999)  do
  				query_string << ',' << sql.shift
  			end
  			query_string << " ON DUPLICATE KEY UPDATE #{keys.map{|k| k.to_s + '=' + 'VALUES(' + k.to_s + ')'}.join(',')}"
        ActiveRecord::Base.connection.execute(query_string)
  		end
    end
    # this was originally called "<<", but changed for namespacing
    def respectively_insert(other_hash)
      new_keys = other_hash.keys - self.keys
      length = new_keys.empty? ? 0 : self.inner_length 
      new_keys.each do |key|
        self[key] = Array.new(length)
      end
      self.keys.each do |key|
        self[key] << other_hash[key]
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
