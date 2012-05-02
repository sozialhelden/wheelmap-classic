class CreateProvidedPois < ActiveRecord::Migration
  def self.up
    create_table :provided_pois do |t|
      t.integer :poi_id,      :null => false
      t.integer :provider_id, :null => false

      t.string :wheelchair
      t.string :url
      t.timestamps
    end

    add_index :provided_pois, [ :provider_id, :poi_id ], :unique => true
  end

  def self.down
    drop_table :provided_pois
  end
end
