class AddCreateCounterToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :create_counter, :integer, :default => 0, :null => false
    add_column :users, :edit_counter,   :integer, :default => 0, :null => false
  end

  def self.down
    remove_column :users, :create_counter
    remove_column :users, :edit_counter
  end
end
