class Widget < ActiveRecord::Base
  belongs_to :user

  acts_as_api
  include Api::Widget

  attr_accessible :lat, :lon, :width, :height, :categories, :provider_id

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

  def api_key
    self.user.save
    self.user.api_key
  end
end
