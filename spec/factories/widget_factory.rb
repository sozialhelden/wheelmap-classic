FactoryGirl.define do

  factory :widget do |w|
    w.height 480
    w.width  360
    lat 52.0
    lon 13.4 
    #w.provider {|w| w.association(:provider)}
    w.categories false
  end

end
