require 'spec_helper'

describe Widget do


  describe 'associations' do
    it { should belong_to :user }
  end


  describe "Widget#center" do

    let(:widget) {
      FactoryGirl.create(:widget, :lat => 50, :lon => 13)
    }

    it "is stored in spatial format" do
      expect(widget.center).to eq(RGeo::Cartesian.factory.point(13, 50))
    end

    it "updates spatial format correctly" do
      widget.update_attributes(lat: 40, lon: 30)
      expect(widget.center).to eq(RGeo::Cartesian.factory.point(30, 40))
    end

  end

  describe "Widget#providers" do
    let(:providers) {
      FactoryGirl.create_list(:provider, 3)
    }

    let(:user) {
      FactoryGirl.create(:user, :providers => providers)
    }

    let(:widget) {
      FactoryGirl.create(:widget, :lat => 50, :lon => 13, :user => user)
    }

    it "presents the providers the user has assigned" do
      expect(widget.providers).to eq(providers)
    end
  end
end
