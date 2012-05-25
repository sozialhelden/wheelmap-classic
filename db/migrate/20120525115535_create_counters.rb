class CreateCounters < ActiveRecord::Migration
  def self.up
    create_table :counters do |t|
      t.date    :counter_date

      t.integer :tag_website,     :default => 0
      t.integer :tag_iphone,      :default => 0
      t.integer :tag_android,     :default => 0

      t.integer :update_website,  :default => 0
      t.integer :update_iphone,   :default => 0
      t.integer :update_android,  :default => 0

      t.integer :create_website,  :default => 0
      t.integer :create_iphone,   :default => 0
      t.integer :create_android,  :default => 0

      t.timestamps
    end
  end

  def self.down
    drop_table :counters
  end
end
