class AddConfirmableToAdmins < ActiveRecord::Migration
  def self.up
    change_table(:admins) do |t|
      t.confirmable
      t.lockable    
    end
    
    add_index :admins, :confirmation_token,   :unique => true
    add_index :admins, :unlock_token,         :unique => true
  end

  def self.down
    change_table(:admins) do |t|
      t.remove :confirmation_token
      t.remove :confirmed_at
      t.remove :confirmation_sent_at
      t.remove :failed_attempts
      t.remove :unlock_token
      t.remove :locked_at
    end
  end
end
