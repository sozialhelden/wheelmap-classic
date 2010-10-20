require 'builder'
class OpenStreetMap
  class Changeset
    attr_accessor :min_lat, :max_lat, :min_lon, :max_lon, :id, :closed_at, :created_at, :uid, :open, :tag, :user
    
    def initialize(params)
      params.each do |k,v|
        self.send("#{k}=", v)
      end
    end
    
    def id=(value)
      @id = value.to_i
    end
    
    def closed?
      @open == "false"
    end
    
  end
end
