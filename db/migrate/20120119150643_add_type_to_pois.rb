class AddTypeToPois < ActiveRecord::Migration
  def self.up
    add_column :pois, :type, :string, :default => 'Node'
  end

  def self.down
    remove_column :pois, :type
  end
end
