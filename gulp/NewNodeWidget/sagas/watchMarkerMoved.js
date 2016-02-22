import { take, put } from 'redux-saga/effects';

import { MARKER_MOVED, changeNode } from '../actions';
import selectors from '../selectors';

// Always update the node position via the map, also when the updateMap saga is canceled.
export default function *watchMarkerMoved(getState) {
  while (true) {
    const { payload: location } = yield take(MARKER_MOVED);

    const state = getState(),
      node = selectors.node(state);

    yield put(changeNode(node.merge(location)));
  }
}