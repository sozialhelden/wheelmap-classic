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

  factory :authorized_user, parent: :user do
    oauth_token 'token'
    oauth_secret 'secret'
  end

  factory :wheelmap_visitor, class: User do
    osm_username 'wheelmap_visitor'
    first_name 'Wheelmap'
    last_name 'Visitor'
    email 'visitor@wheelmap.org'
    terms true
    privacy_policy true
    oauth_token 'token'
    oauth_secret 'secret'
    anonymous true
  end
end
