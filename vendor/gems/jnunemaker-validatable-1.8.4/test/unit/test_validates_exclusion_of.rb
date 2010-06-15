require File.expand_path(File.dirname(__FILE__) + '/../test_helper')

Expectations do
  expect false do
    validation = Validatable::ValidatesExclusionOf.new stub_everything, :state, :within => %w(in out)
    validation.valid?(stub(:state => 'in'))
  end
  
  expect true do
    validation = Validatable::ValidatesExclusionOf.new stub_everything, :state, :within => %w(in out)
    validation.valid?(stub(:state => 'foo'))
  end
  
  expect true do
    validation = Validatable::ValidatesExclusionOf.new stub_everything, :state, :within => %w(in out), :allow_blank => true
    validation.valid?(stub(:state => ''))
  end

  expect true do
    validation = Validatable::ValidatesExclusionOf.new stub_everything, :state, :within => %w(in out), :allow_nil => true
    validation.valid?(stub(:state => nil))
  end
end