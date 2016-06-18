import { take, put, call, select } from 'redux-saga/effects';

import { SAVE_NODE, load } from '../actions';
import routes from '../../common/routes';
import { node as nodeSelector } from '../selectors';
import * as api from '../../common/helpers/api';
import redirect from '../../common/helpers/redirect';

export default function *saveNode() {
  yield take(SAVE_NODE);

  const node = yield select(nodeSelector);

  yield put(load(true));

  try {
    yield call(api.saveNode, node);
  } finally {
    yield put(load(false));
  }

  yield call(redirect, yield call(routes.rootPath));
}
