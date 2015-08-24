const React = require('react');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const promise = require('redux-promise');
const { 'default': saga } = require('redux-saga');
const { Provider } = require('react-redux');
const { Router, Route, Redirect, browserHistory } = require('react-router');

const multi = require('../common/middleware/multi');
const transition = require('../common/middleware/transition');
const Widget = require('./Widget');
const Content = require('./Content');
const reducer = require('./reducers');
const { activateSection } = require('./actions');
const sagas = require('./sagas');
const { NAME_CATEGORY } = require('./models/sections');

const { newNodePath, newNodeSectionPath } = global.Routes;

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

  onEnterContent = (nextState) => {
    const { params: { section } } = nextState;

    this.store.dispatch(activateSection(section));
  };

  render() {
    return (
      <Provider store={this.store}>
        <Router history={browserHistory}>
          <Redirect from={newNodePath.toString()} to={newNodeSectionPath(NAME_CATEGORY)}/>
          <Route path={newNodePath.toString()} component={Widget}>
            <Route path={newNodeSectionPath.toString()}
                   component={Content}
                   onEnter={this.onEnterContent}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

module.exports = App;