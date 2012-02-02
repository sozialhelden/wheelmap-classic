class Poi < ActiveRecord::Base; end

class RemoveTypeFromPois < ActiveRecord::Migration
  def self.up
    Poi.update_all('osm_id = osm_id * -1', "type = 'Way'")
    remove_column :pois, :type
  end

  def self.down
    add_column :pois, :type, :string, :default => 'Node'
    Poi.update_all('type = "Way"', "osm_id < 0")
    Poi.update_all('osm_id = osm_id * -1', "type = 'Way'")
  end
end
