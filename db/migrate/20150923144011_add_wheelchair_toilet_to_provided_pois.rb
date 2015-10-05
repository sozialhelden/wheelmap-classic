class AddWheelchairToiletToProvidedPois < ActiveRecord::Migration
  def change
    add_column :provided_pois, :wheelchair_toilet, :string
  end
end
