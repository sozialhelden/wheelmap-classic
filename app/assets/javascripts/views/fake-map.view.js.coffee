Wheelmap.FakeMapView = Ember.View.extend
  classNames: 'fake-map'
  attributeBindings: ['style']

  style: (()->
    location = @get('controller.location')

    unless location?
      return ''

    "background-image: url(//api.tiles.mapbox.com/v4/sozialhelden.map-iqt6py1k/#{location.lng},#{location.lat}," +
      "17/640x640.png64?access_token=pk.eyJ1Ijoic296aWFsaGVsZGVuIiwiYSI6IldvNHpkUUkifQ.5lLzFYw4MmAUkqLMoEcI3g)"
  ).property('controller.location')