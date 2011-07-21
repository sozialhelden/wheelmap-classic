class NodeType < ActiveRecord::Base
  has_many :pois
  belongs_to :category

  validates :identifier, :presence => true
  validates :category_id, :presence => true

  cattr_accessor :combination

  def localized_name
    I18n.t("poi.name.#{category.identifier}.#{identifier}")
  end

  def icon
    "/images/icons/#{read_attribute(:icon) || 'unknown'}"
  end

  def self.combination
    return @@combination if @@combination
    keys = NodeType.all.map(&:osm_key).uniq.sort
    @@combination = {}
    keys.each do |osm_key|
      values = NodeType.all(:conditions => {:osm_key => osm_key})
      values.each do |value|
        osm_value = value.osm_value
        @@combination[osm_key] ||= {}
        @@combination[osm_key][osm_value] = value.id
      end
    end
    @@combination
  end
end
