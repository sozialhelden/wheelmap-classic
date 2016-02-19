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