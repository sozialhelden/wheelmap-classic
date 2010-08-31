class CreatePois < ActiveRecord::Migration

  def self.up

      # MyISAM ist schneller, und wir brauchen keine Transaktionen
      create_table :pois, :options => "ENGINE=MyISAM", :force => true, :id => false do |t|

        # OSM-ID
        t.integer :osm_id, :null => false, :key => false

        # OSM-Version
        t.integer :version, :null => false

        # Tags (serialisiert)
        t.text :tags, :null => false

        # Laenge und Breite
        # (Laengengrad kann mit poi.geom.x, Breitengrad mit poi.geom.y
        # abgefragt werden)
        t.point :geom, :null => false

      end

      # raeumlicher Index fuer lat/lon
      add_index :pois, :geom, :spatial => true

      # normaler Index auf der OSM-ID (ohne Version - wir erlauben eh 
      # immer nur eine Version von jedem; speichern die Version aber
      # trotzdem, so koennen wir herausfinden, ob ein Node, den wir von
      # der API laden, auch unseren Daten entspricht)
      add_index :pois, :osm_id, :unique => true
  end

  def self.down
      drop_table :pois
  end
end
