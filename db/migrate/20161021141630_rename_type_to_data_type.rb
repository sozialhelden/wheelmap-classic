class RenameTypeToDataType < ActiveRecord::Migration
  def change
    rename_column :measurements, :type, :data_type
  end
end
