const { Map } = require('immutable');
const { handleActions } = require('redux-actions');
const each = require('lodash/collection/forEach');

const { FETCH_CATEGORIES, TOGGLE_CATEGORY } = require('../actions/categories');

module.exports = handleActions({
  [FETCH_CATEGORIES]: (state, { payload: categories }) => {
    return Map().withMutations(state => {
      each(categories, category => {
        state.set(category.id, new Category(category));
      });
    });
  },

  [TOGGLE_CATEGORY]: (state, { payload: category }) => {
    return state.setIn([category.id, 'active'], !category.active);
  }
}, Map());