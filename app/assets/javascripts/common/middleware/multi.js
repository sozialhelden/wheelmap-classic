/**
 * @see https://github.com/ashaffer/redux-multi
 */
function multi({ dispatch }) {
  return next => action =>
    Array.isArray(action)
      ? action.filter(Boolean).map(dispatch)
      : next(action)
}

module.exports = multi;