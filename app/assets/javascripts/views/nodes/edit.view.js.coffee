Wheelmap.NodesEditView = Ember.View.extend
  mapImage: (()->
    location = @get('controller.location')

    unless location?
      return ''

    "http://api.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/#{location.lng},#{location.lat},17/359x239.png64"
  ).property('controller.location')

  markerWheelchairClass: (()->
    'marker-wheelchair-' + @get('controller.wheelchair')
  ).property('controller.wheelchair')

  markerIconClass: (()->
    'marker-icon-' + @get('controller.icon')
  ).property('controller.icon')