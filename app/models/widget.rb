class Widget < ActiveRecord::Base
  belongs_to :user

  acts_as_api
  include Api::Widget

  attr_accessible :lat, :lon, :width, :height, :categories, :provider_id, :bounding_box

  GEO_FACTORY = RGeo::Cartesian.factory

  def providers
    self.user.providers
  end

  def lat=(value)
    self.center = GEO_FACTORY.point(lon || 0.0, value.to_f)
  end

  def lat
    self.center.y if self.center
  end

  def lon=(value)
    self.center = GEO_FACTORY.point(value.to_f, lat || 0.0)
  end

  def lon
    self.center.x if self.center
  end

  def bounding_box
    [self.south_east.y, self.north_west.y, self.south_east.x, self.north_west.x] if self.south_east && self.north_west
  end

  def bounding_box=(value)
    east, west, south, north = value.map(&:to_f)

    self.south_east = GEO_FACTORY.point(east, south)
    self.north_west = GEO_FACTORY.point(west, north)
  end

  def api_key
    self.user.save
    self.user.api_key
  end
end
