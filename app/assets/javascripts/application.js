//= require react_ujs
//= require js-routes
//= require i18n.js
//= require_self

I18n.defaultLocale = 'en';
I18n.mainLocale = 'de';
I18n.locale = document.getElementsByTagName('html')[0].getAttribute('lang');
I18n.fallbacks = true;

const { stringify, parse } = require('./common/helpers/query');

global.React = require('react');
global.ReactDOM = require('react-dom');

// Needed for await, async and generator syntax
require("babel-polyfill");

global.Wheelmap = {
  WidgetBuilder: require('./WidgetBuilder/App'),
  NewNodeWidget: require('./NewNodeWidget/App'),

  // Used for Rails JS routes query parameter serializing
  stringifyQuery: stringify,
  parseQueryString: parse
};