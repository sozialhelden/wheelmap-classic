class AddTermsToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :terms, :boolean, :null => false, :default => false
    add_column :users, :accepted_at, :datetime
  end

  def self.down
    remove_column :users, :terms
    remove_column :users, :accepted_at
  end
end
