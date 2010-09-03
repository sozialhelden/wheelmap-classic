class Poi < ActiveRecord::Base

    # Tags sollen fuer die Datenbank serialisiert werden

    serialize :tags
    
    attr_reader :lat, :lon

    # osm_id ist der Primaerschluessel

    set_primary_key :osm_id
    
    named_scope :limit, lambda {|limit|{ :limit => limit}}
    
    validate :relevant?
    
    # Spezielle Find-Methode fuer den Zugriff auf alle POIs in einer 
    # Bounding-Box. Fruehere Versionen von GeoRuby hatten dazu etwas
    # im MySQL-Adapter, aber das wird inzwischen nicht mehr supported,
    # daher bauen wir hier einen Standard-Contains-Query. Dieser Query
    # benutzt den raeumlichen Index und geht daher schnell (wenn man 
    # nicht gerade eine Bounding-Box fuer die ganze Welt uebergibt).
    
    named_scope :within_bbox, lambda {|left, bottom, right, top|{
      :conditions => "MBRContains(GeomFromText('POLYGON(( \
                      #{left} #{bottom}, #{right} #{bottom}, \
                      #{right} #{top}, #{left} #{top}, \
                      #{left} #{bottom}))'), pois.geom)" } }


    def self.find_by_bbox(left, bottom, right, top)

        Poi.find(:all, 
            :conditions => "MBRContains(GeomFromText('POLYGON((
                #{left} #{bottom}, #{right} #{bottom},
                #{right} #{top}, #{left} #{top},
                #{left} #{bottom}))'), pois.geom)")

    end
    
    def lat
      self.geom.lat if self.geom
    end
    
    def lon
      self.geom.lng if self.geom
    end
    
    def attributes
      super.reverse_merge!(
      :lat => lat,
      :lon => lon,
      :name => name,
      :type => type,
      :category => category,
      :wheelchair => wheelchair
      )
    end
    
    def id
      osm_id
    end
      
    
    def type
      tags['amenity'] || tags['station'] || tags['railway'] || tags['highway'] || tags['leisure'] || tags['shop'] || tags['tourism'] || tags['historic'] || tags['shop']
    end
    
    def category
      Amenities.each do |cat, amenities|
        return cat.to_s if amenities.include?(self.type)
      end
      nil
    end
    
    
    def name
      tags['name']
    end
    
    def wheelchair
      tags['wheelchair'] ||= 'unknown'
    end
        
    def to_json(options={})
      {'id' => id,
       'lat' => lat,
       'lon' => lon,
       'name' => name,
       'wheelchair' => wheelchair,
       'tags' => tags.reverse_merge!('wheelchair' => wheelchair).reject{|k,v| v.blank?},
       'type' => type,
       'category' => self.category}.to_json
    end

    def to_geojson(options={})
      { :type => 'Feature',
        :geometry => { :type => 'Point', :coordinates  => [self.lon, self.lat]
        },
        :properties => tags.reverse_merge!('wheelchair' => wheelchair, 'type' => type, 'category' => category).reject{|k,v| v.blank?}
      }
    end

    def relevant?
      if !tags.blank? &&
        ( tags.has_key?('amenity') ||
        tags.has_key?('shop') ||
        tags.has_key?('tourism') ||
        tags.has_key?('natural') ||
        tags.has_key?('sport') ||
        tags.has_key?('leisure') ||
        tags.has_key?('historic'))
        # valid!
      else
        errors.add(:tags, "needs to have at least one of the following keys: amenity, tourism natural sport leisure shop historic")
      end
    end

    def existing_record!
        @new_record = false
    end
end
