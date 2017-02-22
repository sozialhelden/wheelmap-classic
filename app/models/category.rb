class Category < ActiveRecord::Base
  has_many :node_types, dependent: :nullify
  has_many :pois, through: :node_types

  validates :identifier, presence: true

  acts_as_api
  include Api::Category

  def localized_name
    I18n.t("poi.category.#{identifier}")
  end
  alias name localized_name
end
