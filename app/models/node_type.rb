class NodeType < ActiveRecord::Base
  include ActionView::Helpers::AssetTagHelper
  
  belongs_to :category
  
  validates :identifier, :presence => true
  
  acts_as_api
  
  api_accessible :simple do |template|
    template.add :id
    template.add :identifier
    template.add :category_id
    template.add :localized_name
    template.add :icon
  end
  
  def localized_name
    I18n.t("poi.name.#{category.identifier}.#{identifier}")
  end
  
  def icon
    "/images/icons/#{read_attribute(:icon) || 'unknown'}.png"
  end
  
end
