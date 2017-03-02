module Api::PoiLog
  extend ActiveSupport::Concern

  included do
    # API template for '/nodes/changes'
    api_accessible :changes_stream do |t|
      t.add :osm_id
      t.add :action
      t.add ->(poi) { poi.created_at }, as: :timestamp
    end
  end
end
