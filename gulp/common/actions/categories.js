const { createAction } = require('redux-actions');

const api = require('../helpers/api');

const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';

const fetch = createAction(FETCH_CATEGORIES, api.fetchCategories);
const toggle = createAction(TOGGLE_CATEGORY);

module.exports = {
  FETCH_CATEGORIES,
  TOGGLE_CATEGORY,
  fetch,
  toggle
};