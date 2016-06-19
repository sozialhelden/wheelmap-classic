import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import saga from 'redux-saga';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';

import multi from '../common/middleware/multi';
import transition from '../common/middleware/transition';
import createHistory from '../common/helpers/createHistory';
import routes from '../common/routes';
import Widget from './Widget';
import Content from './Content';
import reducer from './reducers';
import { enterContent } from './actions';
import sagas from './sagas';
import sections from './models/sections';

const { newNodePath, newNodeSectionPath } = routes;

const browserHistory = createHistory();

const createExtendedStore = applyMiddleware(
  multi,
  thunk,
  promise,
  transition(browserHistory),
  saga.apply(undefined, sagas)
)(createStore);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.store = createExtendedStore(reducer);
  }

  onEnterContent = nextState => {
    this.store.dispatch(enterContent(nextState));
  };

  render() {
    return (
      <Provider store={this.store}>
        <Router history={browserHistory}>
          <Redirect from={newNodePath.toString()} to={newNodeSectionPath(sections.NAME_CATEGORY)} />
          <Route path={newNodePath.toString()} component={Widget}>
            <Route
              path={newNodeSectionPath.toString()}
              component={Content}
              onEnter={this.onEnterContent}
            />
          </Route>
        </Router>
      </Provider>
    );
  }
}

module.exports = App;
