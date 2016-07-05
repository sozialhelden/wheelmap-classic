/**
 * @see https://github.com/ashaffer/redux-multi
 */
export default function multi({ dispatch }) {
  return next => action => (
    Array.isArray(action)
      ? action.filter(Boolean).map(dispatch)
      : next(action)
  );
}
