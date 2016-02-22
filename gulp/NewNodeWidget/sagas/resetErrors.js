import { take, put } from 'redux-saga/effects';

import { ACTIVATE_SECTION, setErrors } from '../actions';

// Reset errors, when section was changed.
export default function *resetErrors() {
  while(true) {
    yield take(ACTIVATE_SECTION);
    yield put(setErrors({}));
  }
}