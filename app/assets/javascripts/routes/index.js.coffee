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
    reloadNodes: (bounds)->
      mapController = @controllerFor('map')

      mapController.set('isLoading', true)

      setTimeout(() ->
        mapController.set('isLoading', false)
      , 2000)

    permalink: ()->
      Ember.run.sync() # Needed for having all parameters up to date

      mapController = @controllerFor('map')
      center = mapController.get('center')
      zoom = mapController.get('zoom')

      @replaceWith('index', queryParams: { lat: center.lat, lng: center.lng, zoom: zoom })