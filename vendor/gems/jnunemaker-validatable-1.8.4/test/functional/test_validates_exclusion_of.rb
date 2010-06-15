require File.expand_path(File.dirname(__FILE__) + '/../test_helper')

module Functional
  class ValidatesExclusionOfTest < Test::Unit::TestCase
    test "given excluded state, when validated, then error is in the objects error collection" do
      klass = Class.new do
        include Validatable
        attr_accessor :state
        validates_exclusion_of :state, :within => %w(in out)
      end
      instance = klass.new
      instance.state = 'in'
      instance.valid?
      assert_equal "is reserved", instance.errors.on(:state)
    end
    
    test "given non-excluded state, when validated, then no error is in the objects error collection" do
      klass = Class.new do
        include Validatable
        attr_accessor :state
        validates_exclusion_of :state, :within => %w(in out)
      end
      instance = klass.new
      instance.state = 'foo'
      instance.valid?
      assert_nil instance.errors.on(:state)
    end
  end
end