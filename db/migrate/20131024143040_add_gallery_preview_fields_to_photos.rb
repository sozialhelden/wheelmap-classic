class AddGalleryPreviewFieldsToPhotos < ActiveRecord::Migration
  def up
    add_column :photos, :image_gallery_preview_width, :integer
    add_column :photos, :image_gallery_preview_height, :integer
  end

  def down
    remove_column :photos, :image_gallery_preview_width
    remove_column :photos, :image_gallery_preview_height

  end
end
