module PoiMigration
  def self.convert(poi)
    poi.tags.delete("wheelchair_toilet")
    poi
  end
end
