require 'spec_helper'

describe Provider do

  subject do
    Factory.build(:provider)
  end

  it { should be_valid }
end
