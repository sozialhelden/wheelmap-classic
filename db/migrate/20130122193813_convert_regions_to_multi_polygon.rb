class ConvertRegionsToMultiPolygon < ActiveRecord::Migration
  def self.up
    change_table :regions do |t|
      t.change :grenze, :multipolygon
    end
  end

  def self.down
    change_table :regions do |t|
      t.change :grenze, :polygon
    end
  end
end
