FactoryGirl.define do
  factory :provided_poi do |p|
    p.association :poi
    p.association :provider
    p.wheelchair 'yes'
    p.url 'http://www.arzt-auskunft.de/Arzt/Schmiedeberg/Zahnarzt/Weber/1859093'
  end
end
