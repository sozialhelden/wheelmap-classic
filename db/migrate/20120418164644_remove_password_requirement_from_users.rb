class RemovePasswordRequirementFromUsers < ActiveRecord::Migration
  def self.up
    change_column :users, :encrypted_password, :string, :null => true, :default => nil
    remove_index :users, :email rescue nil
    change_column :users, :email, :string, :null => true, :default => nil

    remove_column :users, :reset_password_token
    remove_column :users, :oauth_request_token

    # Obsolete columns, would not come back on self.down
    remove_column :users, :users        rescue nil
    remove_column :users, :osm_username rescue nil
    remove_column :users, :osm_password rescue nil
  end

  def self.down
    change_column :users, :encrypted_password, :string, :null => false
    change_column :users, :email, :string, :null => false
    add_index :users, :email, :unique => true rescue nil

    add_column :users, :reset_password_token, :string rescue nil
    add_column :users, :oauth_request_token, :text rescue nil
  end
end
