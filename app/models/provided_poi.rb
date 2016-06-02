class ProvidedPoi < ActiveRecord::Base
  belongs_to :poi
  belongs_to :provider

  validates :poi_id, :provider, :provider_id, presence: true
  validates_uniqueness_of :poi_id, :scope => :provider_id

  scope :with_wheelchair, -> { where("wheelchair > ''") }

  def self.import(provider_id, csv_file)
    provider = Provider.find(provider_id)
    success_count = 0
    CSV.parse(csv_file, :headers => true, :encoding => 'UTF-8', :header_converters => :symbol) do |row|
      osm_id = row[:osm_id].to_i
      osm_id = row[:osm_type] == 'way' ? osm_id * -1 : osm_id
      provided_poi = provider.provided_pois.where(poi_id: osm_id).first_or_initialize
      provided_poi.url = row[:ref_url]
      provided_poi.wheelchair = row[:wheelchair]
      provided_poi.wheelchair_toilet = row[:wheelchair_toilet]
      if provided_poi.save
        success_count += 1
      end
    end
    success_count
  end

end
