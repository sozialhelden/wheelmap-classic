
Wheelmap.LocateMixin = Ember.Mixin.create
  _createLayer: ()->
    @_super()
    L.control.locate().addTo(@_layer)

Wheelmap.SpinMixin = Ember.Mixin.create
  spinner: null,
  spinning: 0

  spin: (state)->
    if state
      unless @spinner?
        @spinner = new Spinner().spin(@get('element'));

      @spinning++
    else
      @spinning--

      if @spinning <= 0 and @spinner?
        @spinner.stop()
        @spinner = null

Wheelmap.TileLayer = EmberLeaflet.TileLayer.extend
  tileUrl: 'http://{s}.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/{z}/{x}/{y}.png256'
  options:
    maxZoom: 19
    minZoom: 2
    attribution: 'Data: <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, Icons: CC-By-SA <a href="http://mapicons.nicolasmollet.com/">Nicolas Mollet</a>'
    detectRetina: true

Wheelmap.MarkerLayer = EmberLeaflet.Layer.extend
  mapBinding: 'parentLayer'
  mapControllerBinding: 'map.controller'
  toolbarControllerBinding: 'mapController.controllers.toolbar'
  poppingNodeBinding: 'mapController.poppingNode'
  lastLoadedBounds: null
  lastActiveStatusFilters: null
  lastActiveCategories: null
  $nodeView: null
  $nodeViewPrev: null

  geoJSONLayer: (()->
    new L.GeoJSON null,
      pointToLayer: $.proxy(@.pointToLayer, @)
  ).property()

  filterLayers: ()->
    @_filterLayers()

  didCreateLayer: ()->
    @_boundsDidChange()

    map = @get('map.layer')

    if map?
      map.on('click', @_onClick, @)

  requestData: (bounds)->
    that = @

    if that.lastLoadedBounds? and that.lastLoadedBounds.contains(bounds)
      # Does it move far enough?
      return

    map = that.get('map')
    map.set('isLoading', true)

    request = $.ajax '/nodes.geojson',
      data:
        bbox: bounds.toBBoxString()

    request.then (data)->
      Ember.run.once(that, 'closePopup')
      Ember.run.once(that, 'replaceData', data)

      that.lastLoadedBounds = bounds.pad(Wheelmap.MarkerLayer.BOUNDS_CONTAINS_BUFFER)
      map.set('isLoading', false)

  replaceData: (data)->
    geoJSONLayer = @get('geoJSONLayer')
    geoJSONLayer.clearLayers()
    geoJSONLayer.addData(data)

    @openPopup()
    @filterLayers()

  pointToLayer: (featureData, latlng)->
    layer = Wheelmap.MarkerLayer.createLayer(latlng, featureData.properties)
    layer.on('click', @_onClick, @)

  sendPopupAction: (nodeId)->
    mapController = @get('mapController')

    if nodeId?
      mapController.send('openPopup', nodeId)
    else
      mapController.send('closePopup')

  openPopup: (()->
    poppingNode = @get('poppingNode')

    if poppingNode?
      Ember.run.scheduleOnce('afterRender', @, @_openPopup, poppingNode.get('id'))
      Ember.run.scheduleOnce('afterRender', poppingNode, 'send', 'opened')
  ).observes('poppingNode.id')

  closePopup: (()->
    poppingNode = @get('poppingNode')

    if poppingNode?
      @_closePopup(poppingNode.get('id'))
      poppingNode.send('closed')
      Ember.run.once(@, @filterLayers)
  ).observesBefore('poppingNode.id')

  getLayer: (nodeId)->
    @get('geoJSONLayer').getLayers().findBy('feature.properties.id', parseInt(nodeId, 10))

  _openPopup: (nodeId)->
    map = @get('map.layer')
    marker = @getLayer(nodeId)

    if marker?
      marker.setZIndexOffset(marker.options.riseOffset)

      @$nodeView = $('.node-popup-view')
      @$nodeViewPrev = @$nodeView.prev()

      map.openPopup @$nodeView[0], marker.getLatLng(),
        className: 'node-popup'
        offset: [0, -24]
        closeOnClick: false
        closeButton: false

  _closePopup: (nodeId)->
    map = @get('map.layer')
    marker = @getLayer(nodeId)

    if marker?
      marker.setZIndexOffset(0)

      @$nodeViewPrev.after(@$nodeView)
      @$nodeView = null
      @$nodeViewPrev = null

      map.closePopup()

  _onClick: (event)->
    nodeId = null

    if event.target instanceof L.Marker
      nodeId = event.target.feature.properties.id

    @sendPopupAction(nodeId)

  _newLayer: ()->
    @get('geoJSONLayer')

  _filterLayers: ()->
    layers = @get('geoJSONLayer').getLayers()

    if layers.length == 0
      return

    activeStatusFilters = @get('toolbarController.activeStatusFilters').getEach('key')
    activeCategories = @get('toolbarController.activeCategories').getEach('identifier')
    poppingNode = @get('poppingNode')

    for layer in layers
      properties = layer.feature.properties
      visible = activeStatusFilters.contains(properties.wheelchair) and
        activeCategories.contains(properties.category)

      if poppingNode? and properties.id is parseInt(poppingNode.get('id'), 10)
        visible = true

      $(layer._icon).toggle(visible)

    return

  _statusFilterDidChange: (()->
    if Ember.compare(@lastActiveStatusFilters, @get('toolbarController.activeStatusFilters')) is 0
      return

    @lastActiveStatusFilters = @get('toolbarController.activeStatusFilters')
    @filterLayers()
  ).observes('toolbarController.activeStatusFilters.@each')

  _categoriesDidChange: (()->
    if Ember.compare(@lastActiveCategories, @get('toolbarController.activeCategories')) is 0
      return

    @lastActiveCategories = @get('toolbarController.activeCategories')
    @filterLayers()
  ).observes('toolbarController.activeCategories.@each')

  _boundsDidChange: (()->
    Ember.run.debounce(@, 'requestData', @get('map.bounds'), 200)
  ).observes('map.bounds')

  _zoomDidChange: (()->
    # When zooming reset last loaded bounds to load nodes in any case
    @lastLoadedBounds = null
  ).observes('map.zoom')

  _poppingNodeWheelchairDidChange: (()->
    poppingNode = @get('poppingNode')

    unless poppingNode?
      return

    marker = @getLayer(poppingNode.get('id'))
    options =
      wheelchair: poppingNode.get('wheelchair')
      icon: poppingNode.get('icon')

    icon = Wheelmap.MarkerLayer.createIcon(options)

    $.extend(marker.feature.properties, options)
    marker.setIcon(icon)
  ).observes('poppingNode.wheelchair')

Wheelmap.MarkerLayer.reopenClass
  BOUNDS_CONTAINS_BUFFER: 0.41

  createLayer: (latlng, options)->
    new L.Marker latlng,
      riseOnHover: true
      icon: Wheelmap.MarkerLayer.createIcon(options)

  createIcon: (options)->
    markerClassName = 'marker-wheelchair-' + options.wheelchair
    iconClassName = 'marker-icon marker-icon-' + options.icon

    new L.DivIcon
      iconSize: null
      iconAnchor: null
      popupAnchor: null
      className: markerClassName
      html: "<div class=\"#{iconClassName}\"></div>"

Wheelmap.MapView = EmberLeaflet.MapView.extend Wheelmap.LocateMixin, Wheelmap.SpinMixin,
  childLayers: [ Wheelmap.TileLayer, Wheelmap.MarkerLayer ]
  options:
    trackResize: true

  openedPopup: null

  centerBinding: 'controller.center'
  zoomBinding: 'controller.zoom'

  didInsertElement: ()->
    Ember.run.sync() # Needed for bindings to controller

    @_super()

  bounds: ((key, bounds)->
    layer = @get('layer')

    if !layer?
      return

    if arguments.length > 1
      layer.fitBounds(bounds)

    layer.getBounds()
  ).property().volatile()

  boundsChanging: (()->
    if @get('isMoving') or @get('isZooming')
      return

    @notifyPropertyChange('bounds')
    @get('controller').send('boundsChanged', @get('bounds'))
  ).observes('isMoving', 'isZooming')

  loading: (()->
    @spin(@get('isLoading'))
  ).observes('isLoading')