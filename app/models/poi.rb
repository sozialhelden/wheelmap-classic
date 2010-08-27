class Poi < ActiveRecord::Base

    # Tags sollen fuer die Datenbank serialisiert werden

    serialize :tags

    # osm_id ist der Primaerschluessel

    set_primary_key :osm_id

    # Spezielle Find-Methode fuer den Zugriff auf alle POIs in einer 
    # Bounding-Box. Fruehere Versionen von GeoRuby hatten dazu etwas
    # im MySQL-Adapter, aber das wird inzwischen nicht mehr supported,
    # daher bauen wir hier einen Standard-Contains-Query. Dieser Query
    # benutzt den raeumlichen Index und geht daher schnell (wenn man 
    # nicht gerade eine Bounding-Box fuer die ganze Welt uebergibt).

    def self.find_by_bbox(left, bottom, right, top)

        Poi.find(:all, 
            :conditions => "MBRContains(GeomFromText('POLYGON(( \
                #{left} #{bottom}, #{right} #{bottom}, \
                #{right} #{top}, #{left} #{top}, \
                #{left} #{bottom}))'), geom)")

    end

    def interesting?

        return false unless tags
        return true if
            tags.has_key?('amenity') or
            tags.has_key?('tourism') or
            tags.has_key?('natural') or
            tags.has_key?('sport') or
            tags.has_key?('leisure') or
            tags.has_key?('shop') or
            tags.has_key?('historic')
        return false
    end

    def clear_new_flag

        @new_record = false

    end
end
