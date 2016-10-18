class RenameTypeToMeasurementType < ActiveRecord::Migration
  def change
    rename_column :measurements, :type, :measurement_type
  end
end
