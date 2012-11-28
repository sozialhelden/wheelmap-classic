class AddWidthAndHeightToPhotos < ActiveRecord::Migration
  def self.up
    add_column :photos, :image_width, :integer
    add_column :photos, :image_height, :integer

    [ :gallery_ipad_retina, :thumb, :thumb_iphone, :thumb_iphone_retina,
      :gallery_iphone, :gallery_iphone_retina, :gallery_ipad, :gallery].each do |version|
        add_column :photos, :"image_#{version}_width", :integer
        add_column :photos, :"image_#{version}_height", :integer
    end

  end

  def self.down
    [ :gallery_ipad_retina, :thumb, :thumb_iphone, :thumb_iphone_retina,
      :gallery_iphone, :gallery_iphone_retina, :gallery_ipad, :gallery].each do |version|
        remove_column :photos, :"image_#{version}_width"
        remove_column :photos, :"image_#{version}_height"
    end


    remove_column :photos, :image_height
    remove_column :photos, :image_width
  end
end
