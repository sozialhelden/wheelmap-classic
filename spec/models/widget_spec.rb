require 'spec_helper'

describe Widget do

  describe 'associations' do
    it { should belong_to :user }
  end

  context "widget center" do

    let(:widget) {
      widget = FactoryGirl.create(:widget, :lat => 50, :lon => 13)
    }

    it "is stored in spatial format" do
      expect(widget.center).to eq(RGeo::Cartesian.factory.point(13, 50))
    end

  end
end
