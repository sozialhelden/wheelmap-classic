Wheelmap.FakeMapView = Ember.View.extend
  classNames: 'fake-map'
  attributeBindings: ['style']

  style: (()->
    location = @get('controller.location')

    unless location?
      return ''

    "background-image: url(http://api.tiles.mapbox.com/v4/sozialhelden.map-iqt6py1k/#{location.lng},#{location.lat},17/1280x1280.jpg70?access_token=pk.eyJ1Ijoic296aWFsaGVsZGVuIiwiYSI6IldvNHpkUUkifQ.5lLzFYw4MmAUkqLMoEcI3g)"
  ).property('controller.location')