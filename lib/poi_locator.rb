class PoiLocator

  require 'rubygems'
  require 'rgeo'

  attr_reader :regions, :index

  public

  def initialize
    @factory = RGeo::Cartesian.factory
    @regions = load_regions
    @index = generate_index
  end

  def run
    count_poi_in_region = 0
    count_poi_not_in_region = 0
    poi_size = Poi.count(:conditions => {:region_id => nil})
    # iterates over all POIs with undefined region
    lowest_id = Poi.lowest_id
    Poi.including_category.find_in_batches(:conditions => {:region_id => nil}, :start => lowest_id) do |batch|
      Poi.transaction do
        batch.each do |poi|

          # default: poi NOT matched in a region
          region_id = 0

          # rounds coordinates of poi => corresponding index hash key
          idx = "#{poi.geom.x.to_i},#{poi.geom.y.to_i}"

          # index element with containing elements
          if !@index[idx].nil?

            # loop over all polygons and check them with "contains?" method
            @index[idx].each do |region|
              point = @factory.parse_wkb(poi.geom.as_wkb)
              if region[:geometry].contains?(point)
                region_id = region[:id]
                count_poi_in_region += 1
              end
            end

          else
            count_poi_not_in_region += 1
          end

          # update table "pois"
          poi.update_attribute(:region_id, region_id)
        end
      end
    end

    puts "Anzahl der POIs, die einer Region zugeordnet werden konnten: #{count_poi_in_region}"
    puts "Anzahl der POIs, die keiner Region zugeordnet werden konnten: #{count_poi_not_in_region}"
  end

  private

  # generates an index hash
  # value contains an array of regions intersecting the rectangle
  def generate_index
    index = Hash.new()

    # iterates over all regions
    @regions.each do |region|

      # bounding box of region
      bounding_box = ::RGeo::Cartesian::BoundingBox.new(@factory)
      bounding_box.add(region[:geometry])

      # iterates over x and y ranges of bounding box
      for x in Integer(bounding_box.min_x)..Integer(bounding_box.max_x)
        for y in Integer(bounding_box.min_y)..Integer(bounding_box.max_y)

          # fill index with elements of bounding box
          idx = "#{x},#{y}"

          if index[idx].nil?
            index[idx] = Array.new()
          end
          index[idx] << region
        end
      end
    end
    return index
  end

  # load regions from database
  def load_regions
    rr = Array.new
    Region.all.each do |db_region|
      r = Hash.new

      r[:geometry]   = @factory.parse_wkb(db_region.grenze.as_wkb)
      r[:id]         = db_region.id
      r[:name]       = db_region.name
      rr.push(r)
    end
    return rr
  end
end
