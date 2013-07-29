require 'spec_helper'

describe ProvidedPoi do

  subject do
    FactoryGirl.build(:provided_poi)
  end

  it { should be_valid }

  context :associations do
    it { should belong_to :poi }
    it { should belong_to :provider }
  end

  context :validations do
    it { should validate_presence_of :poi_id }
    it { should validate_presence_of :provider_id }

    before do
      subject.save!
    end

    it { should validate_uniqueness_of(:poi_id).scoped_to(:provider_id)}
  end
end
