class AddToiletWebsiteToCounters < ActiveRecord::Migration
  def change
    add_column :counters, :toilet_website, :integer, default: 0
    add_column :counters, :toilet_iphone, :integer, default: 0
    add_column :counters, :toilet_android, :integer, default: 0
  end
end
