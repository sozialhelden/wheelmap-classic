import { take, put, cancel, fork, call } from 'redux-saga/effects';
import { SagaCancellationException } from 'redux-saga';

import * as actions from '../actions';
import { geocode } from '../../common/helpers/photon';
import delay from '../../common/helpers/delayPromise';

// Update map
export function* updateMap(node) {
  try {
    yield put(actions.loadNodeCenter(true));

    // Delay photon request (debounce).
    yield call(delay, 300);

    const address = yield call([ node, node.address ]);
    const features = yield call(geocode, address);

    // Restart daemon if no feature was found.
    if (features === undefined) {
      return;
    }

    // It can happen that we receive multiple results for an address
    // We need to find out which is the correct one
    const feature = features.find(f => f.properties.housenumber === node.get('housenumber') &&
                        f.properties.street === node.get('street'));

    if(feature === undefined) {
      return;
    }

    const [ lon, lat ] = feature.geometry.coordinates;
    const center = { lat, lon };

    yield put(actions.changeMapCenter(center));

    node = yield call([ node, node.merge ], center);

    yield put(actions.changeNode(node));
    yield put(actions.loadNodeCenter(false));
  } catch (error) {
    if (error instanceof SagaCancellationException) {
      return;
    }

    throw error;
  }
}

// This saga itself is not really debouncing the map update, but in combination with the delay in the updateMap saga,
// we get the desired effect. This two functions need to be devided to don't block the execution between
// CHANGE_NODE_ADDRESS actions via fork.
export function* debounceUpdateMap() {
  try {
    let updateMapTask = null;

    while (true) {
      const { payload: node } = yield take(actions.CHANGE_NODE_ADDRESS);

      // Cancel old update map task (debounce).
      if (updateMapTask !== null) {
        yield cancel(updateMapTask);
      }

      updateMapTask = yield fork(updateMap, node);
    }
  } catch (error) {
    if (error instanceof SagaCancellationException) {
      return;
    }

    throw error;
  }
}

// Cancel markerUpdate, when the user moves the marker.
export default function* cancelUpdateMap() {
  // Run updateMap saga until ...
  const updateMapTask = yield fork(debounceUpdateMap);

  // ... marker was moved.
  yield take(actions.MARKER_MOVED);
  yield cancel(updateMapTask);
}
