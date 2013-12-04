class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.float :latitude
      t.float :longitude
      t.string :name
      t.string :street
      t.string :zip
      t.string :city

      t.timestamps
    end
  end
end
