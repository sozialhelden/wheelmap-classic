class AddGeojsonToPois < ActiveRecord::Migration
  def self.up
    add_column :pois, :geoj, :text
  end

  def self.down
    remove_column :pois, :geoj
  end
end
