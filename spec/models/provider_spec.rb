require 'spec_helper'

describe Provider do

  subject do
    FactoryGirl.build(:provider)
  end

  it { should be_valid }
end
