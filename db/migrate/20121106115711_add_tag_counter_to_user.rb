class AddTagCounterToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :tag_counter, :integer, :default => 0, :null => false
  end

  def self.down
    remove_column :users, :tag_counter
  end
end
