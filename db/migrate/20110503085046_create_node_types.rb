class CreateNodeTypes < ActiveRecord::Migration
  def self.up
    create_table :node_types do |t|
      t.integer :category_id
      t.string :identifier
      t.string :osm_key
      t.string :icon

      t.timestamps
    end
    
    add_index :node_types, [:identifier, :osm_key]
  end

  def self.down
    drop_table :node_types
  end
end