Wheelmap.NodeShareComponent = Ember.Component.extend
  tagName: 'a'
  attributeBindings: ['href']
  osmId: null
  name: null

  sharedUri: (()->
    encodeURIComponent(window.location.protocol + "//" + window.location.host + "/nodes/" + @get('osmId'))
  ).property('osmId')

  sharedText: (()->
    encodeURIComponent(I18n.t('nodes.show.share.text', { name:  @get('name') }));
  ).property('name')

Wheelmap.NodeSharePopupMixin = Ember.Mixin.create
  popupWidth: 600
  popupHeight: 400

  click: (event)->
    event.preventDefault()
    @openPopup()

  openPopup: ()->
    left = (screen.width / 2) - (@get('popupWidth') / 2)
    top = (screen.height / 2) - (@get('popupHeight') / 2)

    window.open(@get('href'), @toString(), 'width=' + @get('popupWidth') + ',height=' + @get('popupHeight') + ',left=' + left + ',top=' + top)

Wheelmap.EmailShareComponent = Wheelmap.NodeShareComponent.extend

  href: (()->
    "mailto:?body=" +
    @get('sharedText') +
    " (" + @get('sharedUri') + ")"
  ).property('sharedText', 'sharedUri')

Wheelmap.TwitterShareComponent = Wheelmap.NodeShareComponent.extend Wheelmap.NodeSharePopupMixin,
  lang: null

  href: (()->
    "//twitter.com/share?dnt=true&hashtags=wheelmap&lang=" +
    @get('lang') +
    "&related=wheelmap%2Csozialhelden&text=" +
    @get('sharedText') +
    "&url=" +
    @get('sharedUri')
  ).property('lang', 'sharedText', 'sharedUri')

  sharedText: (()->
    @_super().replace(/\%20/g, '+');
  ).property('name')

Wheelmap.FacebookShareComponent = Wheelmap.NodeShareComponent.extend Wheelmap.NodeSharePopupMixin,
  href: (()->
    "//www.facebook.com/sharer/sharer.php?s=100&p[url]=" +
    @get('sharedUri')
  ).property('sharedUri')