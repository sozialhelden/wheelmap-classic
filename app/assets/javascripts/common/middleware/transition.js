import { TRANSITION } from '../actions/router';

export default function transition(history) {
  return () => next => action => {
    const { type } = action;

    if (type !== TRANSITION) {
      next(action);
      return;
    }

    const { payload: { method, args } } = action;

    history[method](...args);
  };
}
