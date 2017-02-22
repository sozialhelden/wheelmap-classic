class AddSlugToRegion < ActiveRecord::Migration
  def change
    add_column :regions, :slug, :string
    add_index  :regions, :slug, unique: true
  end
end
