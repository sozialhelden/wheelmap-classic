Wheelmap.NodesEditView = Ember.View.extend
  mapImage: (()->
    location = @get('controller.location')

    unless location?
      return ''

    "//api.tiles.mapbox.com/v4/sozialhelden.map-iqt6py1k/#{location.lng},#{location.lat},17/359x239.png64?access_token=pk.eyJ1Ijoic296aWFsaGVsZGVuIiwiYSI6IldvNHpkUUkifQ.5lLzFYw4MmAUkqLMoEcI3g"
  ).property('controller.location')

  markerWheelchairClass: (()->
    'marker-wheelchair-' + @get('controller.wheelchair')
  ).property('controller.wheelchair')

  markerIconClass: (()->
    'marker-icon-' + @get('controller.icon')
  ).property('controller.icon')