require 'builder'
module OpenStreetMap
  class Node
    include Validatable
    attr_accessor :lat, :lon, :user, :uid, :changeset, :uid, :id, :timestamp, :visible, :name, :version, :tags, :type, :wheelchair, :wheelchair_description, :street, :postcode, :country, :housenumber, :city, :url, :phone
    attr_accessor_with_default :changed, false


    validates_presence_of :name, :wheelchair, :wheelchair_description, :type
    # validates_numericality_of :lat, :lon
    # validates_format_of :url, :with => /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/ix, :allow_blank => true
    

    def initialize(data)
      @lat = data['lat'].to_f
      @lon = data['lon'].to_f
      @tags = extract_tags(data)
      @user = data['user']
      @uid = data['uid']
      @id = data['id']
      @name = data['name']
      @changeset = data['changeset']
      @version = data['version'].to_i
      @timestamp = Time.parse(data['timestamp']) rescue Time.now
      @type = (data['type'] || tags['amenity'] || tags['station'] || tags['railway'] || tags['highway'] || '').gsub(/ |_/, '-')
      @wheelchair = (data['wheelchair'] || tags['wheelchair'] || tags['hvv:barrier_free'] || 'unknown')
      @wheelchair_description = (data['wheelchair_description'] || tags['wheelchair_description'])
      @name = data['name'] || tags['name']
      @street       = tags['addr:street'] = data['street'] if data['street']
      @housenumber  = tags['addr:housenumber'] = data['housenumber'] if data['housenumber']
      @zip_code     = tags['addr:postcode'] = data['postcode'] if data['postcode']
      @city         = tags['addr:city'] = data['city'] if data['city']
      @phone        = tags['contact:phone'] = data['phone'] if data['phone']
      @url          = tags['contact:website'] = data['url'] if data['url']
      
    end
    
    def valid_states
      ['yes', 'no', 'limited']
    end
    
    def extract_tags(data)
      tees = {}
      # this just happens, because a single k=>v pair is not wrapped in an array by default
      [data['tag']].flatten.compact.each do |tag_hash|
        key = tag_hash['k']
        value = tag_hash['v']
        tees[key] = value
      end
      normalize_tags(tees)
    end
    
    def normalize_tags(tags)
      returning tags do |tags|
        tags['station'] = 'subway' if tags['hvv:psv_type'] == 'U'
        tags['station'] = 'light-rail' if tags['hvv:psv_type'] == 'S'
        tags['amenity'] = 'ferry-terminal' if tags['ferry'] == 'halt'
      end
    end
    
    def valid_type?
      tags['amenity'] or
      tags['railway'] == 'station' or
      tags['railway'] == 'tram_stop' or
      tags['highway'] == 'bus_stop'
    end
    
    def set_wheelchair(status, changeset_id)
      if valid_states.include?(status)
        self.wheelchair = status
        @tags['wheelchair'] = status
        @tags['wheelchair:source'] = "http://wheelmap.org"
        self.changeset = changeset_id
        self.timestamp = Time.now
        self.user = 'wheelmap_visitor'
      end
    end
    
    def to_json(options={})
      {'id' => id,
       'lat' => lat,
       'lon' => lon,
       'name' => name,
       'wheelchair' => wheelchair,
       'tags' => tags,
       'type' => type}.to_json
    end
    
    # <node id='78252182' lat='52.5220063' lon='13.4006779' version='4' changeset='2883406' user='gkai' uid='74224' visible='true' timestamp='2009-10-18T14:16:48Z'>
    #   <tag k='amenity' v='post_box'/>
    #   <tag k='collection_times' v='Mo-Fr 15:00,17:00,21:15; Sa 16:00; Su 10:45,21:15'/>
    #   <tag k='name' v='Burgstraße 29'/>
    #   <tag k='operator' v='Deutsche Post AG'/>
    #   <tag k='postal_code' v='10178'/>
    #   <tag k='source' v='survey'/>
    #   <tag k='wheelchair' v='limited'/>
    # </node> 
    def to_xml(options={})
      xml = Builder::XmlMarkup.new()
      xml.osm do
        xml.node(:id => id, :lat => lat, :lon => lon, :version => version, :changeset => changeset, :user => user, :uid => uid, :visible => visible, :timestamp => timestamp) do
          tags.each do |t|
            xml.tag(:k => t.first, :v => t.last)
          end
        end
      end
    end
  end
end