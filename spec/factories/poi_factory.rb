# Defines a new sequence

FactoryGirl.define do

  sequence :name do |n|
    "a nice name #{n}"
  end

  sequence :version do |n|
    n
  end

  factory :poi do |p|
    p.osm_id {FactoryGirl.generate :version}
    p.lat 52.0
    p.lon 13.4
    p.version
    p.tags { Hash.new()}
    p.name 'name'
    p.type 'bar'
    p.wheelchair 'yes'
    p.association :node_type
    p.association :region
  end
end
