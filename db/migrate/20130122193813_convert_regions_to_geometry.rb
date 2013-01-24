class ConvertRegionsToGeometry < ActiveRecord::Migration
  def self.up
    change_table :regions do |t|
      #use general geometry to support polygons and multipolygons
      t.change :grenze, :geometry, :null => false
    end
  end

  def self.down
    change_table :regions do |t|
      t.change :grenze, :polygon, :null => false
    end
  end
end
