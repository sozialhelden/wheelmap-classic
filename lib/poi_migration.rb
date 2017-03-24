module PoiMigration

  def self.convert(poi)
    toilet = poi.toilet ? "yes" : "no"

    if poi.tags["wheelchair_toilet"] == toilet && poi.tags["wheelchair_toilet"] != poi.tags["toilets:wheelchair"]
      poi.tags["toilets:wheelchair"] = poi.tags["wheelchair_toilet"]
    end

    poi.tags.delete("wheelchair_toilet")
    poi
  end
end
