Wheelmap.MapSessionControllerMixin = Ember.Mixin.create
  needs: ['toolbar', 'map']
  queryParams: ['status', 'categories', 'q', 'bbox', 'lat', 'lon', 'zoom', 'toilet']

  widget: Ember.ENV.WIDGET
  latBinding: 'controllers.map.lat'
  lonBinding: 'controllers.map.lon'
  zoomBinding: 'controllers.map.zoom'
  qBinding: 'controllers.toolbar.searchString'
  bbox: null

  status: Ember.computed.defaultTo('lastStatusFilters')
  toilet: Ember.computed.defaultTo('lastToiletFilters')
  categories: Ember.computed.defaultTo('lastCategoryFilters')

  lastStatusFilters: Ember.aliasMethod('retrieveCookieValue')
  lastToiletFilters: Ember.aliasMethod('retrieveCookieValue')
  lastCategoryFilters: Ember.aliasMethod('retrieveCookieValue')

  retrieveCookieValue: ((key, value)->
    lastStatusFilters = $.cookie(key.decamelize(), value)

    unless lastStatusFilters?
      return null

    try
      keys = JSON.parse(lastStatusFilters)
    catch e
      # Catch JSON syntax errors in invalid cookie value
      unless e instanceof SyntaxError
        throw e

      return null

    return keys.join(Wheelmap.MapSessionControllerMixin.SEPERATOR)
  ).property()

  activeStatusFiltersDidChange: (->
    lastStatusFilters = null
    activeStatusFilters = @get('controllers.toolbar.activeStatusFilters')

    if activeStatusFilters.get('length') isnt @get('controllers.toolbar.statusFilters.length')
      lastStatusFilters = JSON.stringify(activeStatusFilters.getEach('key'))

    @set('lastStatusFilters', lastStatusFilters)
  ).observes('controllers.toolbar.activeStatusFilters')

  activeCategoriesDidChange: (->
    lastCategoryFilters = null
    activeCategoryFilters = @get('controllers.toolbar.activeCategories')

    if activeCategoryFilters.get('length') isnt @get('controllers.toolbar.length')
      lastCategoryFilters = JSON.stringify(activeCategoryFilters.getEach('identifier'))

    @set('lastCategoryFilters', lastCategoryFilters)
  ).observes('controllers.toolbar.activeCategories')
  
  activeToiletFiltersDidChange: (->
    lastToiletFilters = null
    activeToiletFilters = @get('controllers.toolbar.activeToiletFilters')

    if activeToiletFilters.get('length') isnt @get('controllers.toolbar.toiletFilters.length')
      lastToiletFilters = JSON.stringify(activeToiletFilters.getEach('key'))

    @set('lastToiletFilters', lastToiletFilters)
  ).observes('controllers.toolbar.activeToiletFilters')

  queryCategoriesDidChange: (->
    queryCategories = @get('categories')
    categories = @get('controllers.toolbar')

    if categories.get('length') is 0
      return

    activeCategories = do ->
      unless queryCategories?
        return categories

      if queryCategories is true
        return []

      keys = queryCategories.split(Wheelmap.MapSessionControllerMixin.SEPERATOR)

      categories.filter (category)->
        keys.contains(category.get('identifier'))

    @set('controllers.toolbar.activeCategories', activeCategories)
  ).observes('controllers.toolbar.@each', 'categories')

  queryStatusDidChange: (->
    queryStatus = @get('status')
    statusFilters = @get('controllers.toolbar.statusFilters')

    activeStatusFilters = do ->
      unless queryStatus?
        return statusFilters

      if queryStatus is true
        return []

      keys = queryStatus.split(Wheelmap.MapSessionControllerMixin.SEPERATOR)

      statusFilters.filter (status)->
        keys.contains(status.get('key'))

    @set('controllers.toolbar.activeStatusFilters', activeStatusFilters)
  ).observes('controllers.toolbar.statusFilters.@each', 'status')

  queryToiletDidChange: (->
    queryToilet = @get('toilet')
    toiletFilters = @get('controllers.toolbar.toiletFilters')

    actuveToiletFilters = do ->
      unless queryToilet?
        return toiletFilters

      if queryToilet is true
        return []

      keys = queryToilet.split(Wheelmap.MapSessionControllerMixin.SEPERATOR)

      toiletFilters.filter (status)->
        keys.contains(status.get('key'))

    @set('controllers.toolbar.activeToiletFilters', actuveToiletFilters)
  ).observes('controllers.toolbar.toiletFilters.@each', 'toilet')

  queryBboxDidChange: (->
    bbox = @get('bbox')

    unless bbox
      return

    bboxPart = bbox.split(',')

    if bboxPart.length == 4
      @set('controllers.map.bbox', L.latLngBounds(L.latLng(bboxPart[0], bboxPart[2]), L.latLng(bboxPart[1], bboxPart[3])))

    @set('bbox', null)
  ).observes('bbox')

  actions:
    transitionToActiveCategories: ->
      activeCategories = @get('controllers.toolbar.activeCategories')
      queryCategories = null

      if activeCategories.get('length') isnt @get('controllers.toolbar.length')
        queryCategories = activeCategories.getEach('identifier').join(Wheelmap.MapSessionControllerMixin.SEPERATOR)

      this.transitionToRoute
        queryParams:
          categories: queryCategories

    transitionToActiveStatusFilter: ->
      activeStatusFilters = @get('controllers.toolbar.activeStatusFilters')
      queryStatusFilters = null

      if activeStatusFilters.get('length') isnt @get('controllers.toolbar.statusFilters.length')
        queryStatusFilters = activeStatusFilters.getEach('key').join(Wheelmap.MapSessionControllerMixin.SEPERATOR)

      this.transitionToRoute
        queryParams:
          status: queryStatusFilters

    transitionToActiveToiletFilter: ->
      activeToiletFilters = @get('controllers.toolbar.activeToiletFilters')
      queryToiletFilters = null

      if activeToiletFilters.get('length') isnt @get('controllers.toolbar.toiletFilters.length')
        queryToiletFilters = activeToiletFilters.getEach('key').join(Wheelmap.MapSessionControllerMixin.SEPERATOR)

      this.transitionToRoute
        queryParams:
          toilet: queryToiletFilters

Wheelmap.MapSessionControllerMixin.SEPERATOR = '.'

Wheelmap.MapController = Ember.Controller.extend
  needs: 'toolbar'
  poppingNode: null
  widget: Ember.ENV.WIDGET

  center: null
  zoom: 14
  latBinding: 'center.lat'
  lonBinding: 'center.lng'

  init: ()->
    @_super()

    properties = @propertiesFromCookie()

    @setProperties(properties)

  propertiesFromCookie: ->
    properties =
      center:
        lat: if $.cookie('last_lat')? then $.cookie('last_lat') else 52.50521
        lon: if $.cookie('last_lon')? then $.cookie('last_lon') else 13.4231

    if $.cookie('last_zoom')?
      properties.zoom = parseInt($.cookie('last_zoom'), 10)

    properties

  mapViewDidChange: (()->
    # Don't store the latlng and zoom in the cookie if we are in the embed layout
    if @get('widget')?
      return

    center = @get('center')

    $.cookie('last_lat', center.lat, { path: '/' } )
    $.cookie('last_lon', center.lng, { path: '/' } )
    $.cookie('last_zoom', @get('zoom'), { path: '/' })
  ).observes('center', 'zoom')

  actions:
    openPopup: (nodeId)->
      @transitionToRoute('popup', nodeId)

    closePopup: ->
      @transitionToRoute('index')