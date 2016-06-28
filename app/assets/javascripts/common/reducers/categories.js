import { Map, Seq } from 'immutable';
import { handleActions } from 'redux-actions';

import { FETCH_CATEGORIES, TOGGLE_CATEGORY } from '../actions/categories';
import Category from '../models/Category';

export default handleActions({
  [FETCH_CATEGORIES]: (state, { payload: { categories } }) => (
    new Seq(categories)
      .map(category => new Category(category))
      .toKeyedSeq()
      .mapKeys((key, category) => category.id)
      .toMap()
  ),

  [TOGGLE_CATEGORY]: (state, { payload: category }) => (
    state.setIn([ category.id, 'active' ], !category.active)
  )
}, new Map());
