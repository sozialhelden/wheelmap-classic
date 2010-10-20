class AddWheelmapVisitorCredentials < ActiveRecord::Migration
  def self.up
    user = User.find_or_create_by_email('visitor@wheelmap.org')
    user.osm_username = 'wheelmap_visitor'
    user.osm_password = 'B1lderbuch'
    user.save!
  end

  def self.down
    user = User.find_by_email('visitor@wheelmap.org')
    user.osm_username = nil
    user.osm_password = nil
    user.save!
  end
end
