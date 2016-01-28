const { Map, Seq } = require('immutable');
const { handleActions } = require('redux-actions');

const { FETCH_CATEGORIES, TOGGLE_CATEGORY } = require('../actions/categories');
const Category = require('../models/Category');

module.exports = handleActions({
  [FETCH_CATEGORIES]: (state, { payload: { categories } }) => {
    return Seq(categories)
      .map(category => new Category(category))
      .toKeyedSeq()
      .mapKeys((key, category) => category.id)
      .toMap();
  },

  [TOGGLE_CATEGORY]: (state, { payload: category }) => {
    return state.setIn([category.id, 'active'], !category.active);
  }
}, Map());