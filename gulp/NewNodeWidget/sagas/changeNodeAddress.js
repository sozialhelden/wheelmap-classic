import { take, put } from 'redux-saga/effects';

import { CHANGE_NODE_ADDRESS, changeNode, updateMap } from '../actions';
import selectors from '../selectors';

// Pass the change node address to both the CHANGE_NODE and the UPDATE_MAP actions.
export default function*(getState) {
  while (true) {
    const { payload: node } = yield take(CHANGE_NODE_ADDRESS);

    yield put(changeNode(node));
    yield put(updateMap(node.address()));
  }
}