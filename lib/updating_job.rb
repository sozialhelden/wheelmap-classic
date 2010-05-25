class UpdatingJob < Struct.new(:osmid, :wheelchair_status)
  
  def perform
    OpenStreetMap.update(osmid, wheelchair_status)
  end
  
  def on_permanent_failure
    #TODO 
  end
end