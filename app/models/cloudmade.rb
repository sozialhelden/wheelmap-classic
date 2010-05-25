#= Description
#
# This is a wrapper class for easy Cloudemade API access
class Cloudmade
  include HTTParty
  
  cattr_accessor :api_key
  
  #http://geocoding.cloudmade.com/<API-KEY>/geocoding/v2/find.geojs?bbox=52.46882,13.38046,52.50518,13.46914&object_type=cafe
  base_uri 'http://geocoding.cloudmade.com/'

  @@api_key = CloudMadeConfig.api_key if defined?(CloudMadeConfig)
  
  
  def self.nodes(bbox="13.397643,52.523102,13.406419,52.526392", object_types="")
    normalized_bbox = normalize_bbox(bbox)

    types = object_types.blank? ? all_points_of_interest : object_types.split.map(&:underscore).join(',')
    # raise types.inspect
    begin
      # RAILS_DEFAULT_LOGGER.warn("#{self.base_uri}/#{self.api_key.upcase}/geocoding/v2/find.js?bbox=#{normalized_bbox}&object_type=#{types}&results=100")
      result = get("/#{self.api_key.upcase}/geocoding/v2/find.js", :query => {:bbox => normalized_bbox, :object_type => types, :results => 500})
      result['features'].map{|node_data| Node.new(node_data)}
    rescue Exception => e
      raise e
      # logger.error(e.message)
      return []
    end    
  end
  
  private

  def self.all_points_of_interest
    [
      ['halt', 'railway', 'station', 'platform', 'monorail', 'subway', 'light_rail', 'tram_stop', 'bus_stop', 'bus_station', 'ferry_terminal'], # public transport
      ['fast_food', 'restaurant', 'biergarten', 'cafe', 'bar', 'pub'], #food
      ['cinema', 'arts_centre', 'nightclub', 'sauna', 'theatre', 'shop'], # leisure
      ['bank', 'atm', 'bureau_de_change'], #money
      ['post_box', 'post_office'], #post
      ['embassy', 'courthouse', 'police', 'fire_station', 'public_building', 'register_office', 'townhall', 'community_centre'], # embassy & governement
      ['hospital', 'pharmacy','health'], # medicine
      ['fuel', 'car_rental', 'car_sharing', 'parking', 'bicycle_parking', 'bicycle_rental'], # car & bike
      ['kindergarten', 'school', 'college', 'university', 'library'], # children & education
      ['marketplace', 'telephone', 'toilets', 'grave_yard', 'place_of_worship'] # misc
    ].flatten.compact.sort.join(',')
  end
  
  # in param is: Left,Bottom,right,Top
  # But cloudmade take params differntly:
  # Bottom,left,Top,Right
  def self.normalize_bbox(bbox)
    left,bottom,right,top = bbox.split(',')
    [bottom,left,top,right].join(',')
  end
  
end
