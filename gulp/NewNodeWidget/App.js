const React = require('react');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const { Provider } = require('react-redux');
const { Router, Route, Redirect, browserHistory } = require('react-router');

const Widget = require('./Widget');
const Content = require('./Content');
const reducer = require('./reducer');
const { activateSection } = require('./actions');
const { TRANSITION } = require('../common/reducers/router');
const { NAME_CATEGORY } = require('./models/sections');

const { newNodePath, newNodeSectionPath } = global.Routes;

const createExtendedStore = applyMiddleware(thunk, transitionMiddleware)(createStore);

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

function transitionMiddleware({ getState }) {
  return (next) => (action) => {
    let { type } = action;

    if (type !== TRANSITION)
      return next(action);

    let { payload: { method, args } } = action;

    browserHistory[method].apply(browserHistory, args);
  }
}

module.exports = App;