Factory.define :admin do |admin|
  admin.email                  { Factory.next :email }
  admin.password               'e5AGwTANzqKW'
  admin.password_confirmation  'e5AGwTANzqKW'
  admin.confirmed_at { Time.now }
end