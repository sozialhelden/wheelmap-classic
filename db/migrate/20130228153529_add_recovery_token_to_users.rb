class AddRecoveryTokenToUsers < ActiveRecord::Migration
  def self.up
    ## Recoverable
    add_column :users, :reset_password_token, :string
    add_column :users, :reset_password_sent_at, :datetime
  end

  def self.down
    remove_column :users, :reset_password_token
    remove_column :users, :reset_password_sent_at
  end
end
