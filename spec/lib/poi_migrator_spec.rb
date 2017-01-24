require 'rails_helper'
require 'poi_migration'

describe "PoiMigration" do

  describe "migrates pois that are tagged as wheelchair_toilet" do
    context "all toilet values are equal" do
      let(:poi) { FactoryGirl.build(:poi, tags: {"toilets:wheelchair" => "yes", "wheelchair_toilet" => "yes"}, toilet: true) }

      specify "wheelchair_toilet tag has been deleted" do
        resulting_poi = PoiMigration.convert(poi)
        expect(resulting_poi.tags["wheelchair_toilet"]).to eq(nil)
      end
    end
  end
end
