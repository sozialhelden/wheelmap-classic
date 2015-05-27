class AddToiletCounterToUsers < ActiveRecord::Migration
  def change
    add_column :users, :toilet_counter, :integer, default: 0, null: false
  end
end
