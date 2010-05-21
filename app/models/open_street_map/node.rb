class OpenStreetMap
  class Node
    attr_reader :data
    def initialize(data)
      @data = data
      @tags = extract_tags
      @data.delete('tag')
    end
    
    def lat
      data['lat'].to_f
    end
    
    def lon
      data['lon'].to_f
    end
    
    def tags
      @tags ||= extract_tags
    end
    
    def id
      @data['id']
    end
    
    def extract_tags
      tees = {}
      # this just happens, because a single k=>v pair is not wrapped in an array by default
      [data['tag']].flatten.each do |tag_hash|
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
    
    def name
      tags['name']
    end
    
    def type
      (tags['amenity'] || tags['station'] || tags['railway'] || tags['highway'] || '').gsub(/ |_/, '-')
    end
    
    def wheelchair
      tags['wheelchair'] || tags['hvv:barrier_free'] || 'unknown'
    end
    
    def method_missing(method)
      data[method.to_s]
    end
    
    def to_json(options={})
      {'id' => id,
       'lat' => lat,
       'lon' => lon,
       'name' => name,
       'wheelchair' => wheelchair,
       'tags' => tags.to_json,
       'type' => type}.to_json
    end
  end
end