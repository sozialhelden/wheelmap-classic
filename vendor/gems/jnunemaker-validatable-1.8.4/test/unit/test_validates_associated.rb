require File.expand_path(File.dirname(__FILE__) + '/../test_helper')

Expectations do

  expect false do
    parent = stub('parent', :child => stub(:valid? => false))
    validation = Validatable::ValidatesAssociated.new stub_everything, :child
    validation.valid?(parent)
  end

  expect true do
    parent = stub('parent', :child => stub(:valid? => true))
    validation = Validatable::ValidatesAssociated.new stub_everything, :child
    validation.valid?(parent)
  end

  expect false do
    parent = stub('parent', :children => [stub(:valid? => false)])
    validation = Validatable::ValidatesAssociated.new stub_everything, :children
    validation.valid?(parent)
  end

  expect true do
    parent = stub('parent', :children => [stub(:valid? => true)])
    validation = Validatable::ValidatesAssociated.new stub_everything, :children
    validation.valid?(parent)
  end

end
