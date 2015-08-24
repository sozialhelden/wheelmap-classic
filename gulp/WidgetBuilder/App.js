const React = require('react');
const { Provider } = require('react-redux');

const camelize = require('./helpers/camelize');
const createStore = require('./helpers/create_store');
const WidgetBuilder = require('./WidgetBuilder');
const Widget = require('./models/Widget');
const { init } = require('./actions');
const widgetBuilderReducer = require('./reducer');

class WidgetBuilderApp extends React.Component {
  render() {
    let widget = Widget(camelize(this.props.widget)),
      store = createStore(widgetApp, widget);

    store.dispatch(init());

    return (
      <Provider store={store}>
        <WidgetBuilder/>
      </Provider>
    );
  }
}

module.exports = WidgetBuilderApp;