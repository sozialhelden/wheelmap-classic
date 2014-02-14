attr = DS.attr

Wheelmap.Node = DS.Model.extend
  lat: attr()
  lon: attr()
  name: attr()
  sponsor: attr()
  wheelchair: attr()
  addr: attr()
  region: attr()
  type: DS.belongsTo('node-type')
  note: attr()
  website: attr()
  phone: attr()
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
    @get('name') || @get('type.name')
  ).property('name', 'type.name')

  breadcrumbs: (()->
    category = @get('type.category.identifier')

    [
      @get('region'),
      @get('type.category.name'),
      @get('type.name')
    ]
  ).property('region', 'type.name','type.category.name')

  showPath: (()->
    '/nodes/' + @get('id')
  ).property('id')

  editPath: (()->
    '/nodes/' + @get('id') + '/edit'
  ).property('id')

  updatePath: (()->
    '/nodes/' + @get('id') + '/update_wheelchair.js'
  ).property('id')

  address: (()->
    address = []
    addr = @get('addr')

    if addr.street? and addr.housenumber?
      address.push I18n.t('node.address.street', addr).trim()

    if addr.city? and addr.postcode?
      address.push I18n.t('node.address.city', addr).trim()

    address.join(', ')
  ).property('addr.street', 'addr.housenumber', 'addr.postcode', 'addr.city')

  icon: Ember.computed.alias('type.icon')

Wheelmap.NodeAdapter = DS.RESTAdapter.extend()

Wheelmap.Node.reopenClass
  WHEELCHAIR_STATUSES: ['yes', 'limited', 'no']