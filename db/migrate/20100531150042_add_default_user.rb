class AddDefaultUser < ActiveRecord::Migration
  class User <ActiveRecord::Base;end
  def self.up
    User.create(:email => 'visitor@wheelmap.org', :password => 'NZ12noxUOR!')
  end

  def self.down
    User.find_by_email(:email => 'visitor@wheelmap.org').destroy
  end
end
