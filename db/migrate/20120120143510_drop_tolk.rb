class DropTolk < ActiveRecord::Migration
  def self.up
    drop_table :tolk_locales      rescue nil
    drop_table :tolk_phrases      rescue nil
    drop_table :tolk_translations rescue nil
  end

  def self.down
  end
end
