class CreateUsersAndProviders < ActiveRecord::Migration
  def change
    create_table :providers_users, id: false do |t|
      t.belongs_to :user, index: true
      t.belongs_to :provider, index: true
    end
  end
end
