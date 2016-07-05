//= require react_ujs
//= require js-routes
//= require i18n
//= require i18n-config

// Needed for await, async and generator syntax
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { stringify, parse } from './common/helpers/query';
import WidgetBuilder from './WidgetBuilder/App';
import NewNodeWidget from './NewNodeWidget/App';

global.React = React;
global.ReactDOM = ReactDOM;

global.Wheelmap = {
  WidgetBuilder,
  NewNodeWidget,

  // Used for Rails JS routes query parameter serializing
  stringifyQuery: stringify,
  parseQueryString: parse
};
