class AddOsmUsernameToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :osm_username, :string
  end

  def self.down
    remove_column :users, :osm_username
  end
end
