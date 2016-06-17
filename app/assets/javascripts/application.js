//= require react_ujs
//= require js-routes
//= require i18n.js
//= require_self

I18n.defaultLocale = 'en';
I18n.mainLocale = 'de';
I18n.locale = document.getElementsByTagName('html')[0].getAttribute('lang');
I18n.fallbacks = true;

import React from 'react';
import ReactDOM from 'react-dom';
import { stringify, parse } from './common/helpers/query';

global.React = React;
global.ReactDOM = ReactDOM;

// Needed for await, async and generator syntax
import 'babel-polyfill';

import WidgetBuilder from './WidgetBuilder/App';
import NewNodeWidget from './NewNodeWidget/App';

global.Wheelmap = {
  WidgetBuilder,
  NewNodeWidget,

  // Used for Rails JS routes query parameter serializing
  stringifyQuery: stringify,
  parseQueryString: parse
};
