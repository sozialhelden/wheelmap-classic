require 'spec_helper'

describe Photo do

  subject { FactoryGirl.build :photo }

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

  context 'validations' do
    it { should validate_presence_of :poi_id }
    it { should validate_presence_of :user_id }
  end

end
