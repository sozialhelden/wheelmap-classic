FactoryGirl.define do
  factory :region do
    name 'Berlin'
    after(:build) do |region|
      region.grenze = 'POLYGON ((13.08831 52.33808, 13.76091 52.33808, 13.76091 52.67548, 13.08831 52.67548, 13.08831 52.33808))'
    end
  end
end
