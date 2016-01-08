const React = require('react');
const { Provider } = require('react-redux');
const NodesWidgetNew = require('./nodes.widget_new');
const createStore = require('../helpers/create_store');
const nodesWidgetNewReducer = require('../reducers/nodes.widget_new');

class NodesWidgetNewApp extends React.Component {
  render() {
    let store = createStore(nodesWidgetNewReducer);

    return (
      <Provider store={store}>
        <NodesWidgetNew/>
      </Provider>
    );
  }
}

module.exports = NodesWidgetNewApp;