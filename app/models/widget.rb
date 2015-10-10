class Widget < ActiveRecord::Base
  after_initialize :default_values

  belongs_to :user

  acts_as_api
  include Api::Widget

  GEO_FACTORY = RGeo::Cartesian.factory

  # Override to get the key in embed url helper.
  # As we want to use the api_key to fetch the widget?
  def to_param
    "#{api_key}".parameterize
  end

  def lat=(value)
    self.center = GEO_FACTORY.point(self.lon || 0.0, value.to_f)
  end

  def lat
    self.center.y if self.center
  end

  def lon=(value)
    self.center = GEO_FACTORY.point(value.to_f, self.lat || 0.0)
  end

  def lon
    self.center.x if self.center
  end

  def api_key
    self.user.save
    self.user.api_key
  end

  private

  def default_values
    self.center ||= GEO_FACTORY.point(0.0,0.0)
  end

end
