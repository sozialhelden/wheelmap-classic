# Defines a new sequence
Factory.sequence :name do |n|
  "a nice name #{n}"
end

Factory.sequence :version do |n|
  n
end

Factory.define :poi do |p|
  p.osm_id {Factory.next :version}
  p.lat 52.0
  p.lon 13.4
  p.version { Factory.next :version }
  p.tags { Hash.new()}
  p.name 'name'
  p.type 'bar'
  p.wheelchair 'yes'
end
