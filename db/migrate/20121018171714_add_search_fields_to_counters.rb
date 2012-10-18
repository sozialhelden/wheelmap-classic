class AddSearchFieldsToCounters < ActiveRecord::Migration
  def self.up
    add_column :counters, :search_website, :integer, :default => 0
    add_column :counters, :search_iphone,  :integer, :default => 0
    add_column :counters, :search_android, :integer, :default => 0
  end

  def self.down
    remove_column :counters, :search_website
    remove_column :counters, :search_iphone
    remove_column :counters, :search_android
  end
end
