class PoiLocator
  require 'rubygems'
  require 'rgeo'

  attr_reader :regions, :index

  public

  def initialize(parent_id = nil)
    @parent_id = parent_id
    @factory = RGeo::Geos::Factory.create(wkb_parser: :geos)
    raise 'No geos support installt. Make sure libgeos is installed and rgeo gem has native bindings' if @factory.nil?
    @regions = load_regions(@parent_id)
    @index = generate_index
  end

  def run
    count_poi_in_region = 0
    count_poi_not_in_region = 0
    if @regions.empty?
      puts 'This region has no children regions, so we can skip.'
      return
    end

    lowest_id = Poi.lowest_id
    Poi.where(region_id: @parent_id).find_in_batches(start: lowest_id) do |batch|
      poi_regions = {}
      Poi.transaction do
        batch.each do |poi|
          # default: poi NOT matched in a region
          region_id = @parent_id

          # rounds coordinates of poi => corresponding index hash key
          idx = "#{poi.geom.x.to_i},#{poi.geom.y.to_i}"

          # index element with containing elements
          if !@index[idx].nil?

            # loop over all polygons and check them with "contains?" method
            @index[idx].each do |region|
              next unless region[:geometry].contains?(poi.geom)
              poi_regions[region[:id]] = [] if poi_regions[region[:id]].nil?
              poi_regions[region[:id]] << poi.osm_id
              # region_id = region[:id]
              count_poi_in_region += 1
            end

          else
            count_poi_not_in_region += 1
          end
        end
        # update table "pois" without callbacks
        poi_regions.delete(@parent_id) if poi_regions[@parent_id]
        poi_regions.each do |region_id, osm_ids|
          Poi.where(osm_id: osm_ids).update_all(region_id: region_id)
        end
      end
    end

    puts "Anzahl der POIs, die einer Region zugeordnet werden konnten: #{count_poi_in_region}"
    puts "Anzahl der POIs, die keiner Region zugeordnet werden konnten: #{count_poi_not_in_region}"

    @regions.each do |region|
      locator = PoiLocator.new(region[:id])
      locator.run
    end
  end

  private

  def region_ids
    @regions.map { |r| r[:id] }
  end

  # generates an index hash
  # value contains an array of regions intersecting the rectangle
  def generate_index
    index = {}

    # iterates over all regions
    @regions.each do |region|
      # bounding box of region
      bounding_box = ::RGeo::Cartesian::BoundingBox.new(@factory)
      bounding_box.add(region[:geometry])

      # iterates over x and y ranges of bounding box
      (Integer(bounding_box.min_x)..Integer(bounding_box.max_x)).each do |x|
        (Integer(bounding_box.min_y)..Integer(bounding_box.max_y)).each do |y|
          # fill index with elements of bounding box
          idx = "#{x},#{y}"

          index[idx] = [] if index[idx].nil?
          index[idx] << region
        end
      end
    end
    index
  end

  # load regions from database
  def load_regions(parent_id = nil)
    rr = []
    Region.parent_id(parent_id).each do |db_region|
      r = {}

      r[:geometry]   = db_region.grenze
      r[:id]         = db_region.id
      r[:name]       = db_region.name
      rr.push(r)
    end
    rr
  end
end
