require 'new_relic/agent/method_tracer'


class Poi < ActiveRecord::Base

  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::AssetTagHelper
  include PopupHelper
  include NewRelic::Agent::MethodTracer

  # osm_id ist der Primaerschluessel
  self.primary_key = "osm_id"

  has_many :provided_pois
  has_many :providers, :through => :provided_pois
  has_many :photos

  accepts_nested_attributes_for :photos

  DELEGATED_ADDR_ATTRIBUTES = [:street, :housenumber, :postcode, :city].map(&:to_s).freeze


  attr_accessible :name, :type, :geom, :version, :wheelchair, :wheelchair_description, :created_at, :updated_at, :status
  attr_accessible :lat, :lon, :id, :tags, :osm_id, :name, :node_type_id, :website, :phone, :photos_attributes
  attr_accessible *DELEGATED_ADDR_ATTRIBUTES

  self.include_root_in_json = false

  WHEELCHAIR_STATUS_VALUES = {:yes => 1, :limited => 2, :no => 4, :unknown => 8}

  belongs_to :region, :touch => false
  belongs_to :node_type, :touch => false, :include => :category
  has_one :category, :through => :node_type

  validate :relevant?
  validate :validate_type
  validates_presence_of :name, :on => :create
  validates_presence_of :wheelchair, :type
  validates_format_of :website, :with => /\A(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?\z/ix, :allow_blank => true, :message => I18n.t('errors.messages.invalid')
  validates_length_of :wheelchair_description, :maximum => 255
  validates_presence_of :lat, :lon, :message => "Bitte in der Karte klicken!"


  GEO_FACTORY = RGeo::Cartesian.factory

  # By default, use the GEOS implementation for spatial columns.
  self.rgeo_factory_generator = RGeo::Geos.method(:factory)

  # But use a geographic implementation for the :latlon column.
  set_rgeo_factory_for_column(:geom, GEO_FACTORY)

  serialize :tags

  acts_as_api

  def around_api_response(api_template)
    custom_cache_key = "api_response_#{self.cache_key}_#{api_template.to_s}"
    Rails.cache.fetch(custom_cache_key, :expires_in => 1.day) do
      yield
    end
  end

  api_accessible :simple do |t|
    t.add :name
    t.add :wheelchair
    t.add :wheelchair_description
    t.add :node_type, :template => :id
    t.add :lat
    t.add :lon
    t.add :id
    t.add :category, :template => :id
    t.add :street
    t.add :housenumber
    t.add :city
    t.add :postcode
    t.add :website
    t.add :phone
  end

  api_accessible :osm do |t|
    t.add lambda { |poi| poi.osm_id.abs }, :as => :id
    t.add :lat
    t.add :lon
    t.add :tags, :as => :tag
    t.add :version
  end

  api_accessible :iphone do |t|
    t.add :icon, :if => :icon
    t.add :id
    t.add :lat
    t.add :lon
    t.add :name
    t.add :tags_without_blank_values, :as => :tags
    t.add :type
    t.add :wheelchair
    t.add :category_for_node, :as => :category
  end

  before_save :set_status
  before_save :set_version
  before_save :set_node_type
  before_save :set_updated_at

  # Spezielle Find-Methode fuer den Zugriff auf alle POIs in einer
  # Bounding-Box. Fruehere Versionen von GeoRuby hatten dazu etwas
  # im MySQL-Adapter, aber das wird inzwischen nicht mehr supported,
  # daher bauen wir hier einen Standard-Contains-Query. Dieser Query
  # benutzt den raeumlichen Index und geht daher schnell (wenn man
  # nicht gerade eine Bounding-Box fuer die ganze Welt uebergibt).

  scope :fully_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:yes]}
  scope :not_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:no]}
  scope :limited_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:limited]}
  scope :unknown_accessibility, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:unknown]}
  scope :tagged, :conditions => ['status < ?', WHEELCHAIR_STATUS_VALUES[:unknown]]
  scope :with_status, lambda {|status| {:conditions => {:status => status}}}
  #scope :search,      lambda {|search| {:conditions => ['tags LIKE ?', "%#{search}%"]}}
  scope :search,      lambda {|search| {:conditions => ['MATCH (tags) AGAINST  (? IN BOOLEAN MODE)', escape_search_string(search)]}}

  scope :with_node_type, :conditions => 'node_type_id IS NOT NULL'
  scope :without_node_type, :conditions => 'node_type_id IS NULL'
  scope :including_category, :include => :category
  scope :has_provider, :joins => :provided_pois
  scope :has_photo, :joins => :photos
  scope :within_region, lambda {|region| {:conditions => {:region_id => region.id}}}


  scope :within_bbox, lambda {|left, bottom, right, top|{
    :conditions => "MBRContains(GeomFromText('POLYGON(( \
                    #{left} #{bottom}, #{right} #{bottom}, \
                    #{right} #{top}, #{left} #{top}, \
                    #{left} #{bottom}))'), pois.geom)" } }

  #scope :within_bbox, lambda {|left, bottom, right, top|{
  #  :conditions => "ST_Within(pois.geom, GeometryFromText('POLYGON(( \
  #                  #{left} #{bottom}, #{right} #{bottom}, \
  #                  #{right} #{top}, #{left} #{top}, \
  #                  #{left} #{bottom}))'))" } }

  def self.bbox(bounding_box_string)
    left, bottom, right, top = bounding_box_string.split(',').map(&:to_f)
    self.within_bbox(left, bottom, right, top)
  end

  def self.wheelchair(stat)
    self.with_status(WHEELCHAIR_STATUS_VALUES[stat.to_sym])
  end

  def self.lowest_id
    Poi.order('osm_id ASC').limit(1).select(:osm_id).first.osm_id
  end

  def self.highest_id
    Poi.order('osm_id DESC').limit(1).select(:osm_id).first.osm_id
  end

  def lat
    self.geom.y if self.geom
  end

  def lat=(value)
    self.geom = GEO_FACTORY.point(lon || 0.0, value.to_f)
  end

  def lon
    self.geom.x if self.geom
  end

  def lon=(value)
    self.geom = GEO_FACTORY.point(value.to_f, lat || 0.0)
  end

  def geom
    read_attribute(:geom) || GEO_FACTORY.point(0.0,0.0)
  end

  def tags
    a = read_attribute(:tags)
    if a.blank?
      h = {}
      write_attribute(:tags, h)
      h
    else
      a
    end
  end

  def tags_without_blank_values
    tags.reject{ |k,v| v.blank? }
  end

  def self.create_tag_based_attributes(names, options = {})
    prefix = options[:prefix] || ""

    names.each do |attr|
      key = "#{prefix}#{attr}"
      define_method("#{attr}=") do |value|
        self.tags[key] = value
      end

      define_method(attr) do
        self.tags[key]
      end
    end
  end

  create_tag_based_attributes DELEGATED_ADDR_ATTRIBUTES, :prefix => 'addr:'
  create_tag_based_attributes [:phone, :website]

  # usually, one of the keys we map to in Tags must be present for a poi to be valid
  RELEVANT_KEYS = Tags.values.uniq.map(&:to_s)

  def type
    RELEVANT_KEYS.each do |k|
      return tags[k] if tags.has_key?(k)
    end
    nil
  end

  def type=(value)
    key = Tags[value.to_sym]
    self.tags[key.to_s] = value.to_s if key
  end

  def validate_type
    errors.add(:tags, 'Invalid type') unless NodeType.valid_type?(self.tags)
  end

  def category_id
    self.node_type.category_id
  end

  def category_for_node
    Amenities.each do |category, groups|
      groups.each do |group|
        return category if group.include?(type)
      end
    end
    nil
  end


  def name
    tags['name']
  end

  def name=(value)
    self.tags['name'] = value
  end

  def wheelchair
    tags['wheelchair'] ||= 'unknown'
  end

  def wheelchair=(value)
    self.tags['wheelchair'] = value
  end

  def website
    tags['website']
  end

  def phone
    tags['phone']
  end

  def wheelchair_description
    tags['wheelchair:description']
  end

  def wheelchair_description=(value)
    tags['wheelchair:description'] = value
  end

  def headline
    self.name || I18n.t("poi.name.#{self.category.try(:identifier)}.#{self.node_type.try(:identifier)}")
  end

  def url
    "/nodes/#{self.osm_id}"
  end

  def address
    [render_street(self),render_city(self)].compact.join(', ')
  end

  def state
    'yes'
  end

  def marker
    if node_type.try(:icon)
      image_path("/marker/#{wheelchair}/#{node_type.icon}")
    else
      image_path("/marker/undefined.png")
    end
  end

  def icon
    node_type.try(:icon).to_s.gsub(/\.png$/,'')
  end

  def to_geojson(options={})
    {
        :type       => 'Feature',
        :geometry   => { :type => 'Point', :coordinates  => [ self.lon.to_f, self.lat.to_f ] },
        :properties => { 'name'       => name,
                         'address'    => address || '',
                         'wheelchair' => wheelchair,
                         'id'         => osm_id,
                         'type'       => node_type.try(:identifier) || '',
                         'category'   => category.try(:identifier) || '',
                         'icon'       => icon
                       }
    }
  end
  add_method_tracer :to_geojson, 'Custom/to_geojson'

  # method used as validation
  def relevant?
    if tags.values_at(*RELEVANT_KEYS).compact.empty?
      errors.add(:tags, "needs to have at least one of the following keys: #{RELEVANT_KEYS.join(',')}")
      return false
    end
    true
  end

  def existing_record!
      @new_record = false
  end

  def set_version
    self.version ||= 1
  end

  def set_status
    # For some reason there is a node which empty wheelchair tag. Gotta handle this
    if wheelchair.blank?
      self.status = WHEELCHAIR_STATUS_VALUES[:unknown]
    else
      self.status = WHEELCHAIR_STATUS_VALUES[wheelchair.to_sym]
    end
  end

  def set_node_type
    self.node_type = nil
    self.tags.each do |k,v|
      self.node_type_id ||= NodeType.combination[k][v] rescue nil
    end
  end

  def set_updated_at
    self.updated_at = Time.now
  end

  def way?
    osm_id and osm_id < 0
  end

  def to_osm_attributes
    as_api_response(:osm)
  end

  def osm_type
    self.way? ? 'way' : 'node'
  end

  def self.distance_search(search_string, bbox, limit=200)
    @node_ids = []
    left, bottom, right, top = bbox.split(',').map(&:to_f)
    @bbox = Bbox.new(left, bottom, right, top)
    max_box = Bbox.max
    # Increase the bounding box as long enough nodes are found or it covers the whole world
    while @node_ids.size <= limit and @bbox.within?(max_box) do
      found_node_ids = self.select(:osm_id).search(search_string).within_bbox(@bbox.west, @bbox.south, @bbox.east, @bbox.north).map(&:id)
      @node_ids = found_node_ids
      @bbox.widen_by_percent(100)
    end
    search(search_string).within_bbox(@bbox.west, @bbox.south, @bbox.east, @bbox.north)
  end

  def bounding_box(distance = 20)
    geofactory = RGeo::Cartesian.factory
    bounding_box = RGeo::Cartesian::BoundingBox.new(geofactory)
    north_east = geofactory.parse_wkt("POINT(#{self.move_east_by(distance)} #{self.move_north_by(distance)})")
    south_west = geofactory.parse_wkt("POINT(#{self.move_west_by(distance)} #{self.move_south_by(distance)})")
    bounding_box.add(north_east)
    bounding_box.add(south_west)
    # left, bottom, right, top
    [bounding_box.min_x, bounding_box.min_y, bounding_box.max_x, bounding_box.max_y]
  end

  def move_north_by(meters = 1)
    self.lat + degrees_per_meter_latitude(meters)
  end

  def move_south_by(meters = 1)
    self.lat - degrees_per_meter_latitude(meters)
  end

  def move_east_by(meters = 1)
    self.lon + degrees_per_meter_longitude(meters)
  end

  def move_west_by(meters = 1)
    self.lon - degrees_per_meter_longitude(meters)
  end

  def meters_per_degrees_latitude
    111132.92 - (559.82 * Math.cos(2 * self.lat)) + (1.175 * Math.cos(4 * self.lat))
  end

  def meters_per_degrees_longitude
    111412.84 * Math.cos(self.lat) - 93.5 * Math.cos(3 * self.lat)
  end

  def degrees_per_meter_latitude(meters = 1)
    meters / meters_per_degrees_latitude
  end

  def degrees_per_meter_longitude(meters = 1)
    meters / meters_per_degrees_longitude
  end

  def build_photo(params)
    self.photos.build(params)
  end

  def self.escape_search_string(search_string)
    return search_string if search_string.blank?
    escaped_search_string = ''
    search_string.split(//).each do |character|
      if character.unpack('C*').size > 1
        # Split the character in hex bytes and escape them.
        character.unpack('H*').first.scan(/.{1,2}/).each do |half_byte|
          escaped_search_string << "\\x#{half_byte}"
        end
      else
        escaped_search_string << character
      end
    end
    escaped_search_string
  end

  protected

  # Dummy methods to generate full image paths
  def config
    Wheelmap::Application.config.action_controller
  end


  # Dummy methods to generate full image paths
  def controller
    ''
  end

end
