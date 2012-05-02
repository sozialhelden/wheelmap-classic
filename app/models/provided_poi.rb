class ProvidedPoi < ActiveRecord::Base
  belongs_to :poi
  belongs_to :provider

  validates_presence_of :poi_id
  validates_presence_of :provider_id
  validates_uniqueness_of :poi_id, :scope => :provider_id
end
