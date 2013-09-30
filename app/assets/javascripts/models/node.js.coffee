attr = DS.attr

@Wheelmap.Node = DS.Model.extend
  lat: attr()
  lon: attr()
  name: attr()
  icon: attr()
  wheelchair: attr()
  category: attr()

  location: (()->
    new L.LatLng(@get('lat'), @get('lon'))
  ).property('lat', 'lon')

@Wheelmap.NodeAdapter = DS.RESTAdapter.extend()