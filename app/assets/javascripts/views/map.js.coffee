Wheelmap = @Wheelmap

Wheelmap.TileLayer = EmberLeaflet.TileLayer.extend
  tileUrl: 'http://{s}.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/{z}/{x}/{y}.png256'
  options:
    maxZoom: 19
    minZoom: 2
    attribution: 'Data: <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, Icons: CC-By-SA <a href="http://mapicons.nicolasmollet.com/">Nicolas Mollet</a>'
    detectRetina: true

Wheelmap.LocateMixin = Ember.Mixin.create
  didInsertElement: ()->
    @_super()
    L.control.locate().addTo(@_layer)

Wheelmap.SpinMixin = Ember.Mixin.create
  spinner: null,
  spinning: 0

  spin: ((state)->
    console.log(state)
    if state
      if !@spinner?
        @spinner = new Spinner().spin(@get('element'));

      @spinning++
    else
      @spinning--

      if @spinning <= 0 and @spinner?
        @spinner.stop()
        @spinner = null
  )

Wheelmap.MapView = EmberLeaflet.MapView.extend Wheelmap.LocateMixin, Wheelmap.SpinMixin,
  childLayers: [ @Wheelmap.TileLayer ]
  options:
    trackResize: true

  centerBinding: 'controller.center'
  zoomBinding: 'controller.zoom'

  didInsertElement: ()->
    Ember.run.sync() # Needed for bindings to controller
    @_super()

  zooming: (()->
    @get('controller').send('zooming', @get('isZooming'), @get('layer').getBounds())
  ).observes('isZooming')

  moving: (()->
    @get('controller').send('moving', @get('isMoving'), @get('layer').getBounds())
  ).observes('isMoving')

  loading: (()->
    @spin(@get('controller.isLoading'))
  ).observes('controller.isLoading')