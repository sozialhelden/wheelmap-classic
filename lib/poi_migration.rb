module PoiMigration
  def self.convert(poi)
    poi.tags["toilets:wheelchair"] = poi.tags["wheelchair_toilet"]
    poi.tags.delete("wheelchair_toilet")
    poi
  end
end
