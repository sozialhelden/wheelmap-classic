const React = require('react');
const { Provider } = require('react-redux');
const Widget = require('./nodes.widget_new');
const createStore = require('../helpers/create_store');
const reducer = require('../reducers/nodes.widget_new');

class App extends React.Component {
  render() {
    let store = createStore(reducer);

    return (
      <Provider store={store}>
        <Widget/>
      </Provider>
    );
  }
}

module.exports = App;