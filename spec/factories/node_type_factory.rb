FactoryGirl.define do
  factory :node_type do
    identifier 'bar'
    icon '/images/icons/glass.png'
    association :category
    osm_key 'amenity'
    osm_value 'bar'
  end
end