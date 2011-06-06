class Category < ActiveRecord::Base
  
  has_many :node_types
  
  validates :identifier, :presence => true

  acts_as_api
  
  api_accessible :simple do |template|
    template.add :id
    template.add :identifier
    template.add :localized_name
  end
  
  def localized_name
    I18n.t("poi.category.#{identifier}")
  end
  
  # def nodes
  #   Poi.scoped({:conditions => ['type IN (?)', Amenities[self.category_id]]})
  # end
  
end
