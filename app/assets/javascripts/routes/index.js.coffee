Wheelmap = @Wheelmap

Wheelmap.IndexRoute = Ember.Route.extend
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
    updateNodes: (bounds)->
      mapController = @controllerFor('map')

      mapController.set('isLoading', true)

      @store.findQuery('node', bbox: bounds.toBBoxString()).then (nodes)->
        mapController.set('content', nodes)
        mapController.set('isLoading', false)

    permalink: ()->
      Ember.run.sync() # Needed for having all parameters up to date

      mapController = @controllerFor('map')
      center = mapController.get('center')
      zoom = mapController.get('zoom')

      @replaceWith('index', queryParams: { lat: center.lat, lng: center.lng, zoom: zoom })