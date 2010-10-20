class AddChangesetToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :changeset_id, :integer
  end

  def self.down
    remove_column :users, :changeset_id
  end
end
