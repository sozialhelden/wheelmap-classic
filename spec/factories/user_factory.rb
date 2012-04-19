Factory.sequence :email do |n|
  "visitor#{n}@wheelmap.org"
end

Factory.define :user do |user|
  user.email                  { Factory.next :email }
  # user.password               'e5AGwTANzqKW'
  # user.password_confirmation  'e5AGwTANzqKW'
  user.confirmed_at           { 10.days.ago }
end


Factory.define :authorized_user, :parent => :user do |user|
  user.oauth_token 'token'
  user.oauth_secret 'secret'
end
