class AddActionToPoiLogs < ActiveRecord::Migration
  def change
    add_column :poi_logs, :action, :string, default: ''
  end
end
