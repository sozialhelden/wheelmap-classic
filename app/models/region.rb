class Region < ActiveRecord::Base
  has_many :pois

  has_friendly_id :name,
    :use_slug => true,
    :approximate_ascii => true,
    :ascii_approximation_options => :german,
    :strip_non_ascii => true


  def to_polygon
    self.grenze.as_wkt
  end

  # Array with bounding coordinates left, bottom, right, top
  def bounding_box
    geofactory = RGeo::Cartesian.factory
    bounding_box = RGeo::Cartesian::BoundingBox.new(geofactory)
    polygon = geofactory.parse_wkb(self.grenze.as_wkb)
    bounding_box.add(polygon)
    [bounding_box.max_x, bounding_box.min_y, bounding_box.min_x, bounding_box.max_y]
  end
end