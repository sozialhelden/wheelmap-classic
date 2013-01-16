class AddWidthAndHeightToPhotos < ActiveRecord::Migration
  def self.up
    add_column :photos, :image_width, :integer
    add_column :photos, :image_height, :integer

    [ :gallery_ipad_retina, :thumb, :thumb_iphone, :thumb_iphone_retina,
      :gallery_iphone, :gallery_iphone_retina, :gallery_ipad, :gallery].each do |version|
        add_column :photos, :"image_#{version}_width", :integer
        add_column :photos, :"image_#{version}_height", :integer
    end

    add_column :photos, :image_processing, :boolean rescue nil
    add_column :photos, :image_tmp, :string         rescue nil

  end

  def self.down
    remove_column :photos, :image_processing rescue nil
    remove_column :photos, :image_tmp        rescue nil

    [ :gallery_ipad_retina, :thumb, :thumb_iphone, :thumb_iphone_retina,
      :gallery_iphone, :gallery_iphone_retina, :gallery_ipad, :gallery].each do |version|
        remove_column :photos, :"image_#{version}_width"
        remove_column :photos, :"image_#{version}_height"
    end


    remove_column :photos, :image_height
    remove_column :photos, :image_width
  end
end
