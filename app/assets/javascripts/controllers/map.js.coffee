Wheelmap.MapController = Ember.ArrayController.extend
  needs: 'toolbar'
  itemController: 'node'
  center: null
  zoom: null
  isLoading: false
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

  actions:
    popupClosed: (node)->
      @set('poppingNode', null)
      node.send('popupClosed')
      return true

    popupOpened: (node)->
      @set('poppingNode', node)
      node.send('popupOpened')
      return true