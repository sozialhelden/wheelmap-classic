class PoiLogger
  def self.log_delete(poi)
    PoiLog.create(osm_id: poi.osm_id)
  end
end
