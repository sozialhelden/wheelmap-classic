import { put } from 'redux-saga/effects';

import { fetch } from '../../common/actions/categories';

// Fetch categories on initialization
export default function* fetchCategories() {
  yield put(fetch());
}
