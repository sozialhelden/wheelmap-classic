global.React = require('react');
global.ReactDOM = require('react-dom');

// Needed for await, async and generator syntax
require("babel-polyfill");

global.Wheelmap = {
  WidgetBuilder: require('./WidgetBuilder/App'),
  NewNodeWidget: require('./NewNodeWidget/App')
};