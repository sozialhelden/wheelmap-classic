class Bbox
  MIN_LAT = -90
  MAX_LAT = 90
  MIN_LON = -180
  MAX_LON = 180

  attr_reader :box

  def self.max
    new(MIN_LON, MIN_LAT, MAX_LON, MAX_LAT)
  end

  def initialize(west, south, east, north)
    @factory = RGeo::Cartesian.factory
    @box = RGeo::Cartesian::BoundingBox.new(@factory)
    south_west = @factory.point(west, south)
    north_east = @factory.point(east, north)
    @box.add(south_west)
    @box.add(north_east)
  end

  def center
    @factory.point(lon, lat)
  end

  def lat
    @box.center_y
  end

  def lon
    @box.center_x
  end

  def west
    @box.min_x
  end

  def east
    @box.max_x
  end

  def north
    @box.max_y
  end

  def south
    @box.min_y
  end

  def widen_by_meters(meters = 100)
    south_west = @factory.point(west - degrees_per_meter_longitude(meters / 2), south - degrees_per_meter_latitude(meters / 2))
    north_east = @factory.point(east + degrees_per_meter_longitude(meters / 2), north + degrees_per_meter_latitude(meters / 2))
    @box.add(south_west)
    @box.add(north_east)
  end

  def widen_by_percent(percent = 10)
    east_to_west = (east - west).abs
    north_to_south = (north - south).abs

    lat_to_add = east_to_west * percent / 100.0 / 2.0
    lon_to_add = north_to_south * percent / 100.0 / 2.0
    w = [(west - lon_to_add), MIN_LON].max
    s = [(south - lat_to_add), MIN_LAT].max
    e = [(east + lon_to_add),  MAX_LON].min
    n = [(north + lat_to_add), MAX_LAT].min
    south_west = @factory.point(w, s)
    north_east = @factory.point(e, n)
    @box.add(south_west)
    @box.add(north_east)
  end

  def within?(other_box)
    other_box.box.contains?(@box, ignore_z: true, ignore_m: true) && !all_sides_same?(other_box)
  end

  private

  def all_sides_same?(other_box)
    west == other_box.west &&
      south == other_box.south &&
      east  == other_box.east &&
      north == other_box.north
  end

  def meters_per_degrees_latitude
    111_132.92 - (559.82 * Math.cos(2 * lat)) + (1.175 * Math.cos(4 * lat))
  end

  def meters_per_degrees_longitude
    111_412.84 * Math.cos(lat) - 93.5 * Math.cos(3 * lat)
  end

  def degrees_per_meter_latitude(meters = 1)
    meters / meters_per_degrees_latitude
  end

  def degrees_per_meter_longitude(meters = 1)
    meters / meters_per_degrees_longitude
  end
end
