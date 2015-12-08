import { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from '../services/create_store';
import Widget from './widget';
import { createWidget } from '../models/widget';
import widgetApp from '../reducers/widget';

class WidgetApp extends Component {
  render() {
    let widget = createWidget(this.props.widget),
      store = createStore(widgetApp, widget);

    return (
      <Provider store={store}>
        <Widget />
      </Provider>
    );
  }
}

export default WidgetApp;