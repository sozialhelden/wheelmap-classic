const React = require('react');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const promise = require('redux-promise');
const { 'default': saga } = require('redux-saga');
const { Provider } = require('react-redux');
const { Router, Route, Redirect } = require('react-router');

const multi = require('../common/middleware/multi');
const transition = require('../common/middleware/transition');
const createHistory = require('../common/helpers/createHistory');
const Node = require('../common/models/Node');
const { newNodePath, newNodeSectionPath } = require('../common/routes');
const Widget = require('./Widget');
const Content = require('./Content');
const reducer = require('./reducers');
const actions = require('./actions');
const { 'default': sagas } = require('./sagas');
const sections = require('./models/sections');

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
    this.store.dispatch(actions.enterContent(nextState));
  };

  render() {
    return (
      <Provider store={this.store}>
        <Router history={browserHistory}>
          <Redirect from={newNodePath.toString()} to={newNodeSectionPath(sections.NAME_CATEGORY)}/>
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