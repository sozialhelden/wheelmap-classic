class CreateIphoneCounters < ActiveRecord::Migration
  def self.up
    create_table :iphone_counters do |t|
      t.string :install_id
      t.string :device_version
      t.string :app_version
      t.string :os_version

      t.timestamps
    end
  end

  def self.down
    drop_table :iphone_counters
  end
end
