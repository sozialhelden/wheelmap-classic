require File.expand_path(File.dirname(__FILE__) + '/../test_helper')

module Functional
  class ValidatesAssociatedTest < Test::Unit::TestCase
    def setup
      @parent = Class.new do
        include Validatable
        attr_accessor :children
        validates_associated :children
      end
      @child = Class.new do
        include Validatable
        attr_accessor :name
        validates_presence_of :name
      end
    end

    test "given invalid child, when validated, then error is in the parent's error collection" do
      instance = @parent.new
      instance.children = [@child.new]
      instance.valid?
      assert_equal "is invalid", instance.errors.on(:children)
    end

    test "given two invalid children, when validated, then both children have errors" do
      instance = @parent.new
      instance.children = [@child.new, @child.new]
      instance.valid?
      instance.children.each do |child|
        assert_not_nil child.errors.on(:name)
      end
    end

    test "given valid child, when validated, the parent is valid" do
      instance = @parent.new
      instance.children = [@child.new]
      instance.children.first.name = 'x'
      assert instance.valid?
    end
  end
end
