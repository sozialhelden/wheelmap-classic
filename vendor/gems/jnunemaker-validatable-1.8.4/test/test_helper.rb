require 'set'
require 'test/unit'
require 'mocha'
require 'dust'
require 'expectations'

require File.expand_path(File.dirname(__FILE__) + '/../lib/validatable')

class << Test::Unit::TestCase
  def expect(expected_value, &block)
    define_method :"test_#{caller.first.split("/").last}" do
      begin
        assert_equal expected_value, instance_eval(&block)
      rescue Exception => ex
        raise ex unless expected_value.is_a?(Class) && ex.is_a?(expected_value)
        assert_equal expected_value, ex.class
      end
    end 
  end
end

class Array
  def to_blank_options_hash
    self.inject({}) {|hash, value| hash[value] = nil; hash }
  end
end