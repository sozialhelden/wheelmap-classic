class AddOsmUsernameAndOsmPasswordToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :osm_username, :string
    add_column :users, :osm_password, :string
  end

  def self.down
    remove_column :users, :osm_password
    remove_column :users, :osm_username
  end
end
