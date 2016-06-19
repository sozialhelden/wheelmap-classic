//= require react_ujs
//= require js-routes
//= require i18n
//= require i18n-config

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
