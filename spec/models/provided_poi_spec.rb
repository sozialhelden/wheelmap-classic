require 'spec_helper'

describe ProvidedPoi do

  subject do
    FactoryGirl.build(:provided_poi)
  end

  it { is_expected.to be_valid }

  context :associations do
    it { is_expected.to belong_to :poi }
    it { is_expected.to belong_to :provider }
  end

  context :validations do
    it { is_expected.to validate_presence_of :poi_id }
    it { is_expected.to validate_presence_of :provider_id }

    before do
      subject.save!
    end

    it { is_expected.to validate_uniqueness_of(:poi_id).scoped_to(:provider_id)}
  end
end
