Wheelmap.FacebookShareComponent = Ember.Component.extend
  templateName: 'facebook-share'
  tagName: 'a',
  attributeBindings: ['href', 'data-name', 'data-toggle', 'target'],
  osm_id: ''
  target: '_blank'
  'data-name': 'facebook'
  'data-toggle': 'share'

  href: (()->
    "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" +
    @get('shared_uri')
  ).property('osm_id', 'name')

  shared_uri: (()->
    encodeURIComponent(window.location.protocol + "//" + window.location.host + "/nodes/"+ @get('osm_id'))
  ).property('osm_id')
