class Widget < ActiveRecord::Base
  after_initialize :default_values

  belongs_to :user

  acts_as_api
  include Api::Widget

  GEO_FACTORY = RGeo::Cartesian.factory

  def provider
  end

  def providers
    ['provider1', 'provider2']
  end

  def src
    #http://wheelmap.org/en/map#/?lat=52.505298303257234&lon=13.42218428850174&status=yes&toilet=yes&zoom=18
    "/mapwidget?zoom=18&lat=#{self.lat}&lon#{self.lon}&key=#{self.api_key}"
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
