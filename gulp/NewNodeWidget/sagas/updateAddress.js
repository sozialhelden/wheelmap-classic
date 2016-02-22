import { take, put, cancel, fork } from 'redux-saga/effects';
import { SagaCancellationException } from 'redux-saga';

import { CHANGE_NODE_ADDRESS, MARKER_MOVED, changeNode } from '../actions';
import selectors from '../selectors';
import photon from '../../common/helpers/photon';

// Cancel updateAddress saga when user inputs own node address parts.
export default function *cancelUpdateAddressTask(getState) {
  // Run updateAddress saga until ...
  const updateAddressTask = yield fork(updateAddress, getState);

  // ... node address was changed by the user.
  yield take(CHANGE_NODE_ADDRESS);
  yield cancel(updateAddressTask);
}

// Update the address, when ever the marker was moved.
export function *updateAddress(getState) {
  try {
    while (true) {
      const { payload: location } = yield take(MARKER_MOVED);

      const feature = yield photon.reverseGeocode(location),
        { properties: { city, street, postcode, housenumber } } = feature;

      const state = getState(),
        node = selectors.node(state);

      yield put(changeNode(node.merge({
        city, street,
        postcode, housenumber
      })));
    }
  } catch(error) {
    if (error instanceof SagaCancellationException)
      return;

    throw error;
  }
}