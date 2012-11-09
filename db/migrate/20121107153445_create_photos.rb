class CreatePhotos < ActiveRecord::Migration
  def self.up
    create_table :photos do |t|
      t.string :caption
      t.string :image
      t.boolean :image_processing

      t.references :poi
      t.references :user

      t.datetime :taken_at
      t.datetime :created_at
    end
  end

  def self.down
    drop_table :photos
  end
end
