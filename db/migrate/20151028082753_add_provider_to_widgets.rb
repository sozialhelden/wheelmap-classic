class AddProviderToWidgets < ActiveRecord::Migration
  def change
    unless column_exists? :widgets, :provider_id
      add_column :widgets, :provider_id, :integer
    end
  end
end
