# Defines a new sequence

FactoryGirl.define do
  sequence :name do |n|
    "a nice name #{n}"
  end

  sequence :version do |n|
    n
  end

  factory :poi do
    osm_id { FactoryGirl.generate :version }
    lat 52.0
    lon 13.4
    version
    tags { Hash.new }
    name 'name'
    type 'bar'
    wheelchair 'yes'
    wheelchair_description 'Yes, we have a ramp.'
    association :node_type
    association :region
  end
end
