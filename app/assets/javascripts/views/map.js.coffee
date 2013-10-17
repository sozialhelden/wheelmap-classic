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
    self = @
    popup = L.popup(@get('popupOptions'), @get('layer'))
    oldOnAdd = popup.onAdd
    oldOnRemove = popup.onRemove

    # @TODO find a better way to add events here

    popup.onAdd = ()->
      self.willOpenPopup(@)
      oldOnAdd.apply(@, arguments)
      self.didOpenPopup(@)

    popup.onRemove = ()->
      self.willClosePopup(@)
      oldOnRemove.apply(@, arguments)
      self.didClosePopup(@)

    popup
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

  willCreateLayer: ()->
    markerView = @get('markerView')

    @set 'options',
      icon: new Wheelmap.MapIcon(markerView)
      riseOnHover: true

  willDestroyLayer: ()->
    @get('layer').closePopup()

  didDestroyLayer: ()->
    Wheelmap.ViewHelper.exitDom(@get('markerView'))

  addPopup: (()->
    layer = @get('layer')?.bindPopup(@get('popup'), @get('popupOptions'))
  ).observes('layer')

  removePopup: (()->
    @get('layer')?.unbindPopup()
  ).observesBefore('layer')

  willOpenPopup: Ember.K

  didOpenPopup: (event)->
    popup = @get('popup')
    popupView = @get('popupView')

    @set('isPopping', true)

    Ember.run.once ()->
      popupView.createElement()
      Wheelmap.ViewHelper.enterDom(popupView)
      popup.setContent(popupView.get('element'))

    Ember.run.once ()->
      popup._adjustPan()

  willClosePopup: ()->
    popupView = @get('popupView')

    Ember.run.once ()->
      popupView.remove()
      Wheelmap.ViewHelper.exitDom(popupView)

  didClosePopup: (event)->
    @set('isPopping', false)

  visibilityDidChange: (()->
    unless @get('content.isVisible')
      @get('layer').closePopup()
  ).observes('content.isVisible')

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
  contentBinding: 'controller'
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