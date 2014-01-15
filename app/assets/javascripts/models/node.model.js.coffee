attr = DS.attr

Wheelmap.Node = DS.Model.extend
  lat: attr()
  lon: attr()
  name: attr()
  icon: attr()
  sponsor: attr()
  wheelchair: attr()
  category: attr()
  address: attr()
  region: attr()
  type: attr()
  oldWheelchair: null

  wheelchairWillChange: (()->
    oldWheelchair = @get('oldWheelchair')

    unless oldWheelchair?
      @set('oldWheelchair', @get('wheelchair'))
  ).observesBefore('wheelchair')

  location: (()->
    new L.LatLng(@get('lat'), @get('lon'))
  ).property('lat', 'lon')

  statusText: (()->
    I18n.t('wheelchairstatus.' + @get('wheelchair'));
  ).property('wheelchair')

  headline: (()->
    @get('name') || I18n.t("poi.name." + @get('category') + "." + @get('type'))
  ).property('name', 'type', 'category')

  breadcrumbs: (()->
    category = @get('category')

    [
      @get('region'),
      I18n.t("poi.category." + category),
      I18n.t("poi.name." + category + "." + @get('type'))
    ]
  ).property('type','category')

  showPath: (()->
    '/nodes/' + @get('id')
  ).property('id')

  editPath: (()->
    '/nodes/' + @get('id') + '/edit'
  ).property('id')

  updatePath:(()->
    '/nodes/' + @get('id') + '/update_wheelchair.js'
  ).property('id')

Wheelmap.NodeAdapter = DS.RESTAdapter.extend()