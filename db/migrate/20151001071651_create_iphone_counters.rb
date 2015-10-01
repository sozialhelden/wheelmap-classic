class CreateIphoneCounters < ActiveRecord::Migration
  def up
    unless table_exists? :iphone_counters
      create_table :iphone_counters do |t|
        t.string   :install_id
        t.string   :device_version
        t.string   :app_version
        t.string   :os_version
        t.datetime :created_at
        t.datetime :updated_at
      end
    end
  end

  def down
    drop_table :iphone_counters
  end
end
