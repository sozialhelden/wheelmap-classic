import { take, put, cancel, fork, call, select } from 'redux-saga/effects';
import { SagaCancellationException } from 'redux-saga';

import * as actions from '../actions';
import * as selectors from '../selectors';
import { reverseGeocode } from '../../common/helpers/photon';

// Update the address, when ever the marker was moved.
export function* updateAddress() {
  try {
    while (true) {
      const { payload: location } = yield take(actions.MARKER_MOVED);

      yield put(actions.loadNodeAddress(true));

      const feature = yield call(reverseGeocode, location);
      const { properties: { city, street, postcode, housenumber } } = feature;

      let node = yield select(selectors.node);

      node = yield call([ node, node.merge ], {
        city,
        street,
        postcode,
        housenumber
      });

      yield put(actions.changeNode(node));
      yield put(actions.loadNodeAddress(false));
    }
  } catch (error) {
    if (error instanceof SagaCancellationException) {
      return;
    }

    throw error;
  }
}

// Cancel updateAddress saga when user inputs own node address parts.
export default function* cancelUpdateAddressTask() {
  // Run updateAddress saga until ...
  const updateAddressTask = yield fork(updateAddress);

  // ... node address was changed by the user.
  yield take(actions.CHANGE_NODE_ADDRESS);
  yield cancel(updateAddressTask);
}
