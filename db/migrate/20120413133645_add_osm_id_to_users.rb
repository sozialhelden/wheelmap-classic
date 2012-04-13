class AddOsmIdToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :osm_id, :integer
  end

  def self.down
    remove_column :users, :osm_id
  end
end
