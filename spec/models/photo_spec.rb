require 'rails_helper'

describe Photo do
  subject { FactoryGirl.build :photo }

  it 'should create a valid photo' do
    expect(subject).to be_valid
  end

  it 'should extract date time at creation' do
    expect(subject).to receive(:extract_date_time)
    subject.save
  end

  context 'associations' do
    it { is_expected.to belong_to :user }
    it { is_expected.to belong_to :poi }
  end

  context 'validations' do
    it { is_expected.to validate_presence_of :poi_id }
    it { is_expected.to validate_presence_of :user_id }
  end
end
