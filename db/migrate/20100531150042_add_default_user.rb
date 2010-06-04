class AddDefaultUser < ActiveRecord::Migration
  def self.up
     User.create!(:email => 'visitor@wheelmap.org', :password => 'e5AGwTANzqKW', :password_confirmation => 'e5AGwTANzqKW')
  end

  def self.down
    User.find_by_email('visitor@wheelmap.org').destroy rescue nil
  end
end
