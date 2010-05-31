class DeviseCreateUsers < ActiveRecord::Migration
  def self.up
    create_table(:users) do |t|
      t.string :users, :oauth_token
      t.string :users, :oauth_secret
      
      t.database_authenticatable :null => false
      t.recoverable
      t.rememberable
      t.trackable

      t.timestamps
    end

    add_index :users, :oauth_token
    add_index :users, :email,                :unique => true
    add_index :users, :reset_password_token, :unique => true
  end

  def self.down
    drop_table :users
  end
end
