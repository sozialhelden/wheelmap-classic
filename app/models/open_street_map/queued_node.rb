class OpenStreetMap::QueuedNode < ActiveRecord::Base
  belongs_to :user

  scope :within_bbox, lambda {|left, bottom, right, top|{
    :conditions => "MBRContains(GeomFromText('POLYGON(( \
                    #{left} #{bottom}, #{right} #{bottom}, \
                    #{right} #{top}, #{left} #{top}, \
                    #{left} #{bottom}))'), queued_nodes.geom)" } }

  def self.enqueue(user, node_attributes)
    self.create(:user => user, :node_attributes => node_attributes.to_json, :geom => Point.from_x_y(node_attributes['lon'], node_attributes['lat']))
  end

  def attribs
    @attribs ||= ActiveSupport::JSON.decode(self.node_attributes)
  end

  def to_geojson(options={})
    {
        :type       => 'Feature',
        :geometry   => { :type => 'Point', :coordinates  => [ geom.lon, geom.lat ] },
        :properties => { 'name'       => headline,
                         'address'    => address,
                         'wheelchair' => wheelchair,
                         'id'         => nil,
                         'type'       => node_type.try(:identifier) || '',
                         'category'   => category.try(:identifier) || '',
                       }
    }
  end
  add_method_tracer :to_geojson, 'Custom/to_geojson'

  def headline
    self.attribs['name'] || I18n.t("poi.name.#{self.category.try(:identifier)}.#{self.type}")
  end

  def wheelchair
    attribs['wheelchair']
  end

  def marker
    if node_type.try(:icon)
      "/marker/#{wheelchair}/#{node_type.icon}"
    else
      "/marker/undefined.png"
    end
  end

  def icon
    "/icons/#{node_type.try(:icon)}"
  end


  def address
    [render_street,render_city].compact.join(', ')
  end

  def render_street
    if self.attribs['street']
      I18n.t('node.address.street', :street => self.attribs['street'], :housenumber => self.attribs['housenumber'])
    end
  end

  def render_city
    if self.attribs['city']
      I18n.t('node.address.city', :postcode => self.attribs['postcode'], :city => self.attribs['city'])
    end
  end

  def node_type
    NodeType.find_by_identifier(attribs['type'])
  end

  def category
    node_type.try(:category)
  end
end
