require 'spec_helper'

describe PhoneValidator do
  let(:poi)       { FactoryGirl.build(:poi) }
  let(:validator) { PhoneValidator.new(attributes: [:phone]) }

  context 'validation of unchanged phone number' do
    it 'passes' do
      validator.validate_each(poi, 'phone', poi.phone)
      expect(poi.errors.count).to eq 0
    end
  end

  context 'validation of changed phone number' do
    it 'allows blank phone number' do
      validator.validate_each(poi, 'phone', '')
      expect(poi.errors.count).to eq 0
    end

    it 'fails on malformed number' do
      validator.validate_each(poi, 'phone', '+4942343243242')
      expect(poi.errors.count).to eq 1
    end

    it 'passes on correctly formatted number' do
      validator.validate_each(poi, 'phone', '+49 42343243242')
      expect(poi.errors.count).to eq 1
    end
  end
end
