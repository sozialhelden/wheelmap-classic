Wheelmap.IndexRoute = Ember.Route.extend
  boundsRatioBuffer: 0.41
  _previousBounds: null
  _nodeRequestCounter: 0 # stop overlapping requests

  setupController: (controller, model, queryParams)->
    @setupMapController(@controllerFor('map'), queryParams)
    @setupToolbarController(@controllerFor('toolbar'), queryParams)

  setupMapController: (controller, queryParams)->
    properties = {}

    if queryParams.lat? && queryParams.lon?
      properties.center = new L.LatLng(queryParams.lat, queryParams.lon)

    if queryParams.zoom?
      properties.zoom = parseInt(queryParams.zoom, 10)

    controller.setProperties(properties)

  setupToolbarController: (controller, queryParams)->
    properties = {}

    if queryParams.q?
      properties.searchString = queryParams.q

    if queryParams.status?
      statusFilters = []

      if queryParams.status isnt true
        statusFilters = queryParams.status.split(',')

      properties.statusFilters = statusFilters

    controller.setProperties(properties)

    @store.findAll('category').then (categories)->
      controller.set('content', categories)

      if queryParams.categories?
        activeCategoryIdentifiers = queryParams.categories.split(',')

        controller.forEach (category) ->
          category.set('isActive', activeCategoryIdentifiers.contains(category.get('identifier')))

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

      if @_previousBounds?
        paddedBounds = @_previousBounds.pad(@boundsRatioBuffer)

        if paddedBounds.contains(bounds)
          return

      @send('updateNodes', bounds)

    layerChanged: (layer)->
      if layer?
        bounds = layer.getBounds()

        @send('updateNodes', bounds)

    updateNodes: (bounds)->
      self = @
      currentRequestCount = ++self._nodeRequestCounter
      self._previousBounds = bounds

      mapController = @controllerFor('map')
      queryParams = @get('queryParams')
      mapController.set('isLoading', true)

      @store.findQuery('node', bbox: bounds.toBBoxString()).then (nodes)->
        if currentRequestCount != self._nodeRequestCounter
          return

        mapController.clear()
        mapController.addObjects(nodes)
        mapController.set('isLoading', false)

        if queryParams.node_id?
          mapController.set('poppingNode', mapController.findBy('id', queryParams.node_id))

        self._nodeRequestCounter = 0

    popupOpened: ()->
      @send('permalink')

    popupClosed: ()->
      @send('permalink')

    toggleStatusFilter: ()->
      @send('permalink')

    toggleIsActive: ()->
      @send('permalink')

    permalink: ()->
      # Create permalink when every is in sync
      Ember.run.sync()

      mapController = @controllerFor('map')
      toolbarController = @controllerFor('toolbar')

      queryParams = {}

      center = mapController.get('center')
      poppingNode = mapController.get('poppingNode')
      statusFilters = toolbarController.get('statusFilters')
      searchString = toolbarController.get('searchString')
      categoriesFilters = toolbarController.get('activeCategories').mapBy('identifier')

      queryParams.zoom = mapController.get('zoom')
      queryParams.lat = center.lat
      queryParams.lon = center.lng

      if searchString?
        queryParams.q = searchString

      queryParams.node_id = poppingNode?.get('id')
      queryParams.status = if statusFilters.length < 4 then statusFilters.join(',') else null
      queryParams.categories =
        if toolbarController.get('length') > categoriesFilters.length
        then categoriesFilters.join(',')
        else null

      @replaceWith('index', queryParams: queryParams)