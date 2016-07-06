import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import camelize from './helpers/camelize';
import createStore from './helpers/createStore';
import WidgetBuilder from './WidgetBuilder';
import Widget from './models/Widget';
import widgetBuilderReducer from './reducer';
import { init } from './actions';

const { object } = PropTypes;

function WidgetBuilderApp({ widgetData }) {
  const widget = new Widget(camelize(widgetData));
  const store = createStore(widgetBuilderReducer, widget);

  store.dispatch(init());

  return (
    <Provider store={store}>
      <WidgetBuilder />
    </Provider>
  );
}

WidgetBuilderApp.propTypes = {
  widgetData: object
};

export default WidgetBuilderApp;
