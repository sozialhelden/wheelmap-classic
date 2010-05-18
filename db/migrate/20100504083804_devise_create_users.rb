class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table(:users) do |t|
      t.string :users, :oauth_token
      t.string :users, :oauth_secret
      t.timestamps
    end

    add_index :users, :oauth_token
  end

  def self.down
    drop_table :users
  end
end
