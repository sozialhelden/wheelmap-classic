class OpenStreetMap::QueuedNode < ActiveRecord::Base
  belongs_to :user

  def self.enqueue(user, node_attributes)
    self.create(:user => user, :node_attributes => node_attributes.to_json)
  end
end
