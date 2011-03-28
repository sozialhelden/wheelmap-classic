# Defines a new sequence
Factory.sequence :name do |n|
  "a nice name #{n}"
end

Factory.sequence :version do |n|
  n
end

Factory.define :poi do |p|
  p.geom Point.from_x_y(13.4, 52.0)
  p.tags { {'name' => 'name', 'amenity' => 'bar', 'addr:city' => 'Berlin'} }
  p.version { Factory.next :version }
  
end

