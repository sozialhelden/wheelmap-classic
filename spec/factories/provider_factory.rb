FactoryGirl.define do
  factory :provider do
    sequence(:name) { |n| "Provider_#{n}" }
  end
end
