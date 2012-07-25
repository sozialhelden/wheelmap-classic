class AddParentIdToRegion < ActiveRecord::Migration
  def self.up
    add_column :regions, :parent_id, :integer
    add_column :regions, :admin_level, :integer
  end

  def self.down
    remove_column :regions, :parent_id
    remove_column :regions, :admin_level
  end
end
