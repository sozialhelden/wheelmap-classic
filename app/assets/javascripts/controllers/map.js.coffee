Wheelmap = @Wheelmap

Wheelmap.MapController = Ember.ArrayController.extend
  itemController: 'node'
  center: null
  zoom: null
  startNode: null
  isLoading: false

  init: ()->
    properties =
      center: new L.LatLng(52.50521, 13.4231)
      zoom: 12

    if $.cookie('last_lat')? and $.cookie('last_lon')?
      properties.center = new L.LatLng($.cookie('last_lat'), $.cookie('last_lon'))

    if $.cookie('last_zoom')?
      properties.zoom = parseInt($.cookie('last_zoom'), 10)

    @setProperties(properties)

  mapChanged: (()->
    center = @get('center')
    zoom = @get('zoom')

    $.cookie('last_lat', center.lat)
    $.cookie('last_lng', center.lng)
    $.cookie('last_zoom', zoom)
  ).observes('center', 'zoom')

