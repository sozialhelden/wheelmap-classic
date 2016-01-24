const { createAction } = require('redux-actions');

const API = require('../helpers/api');

const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';

const fetchCategories = createAction(FETCH_CATEGORIES, API.fetchCategories);
const toggleCategory = createAction(TOGGLE_CATEGORY);

module.exports = {
  FETCH_CATEGORIES,
  TOGGLE_CATEGORY,
  fetchCategories,
  toggleCategory
};