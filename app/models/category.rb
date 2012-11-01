class Category < ActiveRecord::Base

  has_many :node_types, :dependent => :nullify
  has_many :pois, :through => :node_types

  validates :identifier, :presence => true

  acts_as_api

  api_accessible :simple do |template|
    template.add :id
    template.add :identifier
    template.add :localized_name
  end

  api_accessible :id do |template|
    template.add :id
    template.add :identifier
  end

  def localized_name
    I18n.t("poi.category.#{identifier}")
  end
  alias_method :name, :localized_name
end
