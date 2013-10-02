Wheelmap = @Wheelmap

Wheelmap.LocateMixin = Ember.Mixin.create
  _createLayer: ()->
    @_super()
    L.control.locate().addTo(@_layer)

Wheelmap.TileLayer = EmberLeaflet.TileLayer.extend
  tileUrl: 'http://{s}.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/{z}/{x}/{y}.png256'
  options:
    maxZoom: 19
    minZoom: 2
    attribution: 'Data: <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, Icons: CC-By-SA <a href="http://mapicons.nicolasmollet.com/">Nicolas Mollet</a>'
    detectRetina: true

Wheelmap.MarkerLayer = EmberLeaflet.MarkerLayer.extend EmberLeaflet.PopupMixin,
  view: null

  popupOptions:
    offset: L.point(0, -20)

  popupContent: (()->
    if !@view?
      @view = @get('parentLayer').createChildView('map-popup')
      @view.set('context', @get('content'))
      @view.createElement()

    @view.get('element')
  ).property()

  willCreateLayer: ()->
    @set 'options',
      icon: new Wheelmap.MapIcon(@)
      riseOnHover: true

  visibilityChanged: (()->
    @get('$icon').toggleClass('hide', @get('content.isVisible'))
  ).observes('content.isVisible')

Wheelmap.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend
  contentBinding: 'controller'
  itemLayerClass: Wheelmap.MarkerLayer

Wheelmap.MapIcon = L.Icon.extend
  options: {}

  initialize: (markerLayer, options)->
    L.Icon.prototype.initialize.call(@, options)

    @markerLayer = markerLayer

  createIcon: ()->
    @view = @markerLayer.get('parentLayer').createChildView('map-marker')
    @view.set('context', @markerLayer.get('content'))
    @view.createElement()

    @view.get('element')

Wheelmap.MapMarkerView = Ember.View.extend
  templateName: 'map-marker'
  classNames: ['leaflet-marker-icon', 'leaflet-clickable', 'leaflet-zoom-animated']
  classNameBindings: ['wheelchairClass']
  attributeBindings: ['title']

  title: Ember.computed.alias('context.name')
  isVisible: Ember.computed.alias('context.isVisible')

  wheelchairClass: (()->
    'marker-wheelchair-' + @get('context.wheelchair')
  ).property('context.wheelchair')

  iconClass: (()->
    'marker-icon-' + @get('context.icon')
  ).property('context.icon')

Wheelmap.MapPopupView = Ember.View.extend
  templateName: 'map-popup'

Wheelmap.SpinMixin = Ember.Mixin.create
  spinner: null,
  spinning: 0

  spin: (state)->
    if state
      if !@spinner?
        @spinner = new Spinner().spin(@get('element'));

      @spinning++
    else
      @spinning--

      if @spinning <= 0 and @spinner?
        @spinner.stop()
        @spinner = null

Wheelmap.MapView = EmberLeaflet.MapView.extend Wheelmap.LocateMixin, Wheelmap.SpinMixin,
  childLayers: [ Wheelmap.TileLayer, Wheelmap.MarkerCollectionLayer ]
  options:
    trackResize: true

  centerBinding: 'controller.center'
  zoomBinding: 'controller.zoom'

  didInsertElement: ()->
    Ember.run.sync() # Needed for bindings to controller

    @_super()

  bounds: ((key, bounds)->
    layer = @get('layer')

    if !layer?
      return

    if bounds?
      layer.fitBounds(bounds)

    layer.getBounds()
  ).property()

  layerChanged: (()->
    @get('controller').send('layerChanged', @get('layer'))
  ).observes('layer')

  zooming: (()->
    @get('controller').send('zooming', @get('isZooming'), @get('bounds'))
  ).observes('isZooming')

  moving: (()->
    @get('controller').send('moving', @get('isMoving'), @get('bounds'))
  ).observes('isMoving')

  loading: (()->
    @spin(@get('controller.isLoading'))
  ).observes('controller.isLoading')