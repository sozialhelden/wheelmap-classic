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

  popup: (()->
    L.popup(@get('popupOptions'), @get('layer'))
  ).property('layer')

  popupView: (()->
    @createView('node-popup')
  ).property('content')

  markerView: (()->
    @createView('map-marker')
  ).property('content')

  popupOptions:
    className: 'node-popup'
    offset: [0, -20]

  popupContent: (()->
    view = @get('popupView')
    view.createElement()
    Wheelmap.ViewHelper.enterDom(view)
    view.get('element')
  ).property('popupView')

  willCreateLayer: ()->
    markerView = @get('markerView')

    @set 'options',
      icon: new Wheelmap.MapIcon(markerView)
      riseOnHover: true

  willDestroyLayer: ()->
    @get('layer').closePopup()
    @get('popupView').remove()

  didDestroyLayer: ()->
    Wheelmap.ViewHelper.exitDom(@get('markerView'))
    Wheelmap.ViewHelper.exitDom(@get('popupView'))

  addEventListeners: (()->
    layer = @get('layer')

    if layer?
      layer.bindPopup(@get('popup'), @get('popupOptions'))

      layer.on('popupopen', @didOpenPopup, @)
      layer.on('popupclose', @didClosePopup, @)
  ).observes('layer')

  removeEventListeners: (()->
    layer = @get('layer')

    if layer?
      layer.off('popupopen', @didOpenPopup, @)
      layer.off('popupclose', @didClosePopup, @)

      layer.unbindPopup()
  ).observesBefore('layer')

  didOpenPopup: (event)->
    @get('popup').setContent(@get('popupContent'))
    @set('isPopping', true)

  didClosePopup: (event)->
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

  createView: (name)->
    @get('parentLayer').container.lookupFactory('view:' + name).create
      controller: @get('content')

Wheelmap.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend
  contentBinding: 'controller.filteredNode'
  itemLayerClass: Wheelmap.MarkerLayer

Wheelmap.MapIcon = L.Icon.extend
  view: null
  options: {}

  initialize: (view, options)->
    L.Icon.prototype.initialize.call(@, options)

    @view = view

  createIcon: ()->
    view = @view

    view.createElement()
    Wheelmap.ViewHelper.enterDom(view)
    view.get('element')

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