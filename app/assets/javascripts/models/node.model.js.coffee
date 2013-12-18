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

  location: (()->
    new L.LatLng(@get('lat'), @get('lon'))
  ).property('lat', 'lon')

  statusText: (()->
    I18n.t('wheelchairstatus.' + @get('wheelchair'));
  ).property('wheelchair')

  headline: (()->
    @get('name') || I18n.t("poi.name." + @get('category.identifier') + "." + @get('type'))
  ).property('name', 'type','category.identifier')

  breadcrumbs: (()->
    category = @get('category.identifier')

    [
      @get('region'),
      I18n.t("poi.category." + category),
      I18n.t("poi.name." + category + "." + @get('type'))
    ]
  ).property('type','category.identifier')

  showPath: (()->
    '/nodes/' + @get('id')
  ).property('id')

  editPath: (()->
    '/nodes/' + @get('id') + '/edit'
  ).property('id')

  updatePath:(()->
    '/nodes/' + @get('id') + '/update_wheelchair.js'
  ).property('id')

  sponsored:(()->
    @get('sponsor')?
  ).property('sponsor')

Wheelmap.NodeAdapter = DS.RESTAdapter.extend()