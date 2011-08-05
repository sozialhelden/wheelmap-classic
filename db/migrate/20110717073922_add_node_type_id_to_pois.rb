class AddNodeTypeIdToPois < ActiveRecord::Migration
  def self.up
    add_column :pois, :node_type_id, :integer rescue nil
    add_index  :pois, [:node_type_id, :osm_id] rescue nil
  end

  def self.down
    remove_column :pois, :node_type_id
    remove_index  :pois, [:node_type_id, :osm_id]
  end
end
