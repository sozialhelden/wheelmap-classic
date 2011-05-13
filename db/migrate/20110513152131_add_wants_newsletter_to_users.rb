class AddWantsNewsletterToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :wants_newsletter, :boolean, :default => false, :null => false
    add_index :users, :wants_newsletter
  end
  

  def self.down
    remove_column :users, :wants_newsletter
  end
end
