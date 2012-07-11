class AddSecondaryOsmKeyValuePairToNodeTypes < ActiveRecord::Migration
  def self.up
    add_column :node_types, :alt_osm_key, :string
    add_column :node_types, :alt_osm_value, :string
  end

  def self.down
    remove_column :node_types, :alt_osm_key
    remove_column :node_types, :alt_osm_value
  end
end
