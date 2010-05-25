
#= Description
#
# This is a wrapper class for easy Open Street Map API access
module OpenStreetMapExtended
  include HTTParty
  
  API_VERSION = "0.6".freeze
  #http://osmxapi.hypercube.telascience.org/api/0.6/node[bbox=13.396935,52.521059,13.414465,52.524923][amenity|railway|highway|ferry]
  #http://osmxapi.hypercube.telascience.org/api/0.6/node%5Bbbox%3D13.396935%2C52.521059%2C13.414465%2C52.524923%5D%5Bamenity%7Crailway%7Chighway%7Cferry%5D
  base_uri "http://osmxapi.hypercube.telascience.org/api/#{API_VERSION}"
  format :xml
  
  def self.nodes(bbox="13.397643,52.523102,13.406419,52.526392", filter=[:amenity,:railway,:highway,:ferry])
    begin
      result = get(normalize_params('/node',"[bbox=#{bbox}][#{filter.join('|')}]"))
      result['osm']['node'].map{|node_data| Node.new(node_data)}.select{|n| n.valid_type?}
    rescue Exception => e
      raise e
      # logger.error(e.message)
      return []
    end
  end
  
  def self.normalize_params(path, params)
    "#{path}#{CGI::escape(params)}"
  end
  
end