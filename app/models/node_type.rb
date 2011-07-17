class NodeType < ActiveRecord::Base
  has_many :pois
  belongs_to :category
  
  
  validate :category, :presence => true
end
