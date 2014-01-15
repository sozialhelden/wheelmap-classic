Wheelmap.FakeMapView = Ember.View.extend
  classNames: 'fake-map'
  attributeBindings: ['style']

  style: (()->
    location = @get('controller.location')

    unless location?
      return ''

    "background-image: url(http://api.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/#{location.lng},#{location.lat},17/640x640.png64))"
  ).property('controller.location')