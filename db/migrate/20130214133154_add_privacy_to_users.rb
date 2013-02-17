class AddPrivacyToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :privacy_policy, :boolean, :null => false, :default => false
    add_column :users, :privacy_policy_accepted_at, :datetime
  end

  def self.down
    remove_column :users, :privacy_policy
    remove_column :users, :privacy_policy_accepted_at
  end
end
