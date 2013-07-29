FactoryGirl.define do

  sequence :email do |n|
    "visitor#{n}@wheelmap.org"
  end

  sequence :osm_id do |n|
    n
  end

  factory :user do |user|
    user.osm_id
    user.email
    user.terms true
    user.privacy_policy true
    # user.confirmed_at           { 10.days.ago }
  end

  factory :authorized_user, :parent => :user do |user|
    user.oauth_token 'token'
    user.oauth_secret 'secret'
  end
end


