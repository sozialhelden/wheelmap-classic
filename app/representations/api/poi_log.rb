module Api::PoiLog
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
      t.add lambda { |poi| poi.created_at }, :as => :timestamp
    end

    def action
      "delete"
    end
	end
end
