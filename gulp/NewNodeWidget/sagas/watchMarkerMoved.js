import { take, put, select } from 'redux-saga/effects';

import { MARKER_MOVED, changeNode } from '../actions';
import selectors from '../selectors';

// Always update the node position via the map, also when the updateMap saga is canceled.
export default function *watchMarkerMoved() {
  while (true) {
    const { payload: location } = yield take(MARKER_MOVED),
      node = yield select(selectors.node);

    yield put(changeNode(node.merge(location)));
  }
}