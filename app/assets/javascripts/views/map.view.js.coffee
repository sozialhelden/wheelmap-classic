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
  BOUNDS_CONTAINS_BUFFER: 0.41

  mapBinding: 'parentLayer'
  mapControllerBinding: 'map.controller'
  toolbarControllerBinding: 'mapController.controllers.toolbar'
  lastLoadedBounds: null
  lastActiveStatusFilters: null
  lastActiveCategories: null

  geoJSONLayer: (()->
    new L.GeoJSON null,
      pointToLayer: $.proxy(@.pointToLayer, @)
  ).property()

  statusFilterDidChange: (()->
    if Ember.compare(@lastActiveStatusFilters, @get('toolbarController.activeStatusFilters')) is 0
      return

    @lastActiveStatusFilters = @get('toolbarController.activeStatusFilters')
    @filterLayers()
  ).observes('toolbarController.activeStatusFilters.@each')

  categoriesDidChange: (()->
    if Ember.compare(@lastActiveCategories, @get('toolbarController.activeCategories')) is 0
      return

    @lastActiveCategories = @get('toolbarController.activeCategories')
    @filterLayers()
  ).observes('toolbarController.activeCategories.@each')

  filterLayers: ()->
    @_filterLayers()

  boundsDidChange: (()->
    Ember.run.debounce(@, 'requestData', @get('map.bounds'), 200)
  ).observes('map.bounds')

  zoomDidChange: (()->
    # When zooming reset last loaded bounds, to load nodes in any case
    @lastLoadedBounds = null
  ).observes('map.zoom')

  didCreateLayer: ()->
    @boundsDidChange()

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
      Ember.run.once(that, 'replaceData', data)

      that.lastLoadedBounds = bounds.pad(that.BOUNDS_CONTAINS_BUFFER)
      map.set('isLoading', false)

  replaceData: (data)->
    geoJSONLayer = @get('geoJSONLayer')
    geoJSONLayer.clearLayers()
    geoJSONLayer.addData(data)

    @filterLayers()

  pointToLayer: (featureData, latlng)->
    layer = Wheelmap.MarkerLayer.createLayer(featureData, latlng)

    layer.on 'click', $.proxy(@onMarkerClick, @)

    return layer

  onMarkerClick: (event)->
    @get('mapController').send('openPopup', event.target.feature.properties.id)

  _newLayer: ()->
    @get('geoJSONLayer')

  _filterLayers: ()->
    layers = @get('geoJSONLayer').getLayers()

    if layers.length == 0
      return

    activeStatusFilters = @get('toolbarController.activeStatusFilters').getEach('key')
    activeCategories = @get('toolbarController.activeCategories').getEach('identifier')

    for layer in layers
      properties = layer.feature.properties
      visible = activeStatusFilters.contains(properties.wheelchair) and activeCategories.contains(properties.category)

      $(layer._icon).toggle(visible)

    return

Wheelmap.MarkerLayer.reopenClass
  createLayer: (featureData, latlng)->
    markerClassName = 'marker-wheelchair-' + featureData.properties.wheelchair
    iconClassName = 'marker-icon marker-icon-' + featureData.properties.icon

    new L.Marker latlng,
      riseOnHover: true
      icon: new L.DivIcon
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