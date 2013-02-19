Factory.sequence :email do |n|
  "visitor#{n}@wheelmap.org"
end

Factory.sequence :osm_id do |n|
  n
end

Factory.define :user do |user|
  user.osm_id { Factory.next(:osm_id)}
  user.email  { Factory.next(:email)}
  user.terms true
  user.privacy_policy true
  # user.confirmed_at           { 10.days.ago }
end


Factory.define :authorized_user, :parent => :user do |user|
  user.oauth_token 'token'
  user.oauth_secret 'secret'
end
