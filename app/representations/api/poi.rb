module Api::Poi
  extend ActiveSupport::Concern

  included do

    def around_api_response(api_template)
      custom_cache_key = "api_response_#{I18n.locale}_#{self.cache_key}_#{api_template.to_s}"
      Rails.cache.fetch(custom_cache_key, :expires_in => 1.hour) do
        yield
      end
    end

    # API template for '/nodes/changes'
    api_accessible :changes_stream do |t|
      t.add :osm_id
      t.add :action
      t.add lambda { |poi| poi.updated_at }, :as => :timestamp
    end

    def action
      "update"
    end

    # Please do not edit, this is the current stable API JSON representation!!!
    api_accessible :simple do |t|
      t.add :name
      t.add :wheelchair
      t.add :wheelchair_description
      t.add :wheelchair_toilet
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

    # Please do not edit, this is the legacy API JSON for the first iphone version!!!
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

    api_accessible :ember do |t|
      t.add :id
      t.add :name
      t.add :lat
      t.add :lon
      t.add :street
      t.add :housenumber
      t.add :postcode
      t.add :city
      t.add :wheelchair
      t.add :wheelchair_description
      t.add :wheelchair_toilet
      t.add lambda{|poi| poi.region.try(:name)  }, :as => :region
      t.add :node_type_id, :as => :type_id
      t.add lambda{|poi| poi.category.try(:id)  }, :as => :category_id
      t.add :sponsor, if: :sponsored?
      t.add :website
      t.add :phone
      t.add lambda{|poi| poi.photos.map(&:id).compact  }, :as => :photo_ids
    end
  end
end
