Factory.define :node, :class => OpenStreetMap::Node do |node|
  node.name         'Subway'
  node.lat          52.5073116
  node.lon          13.3901918
  node.version      1
  node.user         'testuser'
  node.uid          6669
  node.street       'Friedrichstraße'
  node.housenumber  207
  node.city         'Berlin'
  node.postcode     10969  
end