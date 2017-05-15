class ProvidedPoi < ActiveRecord::Base
  belongs_to :poi
  belongs_to :provider

  validates :poi_id, :provider, :provider_id, presence: true
  validates_uniqueness_of :poi_id, scope: :provider_id

  scope :with_wheelchair, -> { where("wheelchair > ''") }

  def self.import(provider_id, csv_file)
    provider = Provider.find(provider_id)
    success_count = 0
    CSV.parse(csv_file.force_encoding('UTF-8'), headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:osm_id].to_i
      osm_id = row[:osm_type] == 'way' ? osm_id * -1 : osm_id
      provided_poi = provider.provided_pois.where(poi_id: osm_id).first_or_initialize
      provided_poi.url = row[:ref_url]
      provided_poi.wheelchair = row[:wheelchair]
      provided_poi.wheelchair_toilet = row[:wheelchair_toilet]
      success_count += 1 if provided_poi.save
    end
    success_count
  end
end
