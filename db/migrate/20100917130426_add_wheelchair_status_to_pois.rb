class AddWheelchairStatusToPois < ActiveRecord::Migration
  def self.up
    change_table :pois do |t|
      t.integer :status, :limit => 3, :null => false, :default => 8
      t.timestamps
    end

    add_index  :pois, :status
    
  end

  def self.down
    remove_column :pois, :status
    remove_column :pois, :updated_at
    remove_column :pois, :created_at
  end
end
