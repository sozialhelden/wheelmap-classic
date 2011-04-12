class AddOAuthRequestTokenToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :oauth_request_token, :text
  end

  def self.down
    # remove_column :users, :oauth_request_token
  end
end
