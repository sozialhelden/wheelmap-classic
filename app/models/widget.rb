class Widget < ActiveRecord::Base
  after_initialize :default_values

  belongs_to :user

  acts_as_api
  include Api::Widget

  attr_accessible :lat, :lon, :width, :height, :categories, :provider_id, :bounding_box

  GEO_FACTORY = RGeo::Cartesian.factory

  def providers
    user.providers
  end

  def lat=(value)
    self.center = GEO_FACTORY.point(lon || 0.0, value.to_f)
  end

  def lat
    center.y if center
  end

  def lon=(value)
    self.center = GEO_FACTORY.point(value.to_f, lat || 0.0)
  end

  def lon
    center.x if center
  end

  def bounding_box
    [south_east.y, north_west.y, south_east.x, north_west.x] if south_east && north_west
  end

  def bounding_box=(value)
    east, west, south, north = value.map(&:to_f)

    self.south_east = GEO_FACTORY.point(east, south)
    self.north_west = GEO_FACTORY.point(west, north)
  end

  def api_key
    user.save
    user.api_key
  end

  def default_values
    self.width ||= 500
    self.height ||= 400
    self.center ||= GEO_FACTORY.point(13.4231, 52.50521)
  end
end
