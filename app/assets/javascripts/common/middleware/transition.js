const { TRANSITION } = require('../actions/router');

function transition(history) {
  return () => next => action => {
    let { type } = action;

    if (type !== TRANSITION)
      return next(action);

    let { payload: { method, args } } = action;

    history[method].apply(history, args);
  }
}

module.exports = transition;