class CreateOpenStreetMapQueuedNodes < ActiveRecord::Migration
  def self.up
    create_table :queued_nodes do |t|
      t.integer :id
      t.integer :user_id
      t.text :node_attributes

      t.timestamps
    end
  end

  def self.down
    drop_table :queued_nodes
  end
end
