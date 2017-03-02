FactoryGirl.define do
  factory :node_type do
    identifier 'bar'
    icon '/assets/icons/glass.png'
    association :category
    osm_key 'amenity'
    osm_value 'bar'
  end
end
