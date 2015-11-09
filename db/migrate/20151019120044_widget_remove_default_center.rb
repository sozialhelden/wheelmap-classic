class WidgetRemoveDefaultCenter < ActiveRecord::Migration
  def change
    unless column_exists? :widgets, :bounding_box
      add_column :widgets, :bounding_box, :integer
    end
  end
end
