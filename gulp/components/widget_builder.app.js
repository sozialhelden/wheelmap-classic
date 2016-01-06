const React = require('react');
const { Provider } = require('react-redux');
const camelize = require('../helpers/camelize');
const createStore = require('../helpers/create_store');
const WidgetBuilder = require('./widget_builder');
const Widget = require('../models/widget');
const { init } = require('../actions/widget');
const widgetApp = require('../reducers/widget');

class WidgetBuilderApp extends React.Component {
  render() {
    let widget = Widget(camelize(this.props.widget)),
      store = createStore(widgetApp, widget);

    store.dispatch(init());

    return (
      <Provider store={store}>
        <WidgetBuilder />
      </Provider>
    );
  }
}

module.exports = WidgetBuilderApp;