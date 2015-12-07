import { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Widget from './widget';
import { createWidget } from '../models/widget';
import widgetApp from '../reducers/widget';

class WidgetApp extends Component {
  render() {
    let widget = createWidget(this.props.widget),
      store = createStore(widgetApp, { widget });

    return (
      <Provider store={store}>
        <Widget />
      </Provider>
    );
  }
}

export default WidgetApp;