class ConvertRegionsToGeometry < ActiveRecord::Migration
  def self.up
    change_table :regions do |t|
      #use general geometry to support polygons and multipolygons
      t.change :grenze, :geometry
    end
  end

  def self.down
    change_table :regions do |t|
      t.change :grenze, :polygon
    end
  end
end
