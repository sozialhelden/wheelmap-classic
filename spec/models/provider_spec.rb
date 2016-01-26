require 'spec_helper'

describe Provider do

  subject do
    FactoryGirl.build(:provider)
  end

  it { is_expected.to be_valid }
end
