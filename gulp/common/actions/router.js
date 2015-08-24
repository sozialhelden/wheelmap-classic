const { createAction } = require('redux-actions');
const each = require('lodash/collection/forEach');

const Routes = global.Routes;

const TRANSITION = 'TRANSITION';

function payloadCreatorCreator(method) {
  return (...args) => ({ method, args});
}

const methods = ['push', 'replace', 'go', 'goForward', 'goBack'];
const actions = {};

methods.forEach(method => {
  actions[method] = createAction(TRANSITION, payloadCreatorCreator(method));
});

// Add action creators for pushing specific paths
each(Routes, (method, name) => {
  if (/Path$/i.test(name)) {
    actions.push[name] = (...args) => actions.push(method.apply(Routes, args));
    actions.replace[name] = (...args) => actions.replace(method.apply(Routes, args));
  }
});

module.exports = {
  TRANSITION,
  ...actions
};