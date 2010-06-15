require File.expand_path(File.dirname(__FILE__) + '/../test_helper')

module Functional
  class ValidatesInclusionOfTest < Test::Unit::TestCase
    test "given state not in list, when validated, then error is in the objects error collection" do
      klass = Class.new do
        include Validatable
        attr_accessor :state
        validates_inclusion_of :state, :within => %w(in out)
      end
      instance = klass.new
      instance.state = 'foo'
      instance.valid?
      assert_equal "is not in the list", instance.errors.on(:state)
    end
    
    test "given state in list, when validated, then no error is in the objects error collection" do
      klass = Class.new do
        include Validatable
        attr_accessor :state
        validates_inclusion_of :state, :within => %w(in out)
      end
      instance = klass.new
      instance.state = 'in'
      instance.valid?
      assert_nil instance.errors.on(:state)
    end
  end
end