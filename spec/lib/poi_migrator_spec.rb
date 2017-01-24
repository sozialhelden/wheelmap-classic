require 'rails_helper'
require 'poi_migration'

describe "PoiMigration" do

  describe "migrates pois that are tagged as wheelchair_toilet" do
    subject(:resulting_poi) { PoiMigration.convert(poi) }
    context "all toilet values are equal" do

      let(:poi) { FactoryGirl.build(:poi, tags: {"toilets:wheelchair" => "yes", "wheelchair_toilet" => "yes"}, toilet: true) }

      specify "wheelchair_toilet tag has been deleted" do
        expect(resulting_poi.tags["wheelchair_toilet"]).to eq(nil)
      end
    end

    context "wheelchair_toilet has different value than toilet & toilets:wheelchair" do
      let(:poi) { FactoryGirl.build(:poi, tags: {"toilets:wheelchair" => "yes", "wheelchair_toilet" => "no"}, toilet: true) }

      specify "wheelchair_toilet tag has been deleted" do
        expect(resulting_poi.tags["wheelchair_toilet"]).to eq(nil)
      end
    end
  
    context "toilets:wheelchair has different value than toilet & wheelchair_toilet" do
      let(:poi) { FactoryGirl.build(:poi, tags: {"toilets:wheelchair" => "no", "wheelchair_toilet" => "yes"}, toilet: true) }

      specify "wheelchair_toilet tag has been deleted" do
        expect(resulting_poi.tags["wheelchair_toilet"]).to eq(nil)
      end
      
      specify "toilets:wheelchair gets value from wheelchair_toilet" do
        expect(resulting_poi.tags["toilets:wheelchair"]).to eq("yes")
      end
    end
  end
end
