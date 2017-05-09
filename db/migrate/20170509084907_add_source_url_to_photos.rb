class AddSourceUrlToPhotos < ActiveRecord::Migration
  def up
    add_column :photos, :source_url, :string, null: true, default: nil
  end

  def down
    remove_column :photos, :source_url
  end
end
