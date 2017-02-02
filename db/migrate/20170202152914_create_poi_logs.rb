class CreatePoiLogs < ActiveRecord::Migration
  def change
    create_table :poi_logs do |t|
      t.integer :osm_id

      t.timestamps
    end
  end
end
