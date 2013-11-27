Wheelmap.IndexRoute = Ember.Route.extend
  boundsRatioBuffer: 0.41

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
      properties.set('searchString', queryParams.q)

    if queryParams.status?
      statusFilters = controller.get('statusFilters')

      if queryParams.status isnt true
        statusFilters.replace(0, statusFilters.get('length'), queryParams.status.split(','))
      else
        statusFilters.clear()

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
      #@send('updateNodes', bounds)

    moving: (isMoving, bounds)->
      if isMoving # Only reload when moving is finished
        return

      @send('permalink')

    popupOpened: ()->
      @send('permalink')

    popupClosed: ()->
      @send('permalink')

    toggleStatusFilter: ()->
      @send('permalink')

    toggleCategoryIsActive: ()->
      @send('permalink')

    toggleAllCategoriesAreActive: ()->
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

      queryParams.status = false

      if statusFilters.length == 0
        queryParams.status = true
      else if statusFilters.length < 4
        queryParams.status = statusFilters.join(',')

      queryParams.categories =
        if toolbarController.get('length') > categoriesFilters.length
        then categoriesFilters.join(',')
        else false

      @transitionTo('index', queryParams: queryParams)