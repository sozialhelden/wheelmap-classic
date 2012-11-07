class CreatePhotos < ActiveRecord::Migration
  def self.up
    create_table :photos do |t|
      t.string :caption
      t.string :image
      t.string :poi_id

      t.timestamps
    end
  end

  def self.down
    drop_table :photos
  end
end
