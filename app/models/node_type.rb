class NodeType < ActiveRecord::Base
  include ActionView::Helpers::AssetTagHelper

  cattr_accessor :combination

  has_many :pois, :dependent => :destroy
  belongs_to :category, :touch => false

  validates :identifier, :presence => true
  validates :category_id, :presence => true

  acts_as_api

  api_accessible :simple do |template|
    template.add :id
    template.add :identifier
    template.add :category_id
    template.add :localized_name
    template.add :icon
  end

  api_accessible :id do |template|
    template.add :id
    template.add :identifier
  end

  def localized_name(count=1)
    I18n.t("poi.name.#{category.identifier}.#{identifier}", :count => count)
  end

  class << self
    extend ActiveSupport::Memoizable

    def combination
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
    memoize :combination if Rails.env.production? || Rails.env.staging?
  end
end
