class Region < ActiveRecord::Base
  extend FriendlyId

  has_many    :pois
  has_many    :photos, :through => :pois

  validates :name, :grenze, :presence => true

  friendly_id :name, :use => :slugged

  acts_as_nested_set

  attr_protected :lft, :rgt

  GEO_FACTORY = RGeo::Cartesian.factory
  set_rgeo_factory_for_column(:grenze, GEO_FACTORY)

  scope :parent_id, lambda {|parent_id| where(parent_id: parent_id) }
  scope :depth, lambda { |depth| where(:depth => depth) }

  def pois_of_children
    region_ids  = Region.where(['regions.lft >= ? AND regions.rgt <= ?', self.lft, self.rgt]).select('id').map(&:id)
    Poi.where(:region_id => region_ids)
  end

  def to_polygon
    self.grenze.as_wkt
  end

  # Array with bounding coordinates left, bottom, right, top
  def bounding_box
    bounding_box = RGeo::Cartesian::BoundingBox.BoundingBox.create_from_geometry(self.grenze)
    # left, bottom, right, top
    [bounding_box.min_x, bounding_box.min_y, bounding_box.max_x, bounding_box.max_y]
  end

  def self.from_wkt_file(wkt_file_name, parent)
    wkt_base_name = File.basename(wkt_file_name, '.wkt')
    region_name = wkt_base_name.gsub(/_/, ' ')
    puts "Importing #{region_name}"

    wkt_string = File.open(wkt_file_name).first.strip

    region = Region.new(:name => region_name, :parent_id => parent.try(:id), :grenze => wkt_string)
    region.grenze = wkt_string
    region.save!
    region
  end
end
