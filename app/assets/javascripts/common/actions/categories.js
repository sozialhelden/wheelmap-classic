import { createAction } from 'redux-actions';

import { fetchCategories } from '../helpers/api';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';

// @TODO Replace with setting action and fetch via sagas.
export const fetch = createAction(FETCH_CATEGORIES, fetchCategories);
export const toggle = createAction(TOGGLE_CATEGORY);
