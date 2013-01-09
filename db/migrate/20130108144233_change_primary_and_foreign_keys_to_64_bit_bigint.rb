class ChangePrimaryAndForeignKeysTo64BitBigint < ActiveRecord::Migration
  def self.up
    change_table :pois do |t|
      t.change :osm_id,       :bigint
      t.change :node_type_id, :bigint
      t.change :region_id,    :bigint
    end

    %w{active_admin_comments admin_users alternatives categories counters experiments delayed_jobs node_types iphone_counters provided_pois photos providers regions slugs users}.each do |table_name|
      change_table table_name.to_sym do |t|
        t.change :id, 'BIGINT AUTO_INCREMENT' rescue nil
      end
    end

    change_table :active_admin_comments do |t|
      t.change :resource_id, :bigint rescue nil
      t.change :author_id,   :bigint rescue nil
    end

    change_table :alternatives do |t|
      t.change :experiment_id, :bigint rescue nil
    end

    change_table :node_types do |t|
      t.change :category_id, :bigint rescue nil
    end

    change_table :photos do |t|
      t.change :changeset_id, :bigint rescue nil
    end

    change_table :photos do |t|
      t.change :poi_id,  :bigint rescue nil
      t.change :user_id, :bigint rescue nil
    end

    change_table :provided_pois do |t|
      t.change :poi_id,      :bigint rescue nil
      t.change :provider_id, :bigint rescue nil
    end

    change_table :regions do |t|
      t.change :parent_id,  :bigint rescue nil
    end

    change_table :slugs do |t|
      t.change :sluggable_id,  :bigint rescue nil
    end

    change_table :users do |t|
      t.change :osm_id,       :bigint rescue nil
      t.change :changeset_id, :bigint rescue nil
    end
  end

  def self.down
    change_table :pois do |t|
      t.change :osm_id,       :integer
      t.change :node_type_id, :integer
      t.change :region_id,    :integer
    end

    %w{active_admin_comments admin_users alternatives categories counters experiments delayed_jobs node_types iphone_counters provided_pois photos providers regions slugs users}.each do |table_name|
      change_table table_name.to_sym do |t|
        t.change :id, 'INT(11) AUTO_INCREMENT' rescue nil
      end
    end

    change_table :active_admin_comments do |t|
      t.change :resource_id, :integer rescue nil
      t.change :author_id,   :integer rescue nil
    end

    change_table :alternatives do |t|
      t.change :experiment_id, :integer rescue nil
    end

    change_table :node_types do |t|
      t.change :category_id, :integer rescue nil
    end

    change_table :photos do |t|
      t.change :changeset_id, :integer rescue nil
    end

    change_table :photos do |t|
      t.change :poi_id,  :integer rescue nil
      t.change :user_id, :integer rescue nil
    end

    change_table :provided_pois do |t|
      t.change :poi_id,      :integer rescue nil
      t.change :provider_id, :integer rescue nil
    end

    change_table :regions do |t|
      t.change :parent_id,  :integer rescue nil
    end

    change_table :slugs do |t|
      t.change :sluggable_id,  :integer rescue nil
    end

    change_table :users do |t|
      t.change :osm_id,       :integer rescue nil
      t.change :changeset_id, :integer rescue nil
    end

  end
end
