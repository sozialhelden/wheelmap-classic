Wheelmap = @Wheelmap

Wheelmap.LocateMixin = Ember.Mixin.create
  _createLayer: ()->
    @_super()
    L.control.locate().addTo(@_layer)

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

Wheelmap.TileLayer = EmberLeaflet.TileLayer.extend
  tileUrl: 'http://{s}.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/{z}/{x}/{y}.png256'
  options:
    maxZoom: 19
    minZoom: 2
    attribution: 'Data: <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, Icons: CC-By-SA <a href="http://mapicons.nicolasmollet.com/">Nicolas Mollet</a>'
    detectRetina: true

Wheelmap.MarkerLayer = EmberLeaflet.MarkerLayer.extend
  isPoppingBinding: 'content.isPopping'

  popupView: (()->
    view = @createView('map-popup')
    Ember.View.states.inDOM.enter(view) # We need to do this manually, otherwise ember will prevent propagation of events important for leaflet
    view
  ).property()

  popupOptions:
    offset: L.point(0, -20)

  popupContent: (()->
    view = @get('popupView')
    view.createElement()
    view.get('element')
  ).property()

  willCreateLayer: ()->
    markerView = @createView('map-marker')

    @set 'options',
      icon: new Wheelmap.MapIcon(markerView)
      riseOnHover: true

  createView: (name)->
    viewClass = @get('parentLayer').container.lookupFactory('view:' + name)
    viewClass.create
      controller: @get('content')

  willDestroyLayer: ()->
    @get('layer').closePopup()
    @get('popupView').remove()

  addEventListeners: (()->
    layer = @get('layer')

    if layer?
      layer.bindPopup(@get('popupContent'), @get('popupOptions'))

      layer.on('popupopen', @onPopupOpen, @)
      layer.on('popupclose', @onPopupClose, @)
  ).observes('layer')

  removeEventListeners: (()->
    layer = @get('layer')

    if layer?
      layer.off('popupopen', @onPopupOpen, @)
      layer.off('popupclose', @onPopupClose, @)

      layer.unbindPopup()
  ).observesBefore('layer')

  onPopupOpen: (event)->
    @set('isPopping', true)

  onPopupClose: (event)->
    @set('isPopping', false)

  isPoppingChanged: (()->
    layer = @get('layer')

    if layer?
      if @get('isPopping')
        layer.openPopup()
      else
        layer.closePopup()

    @get('content').send('popping', @get('isPopping'))
  ).observes('isPopping')

Wheelmap.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend
  contentBinding: 'controller'
  itemLayerClass: Wheelmap.MarkerLayer

Wheelmap.MapIcon = L.Icon.extend
  view: null
  options: {}

  initialize: (view, options)->
    L.Icon.prototype.initialize.call(@, options)

    @view = view

  createIcon: ()->
    @view.createElement()
    Ember.View.states.inDOM.enter(@view)
    @view.get('element')

Wheelmap.MapMarkerView = Ember.View.extend
  templateName: 'map-marker'
  classNames: ['leaflet-marker-icon']
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

Wheelmap.MapView = EmberLeaflet.MapView.extend Wheelmap.LocateMixin, Wheelmap.SpinMixin,
  childLayers: [ Wheelmap.TileLayer, Wheelmap.MarkerCollectionLayer ]
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