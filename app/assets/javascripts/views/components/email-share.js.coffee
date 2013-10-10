Wheelmap.EmailShareComponent = Ember.Component.extend
  tagName: 'a',
  attributeBindings: ['href'],
  osm_id: ''

  href: (()->
    "mailto:?body=" +
    @get('shared_text') +
    " (" + @get('shared_uri') + ")"
  ).property('osm_id', 'name')

  shared_uri: (()->
    encodeURIComponent(window.location.protocol + "//" + window.location.host + "/nodes/"+ @get('osm_id'))
  ).property('osm_id')

  shared_text: (()->
    encodeURIComponent(I18n.t('nodes.show.share.text', {name:  @get('name')}));
  ).property('name')