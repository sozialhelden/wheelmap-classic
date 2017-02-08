class PoiLogger
  def self.log_delete(poi)
    PoiLog.create(osm_id: poi.osm_id, action: "delete")
  end

  def self.log_update(poi)
    PoiLog.create(osm_id: poi.osm_id, action: "update")
  end
end
