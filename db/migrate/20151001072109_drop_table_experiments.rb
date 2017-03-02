class DropTableExperiments < ActiveRecord::Migration
  def up
    drop_table :experiments if table_exists? :experiments
  end

  def down
    raise ActiveRecord::IrreversibleMigration, 'Cannot be rolled back.'
  end
end
