#= require env
#= require jquery
#= require jquery/jquery.cookies.js
#= require i18n.js
#= require bootstrap
#= require bootstrap-select
#= require custom-bootstrap.js.coffee
#= require function
#= require map-overlay.js
#= require handlebars
#= require ember
#= require ember-data
#= require spin
#= require leaflet/leaflet-src
#= require leaflet/leaflet.locate
#= require leaflet/geojsontiles
#= require ember-leaflet
#= require responsive-popover
#= require dropzone
#= require_self
#= require wheelmap

I18n.defaultLocale = 'en'
I18n.locale = $('html').attr('lang')
I18n.fallbacks = true

Ember.Application.reopen
  # Transition end event
  customEvents: (()->
    customEvents = {}

    if $.support.transition?
      customEvents[$.support.transition.end] = 'transitionEnd'

    customEvents
  ).property()

Wheelmap = @Wheelmap = Ember.Application.create
  # LOG_TRANSITIONS: true
  rootElement: '#wheelmap'

DS.RESTAdapter.reopen
  buildURL: (type, id)->
    # Needed for not having wrong cached urls
    @_super(type, id) + '.json'

Wheelmap.Router.reopen
  rootURL: '/map/'
