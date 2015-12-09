import { Component } from 'react';
import { Provider } from 'react-redux';
import camelize from '../helpers/camelize';
import createStore from '../helpers/create_store';
import WidgetBuilder from './widget_builder';
import Widget from '../models/widget';
import { init } from '../actions/widget';
import widgetApp from '../reducers/widget';

class WidgetBuilderApp extends Component {
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

export default WidgetBuilderApp;