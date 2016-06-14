import { createAction } from 'redux-actions';
import each from 'mout/collection/forEach';

import routes from '../routes';

export const TRANSITION = 'TRANSITION';

function createTransitionAction(method) {
  return createAction(TRANSITION, (...args) => ({ method, args}));
}

export const push = createTransitionAction('push');
export const replace = createTransitionAction('replace');
export const go = createTransitionAction('go');
export const goForward = createTransitionAction('goForward');
export const goBack = createTransitionAction('goBack');

// Add action creators for pushing specific paths
each(routes, (method, name) => {
  if (/Path$/i.test(name)) {
    push[name] = (...args) => push(method.apply(routes, args));
    replace[name] = (...args) => replace(method.apply(routes, args));
  }
});