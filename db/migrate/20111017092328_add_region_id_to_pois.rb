class AddRegionIdToPois < ActiveRecord::Migration
  def self.up
    add_column :pois, :region_id, :integer
    add_index :pois, :region_id
  end

  def self.down
    remove_column :pois, :region_id
  end
end
