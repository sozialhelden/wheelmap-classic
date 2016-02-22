import { take, put } from 'redux-saga/effects';

import { SAVE_NODE, load } from '../actions';
import { rootPath } from '../../common/routes';
import selectors from '../selectors';
import api from '../../common/helpers/api';

export default function *saveNode(getState) {
  while(true) {
    yield take(SAVE_NODE);

    const state = getState(),
      node = selectors.node(state);

    yield put(load(true));

    try {
      yield api.saveNode(node);
      window.location = rootPath();
    } catch(error) {
      if (error instanceof api.HTTPError) {
        continue;
      }

      throw error;
    } finally {
      yield put(load(true));
    }

    break;
  }
}