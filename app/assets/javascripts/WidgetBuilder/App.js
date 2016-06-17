import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import camelize from './helpers/camelize';
import createStore from './helpers/createStore';
import WidgetBuilder from './WidgetBuilder';
import Widget from './models/Widget';
import widgetBuilderReducer from './reducer';
import { widget } from './propTypes';

const { instanceOf } = PropTypes;

function WidgetBuilderApp({ widget }) {
  widget = new Widget(camelize(widget));

  const store = createStore(widgetBuilderReducer, widget);

  return (
    <Provider store={store}>
      <WidgetBuilder />
    </Provider>
  );
}

WidgetBuilderApp.propTypes = {
  widget: instanceOf(widget)
};

export default WidgetBuilderApp;
