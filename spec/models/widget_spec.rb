require 'rails_helper'

describe Widget do
  describe 'associations' do
    it { is_expected.to belong_to :user }
  end

  describe 'Widget#center' do
    let(:widget) do
      FactoryGirl.create(:widget, lat: 50, lon: 13)
    end

    it 'is stored in spatial format' do
      expect(widget.center).to eq(RGeo::Cartesian.factory.point(13, 50))
    end

    it 'updates spatial format correctly' do
      widget.update_attributes(lat: 40, lon: 30)
      expect(widget.center).to eq(RGeo::Cartesian.factory.point(30, 40))
    end
  end

  describe 'Widget#providers' do
    let(:providers) do
      FactoryGirl.create_list(:provider, 3)
    end

    let(:user) do
      FactoryGirl.create(:user, providers: providers)
    end

    let(:widget) do
      FactoryGirl.create(:widget, lat: 50, lon: 13, user: user)
    end

    it 'presents the providers the user has assigned' do
      expect(widget.providers).to eq(providers)
    end
  end
end
