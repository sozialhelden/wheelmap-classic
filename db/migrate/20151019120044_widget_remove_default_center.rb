class WidgetRemoveDefaultCenter < ActiveRecord::Migration
  def change
    change_column_null :widgets, :center, true
  end
end
