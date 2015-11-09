class AddWidgetBoundingBox < ActiveRecord::Migration
  def change
    unless column_exists? :widgets, :south_east
      add_column :widgets, :south_east, :point
    end
    unless column_exists? :widgets, :north_west
      add_column :widgets, :north_west, :point
    end
    change_column_null :widgets, :center, true
  end
end
