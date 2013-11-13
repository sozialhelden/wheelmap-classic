class AddLogoToProviders < ActiveRecord::Migration
  def up
    add_column :providers, :logo, :string
  end

  def dow
    remove_column :providers, :logo
  end
end
