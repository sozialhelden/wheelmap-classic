# encoding: UTF-8
FactoryGirl.define do
  factory :node, class: Rosemary::Node do |node|
    node.name         'Irish time'
    node.lat          52.5073116
    node.lon          13.3901918
    node.version      1
    node.user         'testuser'
    node.uid          6669
    node.street       'Friedrichstraße'
    node.housenumber  207
    node.city         'Berlin'
    node.postcode     10_969
    node.type         'pub'
  end
end
