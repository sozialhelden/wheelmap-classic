class ProvidedPoi < ActiveRecord::Base
  belongs_to :poi
  belongs_to :provider

  validates :poi, :poi_id, :provider, :provider_id, presence: true
  validates_uniqueness_of :poi_id, :scope => :provider_id

  scope :with_wheelchair, where("wheelchair > ''")

end
