Wheelmap.TwitterShareComponent = Ember.Component.extend
  templateName: 'twitter-share'
  tagName: 'a',
  attributeBindings: ['href', 'data-name', 'data-toggle', 'target'],
  lang: 'de'
  name: ''
  osm_id: ''
  target: '_blank'
  'data-name': 'twitter'
  'data-toggle': 'share'

  href: (()->
    "http://twitter.com/share?dnt=true&hashtags=wheelmap&lang=" +
    @get('lang') +
    "&related=wheelmap%2Csozialhelden&text=" +
    @get('shared_text') +
    "&url=" +
    @get('shared_uri')
  ).property('osm_id', 'name')

  shared_uri: (()->
    encodeURIComponent(window.location.protocol + "//" + window.location.host + "/nodes/"+ @get('osm_id'))
  ).property('osm_id')

  shared_text: (()->
    encodeURIComponent(I18n.t('nodes.show.share.text', {name:  @get('name')})).replace(/\%20/g, '+');
  ).property('name')