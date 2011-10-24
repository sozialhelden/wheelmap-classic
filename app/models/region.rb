class Region < ActiveRecord::Base
  has_many :pois
  
  has_friendly_id :name,
    :use_slug => true,
    :approximate_ascii => true,
    :ascii_approximation_options => :german,
    :strip_non_ascii => true
  

  def to_polygon
    "#{self.grenze.text_geometry_type} (#{self.grenze.text_representation(false)})"
  end
end