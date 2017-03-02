# encoding: UTF-8
FactoryGirl.define do
  factory :way, class: Rosemary::Way do |way|
    way.name         'Irish time'
    way.lat          52.5073116
    way.lon          13.3901918
    way.version      1
    way.user         'testuser'
    way.uid          6669
    way.street       'Friedrichstraße'
    way.housenumber  207
    way.city         'Berlin'
    way.postcode     10_969
    way.type         'pub'
  end
end
