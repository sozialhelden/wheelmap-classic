require 'builder'
class OldOsm
  class Way
    include ActiveModel::Validations
    # include ActiveSupport::CoreExtensions::Hash::Keys

    attr_accessor :lat, :lon, :user, :uid, :changeset, :id, :timestamp, :visible, :name, :version, :tags, :member, :type, :wheelchair, :wheelchair_description, :street, :postcode, :country, :housenumber, :city, :website, :phone, :tag
    attr_accessor_with_default :changed, false

    validates_presence_of :name, :wheelchair, :type, :message => I18n.t('errors.messages.empty')
    #validates_numericality_of :lat, :lon, :only_integer => false, :message => I18n.t('errors.messages.not_a_number')
    #validates_true_for :lat, :lon, :logic => lambda { !lat.to_f.zero? }, :message => I18n.t('errors.messages.greater_than', :count => 0.0)
    validates_format_of :website, :with => /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/ix, :allow_blank => true, :message => I18n.t('errors.messages.invalid')
    validates_length_of :wheelchair_description, :maximum => 255

    def initialize(input={})
      data = input.stringify_keys
      @lat = data['lat'].to_f
      @lon = data['lon'].to_f
      @tags = extract_tags(data)
      @member = extract_member(data)
      @user = data['user']
      @uid = data['uid'].to_i
      @id = data['id'].to_i
      self.name = data['name'] || tags['name']
      @changeset = data['changeset']
      @version = data['version'].to_i
      @timestamp = Time.parse(data['timestamp']) rescue Time.now
      self.type = (data['type'] || tags['office'] || tags['amenity'] || tags['railway'] || tags['highway'] || tags['leisure'] || tags['shop'] || tags['tourism'] || tags['historic'] || tags['shop'])
      @wheelchair = tags['wheelchair'] = (data['wheelchair'] || tags['wheelchair'] || tags['hvv:barrier_free'] || 'unknown')
      self.wheelchair_description = (data['wheelchair_description'] || tags['wheelchair:description'])
      self.street       = (data['street'] || tags['addr:street'])
      self.housenumber  = (data['housenumber'] || tags['addr:housenumber'])
      self.postcode     = (data['postcode'] || tags['addr:postcode'])
      self.city         = (data['city'] || tags['addr:city'])
      self.phone        = (data['phone'] || tags['phone'])
      self.website      = (data['website'] || tags['website'])

    end

    def ==(anOther)
      [:id, :lat, :lon, :version].each do |attrib|
        puts "#{self.send(attrib)} <=> #{anOther.send(attrib)}"
        return false unless self.send(attrib) == anOther.send(attrib)
      end
      puts "#{self.tags.inspect} versus #{anOther.tags.inspect}"
      self.tags == anOther.tags
    end

    def attributes
      attribs = {}
      [:id, :lat, :lon, :version, :changeset, :user, :uid, :visible, :timestamp].each do |attribute|
        attribs[attribute] = self.send(attribute)
      end
      attribs
    end

    def valid_states
      ['yes', 'no', 'limited']
    end

    def street=(value)
      @street = tags['addr:street'] = value
    end

    def name=(value)
      @name = tags['name'] = value
    end

    def housenumber=(value)
      @housenumber = tags['addr:housenumber'] = value
    end

    def city=(value)
      @city = tags['addr:city'] = value
    end

    def wheelchair=(value)
      @wheelchair = tags['wheelchair'] = value
    end

    def wheelchair_description=(value)
      @wheelchair_description = tags['wheelchair:description'] = value
    end

    def postcode=(value)
      @postcode = tags['addr:postcode'] = value
    end

    def phone=(value)
      @phone = tags['phone'] = value
    end

    def website=(value)
      @website = tags['website'] = value
    end

    def extract_member(data)
      tees = []
      [data['nd']].flatten.compact.each do |member_hash|
        tees << member_hash['ref'].to_i
      end
      tees
    end

    def extract_tags(data)
      tees = {}
      # this just happens, because a single k=>v pair is not wrapped in an array by default
      [data['tag']].flatten.compact.each do |tag_hash|
        key = tag_hash['k'].to_s
        value = tag_hash['v']
        tees[key] = value
      end
      normalize_tags(tees)
    end

    def normalize_tags(tags)
      tags.tap do |tags|
        tags['railway'] = 'station' if tags['hvv:psv_type'] == 'U'
        tags['railway'] = 'tram_stop' if tags['hvv:psv_type'] == 'S'
        tags['amenity'] = 'ferry-terminal' if tags['ferry'] == 'halt'
      end
    end

    def valid_type?
      tags['amenity'] or
      tags['railway'] == 'station' or
      tags['railway'] == 'tram_stop' or
      tags['highway'] == 'bus_stop'
    end

    def type=(value)
      if !value.blank? && Tags.has_key?(value.to_sym)
        @type = value
        key = Tags[value.to_sym].to_s # reverse lookup for example supermarket to key :shop
        tags[key] = value
      else
        @type = nil
      end
      @type
    end

    def to_param
      id.to_s
    end

    def to_json(options={})
      {'id' => id,
       'lat' => lat,
       'lon' => lon,
       'name' => name,
       'wheelchair' => wheelchair,
       'tags' => tags.reject{|k,v| v.blank?},
       'type' => type,
       'category' => self.category}.to_json
    end

    def category
      Amenities.each do |cat, amenities|
        return cat.to_s if amenities.include?(self.type)
      end
      nil
    end

    # <way id='78252182' lat='52.5220063' lon='13.4006779' version='4' changeset='2883406' user='gkai' uid='74224' visible='true' timestamp='2009-10-18T14:16:48Z'>
    #   <tag k='amenity' v='post_box'/>
    #   <tag k='collection_times' v='Mo-Fr 15:00,17:00,21:15; Sa 16:00; Su 10:45,21:15'/>
    #   <tag k='name' v='Burgstraße 29'/>
    #   <tag k='operator' v='Deutsche Post AG'/>
    #   <tag k='postal_code' v='10178'/>
    #   <tag k='source' v='survey'/>
    #   <tag k='wheelchair' v='limited'/>
    # </way>
    def to_xml(options={})
      xml = Builder::XmlMarkup.new()
      xml.osm do
        xml.way(:id => id, :lat => lat, :lon => lon, :version => version, :changeset => changeset, :user => user, :uid => uid, :visible => visible, :timestamp => timestamp) do
          member.each do |node_id|
            xml.nd(:ref => node_id)
          end
          tags.each do |key,value|
            xml.tag(:k => key, :v => value) unless value.blank?
          end unless tags.empty?
        end
      end
    end
  end
end
