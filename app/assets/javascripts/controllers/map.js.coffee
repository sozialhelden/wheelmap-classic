Wheelmap.MapController = Ember.ArrayController.extend
  needs: 'toolbar'
  itemController: 'node'
  center: null
  zoom: null
  isLoading: false
  _poppingNodeId: null # id needed for post setting popping node
  statusFiltersBinding: 'controllers.toolbar.statusFilters'

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

  poppingNode: ((key, nodeId)->
    poppingNode = @findBy('isPopping') || null

    if arguments.length > 1
      newPoppingNode = null

      if nodeId?
        newPoppingNode = @findBy('id', nodeId) || null
        @_poppingNodeId = nodeId

        if newPoppingNode?
          @_poppingNodeId = null

          if newPoppingNode is poppingNode
            return poppingNode

          newPoppingNode.set('isPopping', true)

      if poppingNode?
        poppingNode.set('isPopping', false)

      return newPoppingNode

    return poppingNode
  ).property('@each.isPopping')

  contentChanged: (()->
    if @_poppingNodeId?
      @set('poppingNode', @_poppingNodeId)
  ).observes('@each')

  filterNodes: (()->
    self = @

    @forEach (node)->
      node.set('isVisible', self.get('statusFilters').contains(node.get('wheelchair')))
  ).observes('@each', '@each.wheelchair', 'statusFilters.@each')