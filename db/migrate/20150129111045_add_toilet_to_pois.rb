class AddToiletToPois < ActiveRecord::Migration
  def up
    add_column(:pois, :toilet, :boolean) unless column_exists?(:pois, :toilet)
    add_index(:pois, [:toilet, :status]) unless index_exists?(:pois, [:toilet, :status])
  end

  def down
    remove_index(:pois, [:toilet, :status]) if index_exists?(:pois, [:toilet, :status])
    remove_column(:pois, :toilet) if column_exists?(:pois, :toilet)
  end
end

# This is an alternative way, which can be used to add this column using a temporary table
# columns = Poi.column_names
# ActiveRecord::Base.connection.execute "CREATE TABLE new_pois LIKE pois"
# ActiveRecord::Base.connection.execute "ALTER TABLE new_pois ADD toilet TINYINT(1) DEFAULT NULL"
# ActiveRecord::Base.connection.execute "INSERT INTO new_pois (#{columns.join(', ')}) SELECT #{columns.join(', ')} FROM pois"
# ActiveRecord::Base.connection.execute "CREATE INDEX index_pois_on_toilet_and_status ON new_pois(toilet,status)"
# ActiveRecord::Base.connection.execute "RENAME TABLE pois TO old_pois, new_pois TO pois"
# ActiveRecord::Base.connection.execute "DROP TABLE old_pois"
