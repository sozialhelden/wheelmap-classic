import { put } from 'redux-saga/effects';

import categoriesActions from '../../common/actions/categories';

// Fetch categories on initialization
export default function *fetchCategories() {
  yield put(categoriesActions.fetch());
}