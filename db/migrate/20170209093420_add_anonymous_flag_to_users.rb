class AddAnonymousFlagToUsers < ActiveRecord::Migration
  def change
    add_column :users, :anonymous, :boolean, default: false, null: false
  end
end
