class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.string :data_type
      t.string :description, default: ''
      t.references :photo, index: true

      t.timestamps
    end
  end
end
