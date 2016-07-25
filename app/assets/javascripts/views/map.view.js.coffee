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
        @spinning = 0

Wheelmap.TileLayer = EmberLeaflet.TileLayer.extend
  tileUrl: (()->
    "//{s}.tiles.mapbox.com/v4/sozialhelden.map-iqt6py1k/{z}/{x}/{y}#{if L.Browser.retina then '@2x' else ''}.png64?" +
      "access_token=pk.eyJ1Ijoic296aWFsaGVsZGVuIiwiYSI6IldvNHpkUUkifQ.5lLzFYw4MmAUkqLMoEcI3g"
  ).property()
  options:
    maxZoom: 19
    minZoom: 2
    attribution: 'Data: <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, Icons: CC-By-SA <a href="https://mapicons.mapsmarker.com/about/license/">Maps Icons Collection</a>'

Wheelmap.MarkerLayer = EmberLeaflet.Layer.extend
  mapBinding: 'parentLayer'
  mapControllerBinding: 'map.controller'
  toolbarControllerBinding: 'mapController.controllers.toolbar'
  providerIdBinding: 'mapController.widget.provider_id'
  poppingNodeBinding: 'mapController.poppingNode'
  nodeIdBinding: 'mapController.nodeId',
  debugBinding: 'mapController.debug',
  lastLoadedBounds: null
  lastActiveStatusFilters: null
  lastActiveToiletFilters: null
  lastActiveCategories: null
  $nodeView: null
  $nodeViewPrev: null
  popupNodeId: null

  geoJSONLayer: (()->
    tileUrl = '/nodes.geojson?z={z}&x={x}&y={y}&limit=25';

    nodeId = @get('nodeId')

    if nodeId?
      tileUrl += "&node_id=#{parseInt(nodeId, 10)}"

    if @get('debug')
      tileUrl += '&debug'
      
    providerId = @get('providerId')

    if providerId?
      tileUrl += '&' + providerId;

    that = @
    map = @get('map')

    options =
      maxZoom: 19
      minZoom: 2
      unloadInvisibleTiles: true
      pointToLayer: $.proxy(@pointToLayer, @)

    tileLayer = new GeoJSONTileLayer(tileUrl, options)

    tileLayer.on 'tileloadstart', ->
      map.spin(true)

    tileLayer.on 'tileload', (event) ->
      that.filterLayers(event.tile.layer.getLayers())
      that.openPopup()
      map.spin(false)

    tileLayer.on 'tileunload', (event)->
      # Stop spinning only if tile request was aborted (map moved or zoomed)
      map.spin(false) if event.tile.request.readyState != 4
  ).property()

  didCreateLayer: ()->
    map = @get('map.layer')

    if map?
      # Needed for starting own popup opening process when marker were clicked
      map.on('click', @_onClick, @)

    return

  pointToLayer: (featureData, latlng)->
    layer = Wheelmap.MarkerLayer.createLayer(latlng, featureData.properties)
    layer.on('click', @_onClick, @)

  sendPopupAction: (nodeId)->
    mapController = @get('mapController')

    if nodeId?
      # @TODO add this only for mobile devices with lower bandwidth
      # @get('map').set('isLoading', true)
      mapController.send('openPopup', nodeId)
    else
      mapController.send('closePopup')

  openPopup: (()->
    poppingNode = @get('poppingNode')

    if poppingNode?
      nodeId = poppingNode.get('id')

      if @popupNodeId is nodeId
        # Node popup allready open
        return

      @popupNodeId = nodeId

      Ember.run.scheduleOnce('afterRender', @, @_openPopup, nodeId)
      # @TODO add this only for mobile devices with lower bandwidth
      # Ember.run.scheduleOnce('afterRender', @get('map'), 'set', 'isLoading', false)
      Ember.run.scheduleOnce('afterRender', poppingNode, 'send', 'opened')
  ).observes('poppingNode.id')

  closePopup: (()->
    poppingNode = @get('poppingNode')

    if poppingNode?
      @_closePopup(poppingNode.get('id'))
      @popupNodeId = null
      poppingNode.send('closed')
      Ember.run.once(@, @filterLayers, @get('geoJSONLayer').getLayers())
  ).observesBefore('poppingNode.id')

  getLayer: (nodeId)->
    @get('geoJSONLayer').getLayers().findBy('feature.properties.id', parseInt(nodeId, 10))

  getViewElement: ()->
    unless @$nodeView?
      @$nodeView = $('.node-popup-view')
      @$nodeViewPrev = @$nodeView.prev()

    @$nodeView[0]

  resetViewElement: ()->
    if @$nodeView? and @$nodeViewPrev?
      @$nodeViewPrev.after(@$nodeView)

      @$nodeView = null
      @$nodeViewPrev = null

  _openPopup: (nodeId)->
    marker = @getLayer(nodeId)

    unless marker?
      return

    map = @get('map.layer')

    marker.setZIndexOffset(marker.options.riseOffset)
    viewElement = @getViewElement()

    map.openPopup viewElement, marker.getLatLng(),
      className: 'node-popup'
      offset: [0, -24]
      closeOnClick: false
      closeButton: false

  _closePopup: (nodeId)->
    @getLayer(nodeId)?.setZIndexOffset(0)
    @resetViewElement()
    @get('map.layer').closePopup()

  _onClick: (event)->
    nodeId = null

    if event.target instanceof L.Marker
      nodeId = event.target.feature.properties.id

    @sendPopupAction(nodeId)

  _newLayer: ()->
    @get('geoJSONLayer')

  filterLayers: (layers)->
    if layers.length == 0
      return

    activeStatusFilters = @get('toolbarController.activeStatusFilters').getEach('key')
    activeToiletFilters = @get('toolbarController.activeToiletFilters').getEach('key')
    activeCategories = @get('toolbarController.activeCategories').getEach('identifier')
    poppingNode = @get('poppingNode')

    for layer in layers
      properties = layer.feature.properties
      visible = activeStatusFilters.contains(properties.wheelchair) and
        activeToiletFilters.contains(properties.wheelchair_toilet) and
        activeCategories.contains(properties.category)

      if poppingNode? and properties.id is parseInt(poppingNode.get('id'), 10)
        visible = true

      $(layer._icon).toggle(visible)

    return

  _statusFilterDidChange: (()->
    if Ember.compare(@lastActiveStatusFilters, @get('toolbarController.activeStatusFilters')) is 0
      return

    @lastActiveStatusFilters = @get('toolbarController.activeStatusFilters')
    @filterLayers(@get('geoJSONLayer').getLayers())
  ).observes('toolbarController.activeStatusFilters.@each')

  _toiletFilterDidChange: (()->
    if Ember.compare(@lastActiveToiletFilters, @get('toolbarController.activeToiletFilters')) is 0
      return

    @lastActiveToiletFilters = @get('toolbarController.activeToiletFilters')
    @filterLayers(@get('geoJSONLayer').getLayers())
  ).observes('toolbarController.activeToiletFilters.@each')

  _categoriesDidChange: (()->
    if Ember.compare(@lastActiveCategories, @get('toolbarController.activeCategories')) is 0
      return

    @lastActiveCategories = @get('toolbarController.activeCategories')
    @filterLayers(@get('geoJSONLayer').getLayers())
  ).observes('toolbarController.activeCategories.@each')

  _poppingNodeWheelchairDidChange: (()->
    poppingNode = @get('poppingNode')

    unless poppingNode?
      return

    marker = @getLayer(poppingNode.get('id'))

    if marker?
      options = poppingNode.getProperties('wheelchair', 'icon', 'sponsor')
      icon = Wheelmap.MarkerLayer.createIcon(options)

      $.extend(marker.feature.properties, options)
      marker.setIcon(icon)
  ).observes('poppingNode.wheelchair')

Wheelmap.MarkerLayer.reopenClass
  BOUNDS_CONTAINS_BUFFER: 0.41

  createLayer: (latlng, options)->
    new L.Marker latlng,
      title: options.name
      riseOnHover: true
      icon: Wheelmap.MarkerLayer.createIcon(options)

  createIcon: (options)->
    markerClassName = 'marker-wheelchair-' + options.wheelchair
    html = ''

    unless options.sponsor?
      iconClassName = 'marker-icon marker-icon-' + options.icon
      html = "<div class=\"#{iconClassName}\"></div>"
    else
      html = "<img class=\"marker-sponsor-image\" src=\"#{options.sponsor}\" alt=\"#{options.name}\" />"

    new L.DivIcon
      iconSize: null
      iconAnchor: null
      popupAnchor: null
      className: markerClassName
      html: html

Wheelmap.MapView = EmberLeaflet.MapView.extend Wheelmap.LocateMixin, Wheelmap.SpinMixin,
  childLayers: [ Wheelmap.TileLayer, Wheelmap.MarkerLayer ]
  options:
    trackResize: true
    maxZoom: 19
    scrollWheelZoom: !Ember.ENV.WIDGET
    touchZoom: !Ember.ENV.WIDGET

  openedPopup: null

  center: Ember.computed.oneWay('controller.center')
  zoom: Ember.computed.oneWay('controller.zoom')

  didInsertElement: ()->
    Ember.run.sync() # Needed for bindings to controller

    @_super()

    @get('layer')?.attributionControl.setPrefix('')
    @addEmbedLink()
    @addZoomAlert()

  addEmbedLink: ->
    layer = @get('layer')

    unless layer? && Ember.ENV.WIDGET
      return

    embedLink = L.control(position: 'topright')

    embedLink.onAdd = (map)->
      control = L.DomUtil.create('div', 'leaflet-embed-link leaflet-bar')
      link = L.DomUtil.create('a', '', control)
      link.href = '#'
      link.innerHTML = I18n.t('home.index.embed_link')
      link.target = '_blank'

      link.addEventListener 'click', (event)->
        event.preventDefault()
        url = window.location.origin + '/map' + window.location.hash
        window.open(url, '_blank')

      control

    embedLink.addTo(layer)

  addZoomAlert: ->
    layer = @get('layer')

    unless layer? && !Ember.ENV.WIDGET
      return

    zoomAlert = L.control(position: 'topleft')

    zoomAlert.onAdd = (map)->
      control = L.DomUtil.create('div', 'leaflet-zoom-alert leaflet-bar')

      link = L.DomUtil.create('a', '', control)
      link.href = '#'

      icon = L.DomUtil.create('i', 'icon-exclamation-sign', link)
      text = L.DomUtil.create('span', '', link)
      text.innerHTML = ' Zoom in closer to see all places.'

      toggleControl = ->
        # Remove control when on highest zoom level.
        maxZoom = layer.getZoom() == layer.getMaxZoom()
        control.style.display = if maxZoom then 'none' else ''
        return

      layer.on('zoomend', toggleControl)
      toggleControl()

      link.addEventListener 'click', (event)->
        event.preventDefault()
        layer.setZoom(layer.getMaxZoom())

      control

    zoomAlert.addTo(layer)

  bboxDidChange: (->
    layer = @get('layer')

    unless layer?
      return

    bbox = @get('controller.bbox')

    if bbox?
      layer.fitBounds(bbox)
  ).observes('controller.bbox', 'layer')

  isMovingDidChange: (->
    if @get('isMoving')
      return

    controller = @get('controller')
    controller.set('center', @get('center'))
  ).observes('isMoving')

  isZoomingDidChange: (->
    if @get('isZooming')
      return

    controller = @get('controller')
    controller.set('zoom', @get('zoom'))
  ).observes('isZooming')
