global.React = require('react');
global.ReactDOM = require('react-dom');

global.Wheelmap = {
  WidgetBuilder: {
    App: require('./components/widget_builder.app')
  },
  Nodes: {
    WidgetNew: {
      App: require('./components/nodes.widget_new.app')
    }
  }
};