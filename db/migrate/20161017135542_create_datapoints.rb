class CreateDatapoints < ActiveRecord::Migration
  def change
    create_table :datapoints do |t|
      t.string :property
      t.float :value
      t.string :unit
      t.references :measurement, index: true

      t.timestamps
    end
  end
end
