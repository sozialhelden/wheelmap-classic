Wheelmap = @Wheelmap

Wheelmap.IndexRoute = Ember.Route.extend
  boundsRatioBuffer: 0.3
  previousBounds: null

  setupController: (controller, model, queryParams)->
    properties = {}

    if queryParams.lat? && queryParams.lng?
      properties.center = new L.LatLng(queryParams.lat, queryParams.lng)

    if queryParams.zoom?
      properties.zoom = parseInt(queryParams.zoom, 10)

    #if queryParams.node_id?
    #  properties.startNode = @findModel('node', queryParams.node_id)

    @controllerFor('map').setProperties(properties)

  actions:
    zooming: (isZooming, bounds)->
      if isZooming # Only reload when zooming is finished
        return

      @send('permalink')
      @send('updateNodes', bounds)

    moving: (isMoving, bounds)->
      if isMoving # Only reload when moving is finished
        return

      @send('permalink')

      if @previousBounds?
        paddedBounds = @previousBounds.pad(@boundsRatioBuffer)

        if paddedBounds.contains(bounds)
          return

      @send('updateNodes', bounds)

    layerChanged: (layer)->
      if layer?
        @send('updateNodes', layer.getBounds())

    updateNodes: (bounds)->
      mapController = @controllerFor('map')

      mapController.set('isLoading', true)
      @previousBounds = bounds

      @store.findQuery('node', bbox: bounds.toBBoxString()).then (nodes)->
        mapController.set('content', nodes)
        mapController.set('isLoading', false)

    permalink: ()->
      Ember.run.sync() # Needed for having all parameters up to date

      mapController = @controllerFor('map')
      center = mapController.get('center')
      zoom = mapController.get('zoom')

      @replaceWith('index', queryParams: { lat: center.lat, lng: center.lng, zoom: zoom })