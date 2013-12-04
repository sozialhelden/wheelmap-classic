attr = DS.attr

Wheelmap.Node = DS.Model.extend
  osm_id: attr()
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

  location: (()->
    new L.LatLng(@get('lat'), @get('lon'))
  ).property('lat', 'lon')

  statusText: (()->
    I18n.t('wheelchairstatus.' + @get('wheelchair'));
  ).property('wheelchair')

  headline: (()->
    @get('name') || I18n.t("poi.name." + @get('category') + "." + @get('type'))
  ).property('name', 'type','category')

  breadcrumbs: (()->
    [
      @get('region'),
      I18n.t("poi.category." + @get('category')),
      I18n.t("poi.name." + @get('category') + "." + @get('type'))
    ]
  ).property('type','category')

  showPath: (()->
    '/nodes/' + @get('osm_id')
  ).property('osm_id')

  editPath: (()->
    '/nodes/' + @get('osm_id') + '/edit'
  ).property('osm_id')

  updatePath:(()->
    '/nodes/' + @get('osm_id') + '/update_wheelchair.js'
  ).property('osm_id')

  sponsored:(()->
    @get('sponsor')?
  ).property('sponsor')

Wheelmap.NodeAdapter = DS.RESTAdapter.extend()