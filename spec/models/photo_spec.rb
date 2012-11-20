require 'spec_helper'

describe Photo do

  subject { Factory.build :photo }

  it "should create a valid photo" do
    subject.should be_valid
  end

  it "should extract date time at creation" do
    subject.should_receive(:extract_date_time)
    subject.save
  end

  context 'associations' do
    it { should belong_to :user }
    it { should belong_to :poi }
  end

end
