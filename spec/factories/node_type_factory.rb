FactoryGirl.define do
  factory :node_type do |f|
    f.identifier 'bar'
    f.icon '/images/icons/glass.png'
    f.association :category
    f.osm_key 'amenity'
    f.osm_value 'bar'
  end
end