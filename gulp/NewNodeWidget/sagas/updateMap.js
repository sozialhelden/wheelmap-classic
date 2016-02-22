import { take, put, cancel, fork } from 'redux-saga/effects';
import { SagaCancellationException } from 'redux-saga';

import { MARKER_MOVED, changeMapCenter, changeNode, CHANGE_NODE_ADDRESS } from '../actions';
import photon from '../../common/helpers/photon';
import delay from '../../common/helpers/delayPromise';

// Cancel markerUpdate, when the user moves the marker.
export default function *cancelUpdateMap() {
  // Run updateMap saga until ...
  const updateMapTask = yield fork(debounceUpdateMap);

  // ... marker was moved.
  yield take(MARKER_MOVED);
  yield cancel(updateMapTask);
}

// Update map
export function *updateMap(node) {
  try {
    // Delay photon request (debounce).
    yield delay(300);

    const feature = yield photon.geocode(node.address());

    // Restart daemon if no feature was found.
    if (feature == null)
      return;

    const [lon, lat] = feature.geometry.coordinates,
      center = { lat, lon };

    yield put(changeMapCenter(center));
    yield put(changeNode(node.merge(center)));
  } catch(error) {
    if (error instanceof SagaCancellationException)
      return;

    throw error;
  }
}

// This saga itself is not really debouncing the map update, but in combination with the delay in the updateMap saga,
// we get the desired effect. This two functions need to be devided to don't block the execution between
// CHANGE_NODE_ADDRESS actions via fork.
export function *debounceUpdateMap() {
  try {
    let updateMapTask = null;

    while (true) {
      const { payload: node } = yield take(CHANGE_NODE_ADDRESS);

      // Cancel old update map task (debounce).
      if (updateMapTask != null)
        yield cancel(updateMapTask);

      updateMapTask = yield fork(updateMap, node);
    }
  } catch(error) {
    if (error instanceof SagaCancellationException)
      return;

    throw error;
  }
}