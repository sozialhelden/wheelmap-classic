class NodeType < ActiveRecord::Base
  has_many :pois
  belongs_to :category
  
  
  validate :category, :presence => true
  
  cattr_accessor :combination
  
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
