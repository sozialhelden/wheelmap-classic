//= require jquery
//= require react
//= require react-router
//= require reflux
//= require immutable
//= require lodash
//= require leaflet
//= require i18n.js
//= require bootstrap
//= require bootstrap-select
//= require_tree ./actions
//= require_tree ./models
//= require_tree ./stores
//= require_tree ./components
//= require_self

I18n.defaultLocale = 'en'
I18n.locale = $('html').attr('lang')
I18n.fallbacks = true

React.render(
  <Wheelmap />,
  document.getElementById('wheelmap')
);