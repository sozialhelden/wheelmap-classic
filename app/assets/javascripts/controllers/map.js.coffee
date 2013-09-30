Wheelmap = @Wheelmap

Wheelmap.MapController = Ember.Controller.extend
  boundsRatioBuffer: 0.3
  previousBounds: null
  center: null
  zoom: null
  startNode: null
  nodes: []
  isLoading: false

  init: ()->
    properties =
      center: new L.LatLng(52.50521, 13.4231)
      zoom: 12

    if $.cookie('last_lat')? and $.cookie('last_lng')?
      properties.center = new L.LatLng($.cookie('last_lat'), $.cookie('last_lng'))

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

  actions:
    zooming: (isZooming, bounds)->
      if isZooming # Only reload when zooming is finished
        return

      @send('permalink')
      @send('reloadNodes', bounds)

    moving: (isMoving, bounds)->
      if isMoving # Only reload when moving is finished
        @previousBounds = bounds
        return

      @send('permalink')

      if @previousBounds?
        paddedBounds = @previousBounds.pad(@boundsRatioBuffer)

        if paddedBounds.contains(bounds)
          return

      @send('reloadNodes', bounds)