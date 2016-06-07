class NodeType < ActiveRecord::Base
  include ActionView::Helpers::AssetTagHelper

  cattr_accessor :combination

  has_many :pois, :dependent => :destroy
  belongs_to :category, :touch => false

  validates :identifier, :category_id, :category, :icon, :presence => true
  validates :category_id, :presence => true

  acts_as_api
  include Api::NodeType

  def localized_name(count=1)
    I18n.t("poi.name.#{category.identifier}.#{identifier}", :count => count)
  end

  alias_method :name, :localized_name

  class << self

    def combination
      keys = NodeType.all.map(&:osm_key)
      keys += NodeType.where('alt_osm_key IS NOT NULL').map(&:alt_osm_key)
      keys = keys.uniq.sort
      @@combination = {}
      keys.each do |osm_key|
        values = NodeType.where(:osm_key => osm_key).to_a
        values.each do |value|
          osm_value = value.osm_value
          @@combination[osm_key] ||= {}
          @@combination[osm_key][osm_value] = value.id
        end

        values = NodeType.where(:alt_osm_key => osm_key).to_a
        values.each do |value|
          osm_value = value.alt_osm_value
          @@combination[osm_key] ||= {}
          @@combination[osm_key][osm_value] = value.id
        end
      end
      @@combination
    end

    def valid_combination?(key, value)
      find_by_osm_key_and_osm_value(key, value) || find_by_alt_osm_key_and_alt_osm_value(key, value)
    end

    def valid_type?(tags)
      tags.any?{|k,v| valid_combination?(k,v)}
    end

  end
end
