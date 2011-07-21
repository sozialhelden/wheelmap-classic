class Category < ActiveRecord::Base

  has_one :node_type
  has_many :pois, :through => :node_type

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
  
end
