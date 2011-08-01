class AddDistanceFunction < ActiveRecord::Migration
  def self.up
    execute "create function haversine(pt point, reflat float, reflon float) returns float deterministic begin return 6371000*acos(cos(radians(reflat))*cos(radians(y(pt)))*cos(radians(x(pt))-radians(reflon))+sin(radians(reflat))*sin(radians(y(pt)))); end" rescue nil
  end

  def self.down
    execute "DROP FUNCTION haversine"
  end
end
