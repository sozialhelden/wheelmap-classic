Wheelmap.MapController = Ember.ArrayController.extend
  needs: 'toolbar'
  itemController: 'node'
  center: null
  zoom: null
  poppingNode: null

  init: ()->
    @_super()

    properties =
      center: new L.LatLng(52.50521, 13.4231)
      zoom: 14

    if $.cookie('last_lat')? && $.cookie('last_lon')?
      properties.center = L.latLng($.cookie('last_lat'), $.cookie('last_lon'))

    if $.cookie('last_zoom')?
      properties.zoom = parseInt($.cookie('last_zoom'), 10)

    @setProperties(properties)

  mapChanged: (()->
    center = @get('center')

    $.cookie('last_lat', center.lat, { path: '/' } )
    $.cookie('last_lon', center.lng, { path: '/' } )
    $.cookie('last_zoom', @get('zoom'), { path: '/' })
  ).observes('center', 'zoom')

  _generateQueryParams: ()->
    toolbarController = @get('controllers.toolbar')

    queryParams = {}

    center = @get('center')
    poppingNode = @get('poppingNode')
    statusFilters = toolbarController.get('activeStatusFilters').getEach('key')
    searchString = toolbarController.get('searchString')
    categoriesFilters = toolbarController.get('activeCategories').getEach('identifier')

    queryParams.zoom = @get('zoom')
    queryParams.lat = center.lat
    queryParams.lon = center.lng

    if searchString?
      queryParams.q = searchString

    queryParams.status = false

    if statusFilters.length == 0
      queryParams.status = true
    else if statusFilters.length < 4
      queryParams.status = statusFilters.join(',')

    queryParams.categories =
      if toolbarController.get('length') > categoriesFilters.length
      then categoriesFilters.join(',')
      else false

    queryParams

  _permalink: ()->
    @replaceRoute(queryParams: @_generateQueryParams())

  actions:
    openPopup: (nodeId)->
      @transitionToRoute('popup', nodeId)

    closePopup: ()->
      @transitionToRoute('index')

    boundsChanged: (bounds)->
      @send('permalink')

    permalink: ()->
      Ember.run.debounce(@, '_permalink', 100)