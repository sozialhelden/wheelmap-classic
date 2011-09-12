class Poi < ActiveRecord::Base
  
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::AssetTagHelper
  include PopupHelper
  
  # osm_id ist der Primaerschluessel
  set_primary_key :osm_id
  
  attr_accessible :name, :type, :geom, :version, :wheelchair, :created_at, :updated_at, :status, :lat, :lon, :id, :tags, :osm_id, :name
  
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

  self.include_root_in_json = false  
  
  WHEELCHAIR_STATUS_VALUES = {:yes => 1, :limited => 2, :no => 4, :unknown => 8}
  
  belongs_to :node_type, :touch => false, :include => :category
  has_one :category, :through => :node_type

  validate :relevant?
  
  serialize :tags
  
  before_save :set_status
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
  scope :with_status, lambda {|status| {:conditions => {:status => status}}}
  #scope :search,      lambda {|search| {:conditions => ['tags LIKE ?', "%#{search}%"]}}
  scope :search,      lambda {|search| {:conditions => ['MATCH (tags) AGAINST  (? IN BOOLEAN MODE)', search]}}
  
  scope :with_node_type, :conditions => 'node_type_id IS NOT NULL'
  scope :without_node_type, :conditions => 'node_type_id IS NULL'
  scope :including_category, :include => :category
  
  scope :select_distance, lambda {|lat,lon| {:select => "*,haversine(geom,#{lat},#{lon}) as distance"}}
  
  scope :within_bbox, lambda {|left, bottom, right, top|{
    :conditions => "MBRContains(GeomFromText('POLYGON(( \
                    #{left} #{bottom}, #{right} #{bottom}, \
                    #{right} #{top}, #{left} #{top}, \
                    #{left} #{bottom}))'), pois.geom)" } }
    
  def self.bbox(bounding_box_string)
    left, bottom, right, top = bounding_box_string.split(',').map(&:to_f)
    self.within_bbox(left, bottom, right, top)
  end
  
  def self.wheelchair(stat)
    self.with_status(WHEELCHAIR_STATUS_VALUES[stat.to_sym])
  end

  def lat
    self.geom.lat if self.geom
  end
  
  def lat=(value)
    self.geom ||= Point.from_x_y(0.0,0.0)
    self.geom.y = value
  end
  
  def lon
    self.geom.lng if self.geom
  end
  
  def lon=(value)
    self.geom ||= Point.from_x_y(0.0,0.0)
    self.geom.x = value
  end
  
  def attributes
    super.reverse_merge!(
    'lat' => lat,
    'lon' => lon,
    'name' => name,
    'type' => type,
    'category' => category.try(:identifier),
    'wheelchair' => wheelchair,
    'wheelchair_description' => wheelchair_description
    )
  end
  
  def as_json(options={})
    options.merge!(:methods => [:id, :state, :icon, :type], :except => [:geom, :version, :osm_id])
    super(options)
  end

  def id
    osm_id
  end
  
  def id=(value)
    self.osm_id = value
  end
  
  def type
    tags['amenity']   ||
    tags['shop']      ||
    tags['tourism']   ||
    tags['natural']   ||
    tags['sport']     ||
    tags['leisure']   ||
    tags['historic']  ||
    tags['highway']   ||
    tags['railway']
  end
  
  def type=(value)
    key = Tags[value.to_sym]
    tags[key.to_s] = value.to_s
  end
  
  def category_id
    self.node_type.category_id
  end

  def name
    tags['name']
  end

  def name=(value)
    tags['name'] = value
  end

  def wheelchair
    tags['wheelchair'] ||= 'unknown'
  end
  
  def wheelchair=(value)
    tags['wheelchair'] = value
  end
  
  def street
    tags['addr:street']
  end
  
  def housenumber
    tags['addr:housenumber']
  end
    
  def city
    tags['addr:city']
  end
  
  def postcode
    tags['addr:postcode']
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
  
  def headline
    self.name || I18n.t("poi.name.#{self.category.try(:identifier)}.#{self.type}")
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
    # icon_name = ''
    # if type.blank?
    #   icon_name = 'cross-small-white'
    # else
    #   icon_name = Icons[type.to_sym] || 'cross-small-white'
    # end
    # ['/images', 'icons', icon_name].join '/'
    if node_type.try(:icon)
      "/marker/#{wheelchair}/#{node_type.icon}" 
    else
      "/marker/undefined.png"
    end
  end
  
  def icon
    "/icons/#{node_type.try(:icon)}"
  end

  def to_geojson(options={})
    return if type.blank? || category.blank?
    result = { :type => 'Feature',
      :geometry => { :type => 'Point', :coordinates  => [self.lon, self.lat]
      },
      :properties => {'name' => headline,
                      'address' => address,
                      'wheelchair' => wheelchair,
                      'osm_id' => osm_id,
                      'type' => node_type.try(:identifier),
                      'category' => category.try(:identifier)}.reject{|k,v| v.blank?}
    }
    result
  end

  def relevant?
    if !tags.blank? &&
      ( tags.has_key?('amenity') ||
      tags.has_key?('shop') ||
      tags.has_key?('tourism') ||
      tags.has_key?('natural') ||
      tags.has_key?('sport') ||
      tags.has_key?('leisure') ||
      tags.has_key?('historic'))
      # valid!
    else
      errors.add(:tags, "needs to have at least one of the following keys: amenity, tourism natural sport leisure shop historic")
    end
  end

  def existing_record!
      @new_record = false
  end
  
  def set_status
    self.status = WHEELCHAIR_STATUS_VALUES[wheelchair.to_sym]
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
end
