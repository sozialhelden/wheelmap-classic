class AddParentIdToRegion < ActiveRecord::Migration
  def self.up
    add_column :regions, :parent_id,    :bigint
    add_column :regions, :admin_level,  :integer
    add_column :regions, :lft,          :integer
    add_column :regions, :rgt,          :integer
    add_column :regions, :depth,        :integer

  end

  def self.down
    remove_column :regions, :parent_id
    remove_column :regions, :admin_level
    remove_column :regions, :rgt
    remove_column :regions, :lft
    remove_column :regions, :depth
  end
end
