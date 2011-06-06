Factory.sequence :email do |n|
  "visitor#{n}@wheelmap.org"
end



Factory.define :user do |user|
  user.email                  { Factory.next :email }
  user.password               'e5AGwTANzqKW'
  user.password_confirmation  'e5AGwTANzqKW'
end