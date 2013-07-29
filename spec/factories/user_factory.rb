FactoryGirl.define do

  sequence :email do |n|
    "visitor#{n}@wheelmap.org"
  end

  sequence :osm_id do |n|
    n
  end

  factory :user do
    osm_id
    email
    terms true
    privacy_policy true
    # confirmed_at           { 10.days.ago }
  end

  factory :authorized_user, :parent => :user do
    oauth_token 'token'
    oauth_secret 'secret'
  end
end


