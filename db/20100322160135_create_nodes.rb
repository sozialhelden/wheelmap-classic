class CreateNodes < ActiveRecord::Migration
  def self.up
    create_table :nodes, :force => true do |t|
      t.string :title
      t.integer :osm_id
      t.float :lat
      t.float :lon
      t.string :wheelchair
      t.text :wheelchair_info
      t.string :source
      t.timestamps
    end
  end

  def self.down
    drop_table :nodes
  end
end