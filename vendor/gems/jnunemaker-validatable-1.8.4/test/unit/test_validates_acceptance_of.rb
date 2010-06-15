require File.expand_path(File.dirname(__FILE__) + '/../test_helper')

Expectations do
  expect true do
    validation = Validatable::ValidatesAcceptanceOf.new stub_everything, :acceptance
    instance = stub(:acceptance=>'1')
    validation.valid?(instance)
  end
  
  expect true do
    validation = Validatable::ValidatesAcceptanceOf.new stub_everything, :acceptance
    instance = stub(:acceptance=>'t')
    validation.valid?(instance)
  end
  
  expect true do
    validation = Validatable::ValidatesAcceptanceOf.new stub_everything, :acceptance
    instance = stub(:acceptance=>'true')
    validation.valid?(instance)
  end
  
  expect true do
    validation = Validatable::ValidatesAcceptanceOf.new stub_everything, :acceptance, :allow_nil => true
    instance = stub(:acceptance=>nil)
    validation.valid?(instance)
  end
  
  expect true do
    validation = Validatable::ValidatesAcceptanceOf.new stub_everything, :acceptance, :allow_blank => true
    instance = stub(:acceptance=>'')
    validation.valid?(instance)
  end
  
  expect false do
    validation = Validatable::ValidatesAcceptanceOf.new stub_everything, :acceptance
    instance = stub(:acceptance=>'0')
    validation.valid?(instance)
  end
  
  expect true do
    options = {:message => nil, :if => nil, :times => nil, :level => nil, :groups => nil}
    Validatable::ValidatesAcceptanceOf.new(stub_everything, :test).must_understand(options)
  end
  
end