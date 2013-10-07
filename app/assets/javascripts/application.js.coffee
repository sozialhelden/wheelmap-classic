#= require handlebars
#= require ember
#= require ember-data
#= require leaflet/leaflet-src
#= require leaflet/leaflet.locate
#= require spin
#= require ember-leaflet
#= require_self
#= require wheelmap

Ember.FEATURES["query-params"] = true

@Wheelmap = Ember.Application.create
  #LOG_TRANSITIONS: true
  rootElement: '#wheelmap'

@Wheelmap.Router.reopen
  rootURL: '/map/'