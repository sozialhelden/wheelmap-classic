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
      zoom: 12

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

  _permalink: ()->
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

    @replaceRoute(queryParams: queryParams)

  actions:
    popupClosed: (node)->
      @set('poppingNode', null)
      node.send('popupClosed')
      @send('permalink')

    popupOpened: (node)->
      @set('poppingNode', node)
      node.send('popupOpened')
      @send('permalink')

    boundsChanging: (bounds)->
      @send('permalink')

    permalink: ()->
      Ember.run.debounce(@, '_permalink', 100)