class AddToiletToPois < ActiveRecord::Migration
  def change
    add_column :pois, :toilet, :boolean
    add_index :pois, [ :toilet, :status ]
  end
end
