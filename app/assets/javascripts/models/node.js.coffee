attr = DS.attr

@Wheelmap.Node = DS.Model.extend
  lat: attr()
  lon: attr()
  name: attr()
  icon: attr()
  wheelchair: attr()
  category: attr()
  address: attr()
  breadcrumbs: attr()
  accesibility: attr()
  type: attr()

  location: (()->
    new L.LatLng(@get('lat'), @get('lon'))
  ).property('lat', 'lon')

  statusText: (()->
    I18n.t('wheelchairstatus.' + @get('wheelchair'));
  ).property('wheelchair')

  statusDescription: (()->
    I18n.t('wheelmap.what_is.' + @get('accesibility'));
  ).property('accesibility')

  headline: (()->
    @get('name') || I18n.t("poi.name." + @get('category') + "." + @get('type'))
  ).property('name', 'type','category')

@Wheelmap.NodeAdapter = DS.RESTAdapter.extend()