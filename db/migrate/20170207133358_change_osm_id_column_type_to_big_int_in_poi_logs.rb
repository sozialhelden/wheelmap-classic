class ChangeOsmIdColumnTypeToBigIntInPoiLogs < ActiveRecord::Migration
  def change
    change_column :poi_logs, :osm_id, :integer, limit: 8
  end
end
