class Category < ActiveRecord::Base
  has_one :node_type
  has_many :pois, :through => :node_type
end
