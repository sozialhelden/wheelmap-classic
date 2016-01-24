const { KeyedSeq, Map } = require('immutable');
const { handleActions } = require('redux-actions');
const each = require('lodash/collection/forEach');

const { FETCH_CATEGORIES, TOGGLE_CATEGORY } = require('../actions/categories');
const Category = require('../models/category');

module.exports = handleActions({
  [FETCH_CATEGORIES]: (state, { payload: categories }) => {
    return KeyedSeq(categories)
      .map(category => new Category(category))
      .toMap();
  },

  [TOGGLE_CATEGORY]: (state, { payload: category }) => {
    return state.setIn([category.id, 'active'], !category.active);
  }
}, Map());