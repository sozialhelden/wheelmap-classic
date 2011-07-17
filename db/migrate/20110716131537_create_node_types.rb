class CreateNodeTypes < ActiveRecord::Migration
  def self.up
    create_table :node_types, :force => true do |t|
      t.integer :category_id

      t.string :identifier
      t.string :osm_key
      t.string :osm_value
      t.string :icon

      t.timestamps
    end
    
    add_index :node_types, [:id, :category_id]
    add_index :node_types, [:osm_key, :osm_value]
  end

  def self.down
    drop_table :node_types
  end
end
