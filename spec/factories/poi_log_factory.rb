FactoryGirl.define do

	factory :poi_log do
		osm_id {FactoryGirl.generate :version}
	end
end
