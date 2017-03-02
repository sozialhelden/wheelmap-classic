FactoryGirl.define do
  factory :widget do |w|
    w.height 480
    w.width  360
    lat 52.0
    lon 13.4
    w.categories false
  end
end
