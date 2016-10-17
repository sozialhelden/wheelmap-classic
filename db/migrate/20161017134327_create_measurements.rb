class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.string :type
      t.string :description
      t.references :photo, index: true

      t.timestamps
    end
  end
end
