Factory.define :poi do |p|
  p.osm_id 1
  p.geom {Point.from_x_y(attributes['13.4'], attributes['52.0'])}
end