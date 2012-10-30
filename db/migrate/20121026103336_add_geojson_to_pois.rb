class AddGeojsonToPois < ActiveRecord::Migration
  def self.up
    add_column :pois, :geoj, :text
    add_column :pois, :geoj_dirty, :boolean, :default => true
  end

  def self.down
    remove_column :pois, :geoj
    remove_column :pois, :geoj_dirty
  end
end
