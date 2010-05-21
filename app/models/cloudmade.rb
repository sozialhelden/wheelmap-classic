
#= Description
#
# This is a wrapper class for easy Cloudemade API access
class Cloudmade
  include HTTParty
  
  cattr_accessor :api_key
  
  #http://geocoding.cloudmade.com/BC9A493B41014CAABB98F0471D759707/geocoding/v2/find.js?bbox=52.46882,13.38046,52.50518,13.46914&object_type=cafe
  base_uri 'http://geocoding.cloudmade.com/'
  
  def self.nodes(bbox="13.397643,52.523102,13.406419,52.526392")
    normalized_bbox = normalize_bbox(bbox)
    puts normalized_bbox
    begin
      result = get("/#{self.api_key.upcase}/geocoding/v2/find.js", :query => {:bbox => normalized_bbox, :object_type => poi, :results => 200})
      result['features'].map{|node_data| Node.new(node_data)}
    rescue Exception => e
      raise e
      # logger.error(e.message)
      return []
    end    
  end
  
  
  def self.poi
    %w{place_of_worship,theatre,arts_centre,cinema,nightclub,pharmacy,restaurant,fast_food,pub,bar,parking,cafe,subway,monorail,platform,station,courthouse,railway,railemergency_access_point,ferry_terminal,fire_station,halt,health,library,hospital,pharamcy,motorway,police,post_box,post_office}.join(',')
  end
  
  # in param is: Left,Bottom,right,Top
  # But cloudmade take params differntly:
  # Bottom,left,Top,Right
  def self.normalize_bbox(bbox)
    left,bottom,right,top = bbox.split(',')
    [bottom,left,top,right].join(',')
  end
  
end
