const { createAction } = require('redux-actions');

const TRANSITION = 'TRANSITION';

function payloadCreatorCreator(method) {
  return (...args) => ({ method, args});
}

const methods = ['push', 'create', 'go', 'goForward', 'goBack'];
const actions = {};

methods.forEach(method => {
  actions[method] = createAction(TRANSITION, payloadCreatorCreator(method));
});

module.exports = { TRANSITION, ...actions };