import { take, put, call } from 'redux-saga/effects';

import { ENTER_CONTENT, changeNode, changeMapCenter, load, validateNode, setErrors } from '../actions';
import { NAME_CATEGORY } from '../models/sections';
import api from '../../common/helpers/api';
import { replace } from '../../common/actions/router';
import Node from '../../common/models/Node';

export default function*() {
  let { payload: { node } } = yield take(ENTER_CONTENT);

  if (node == null)
    return yield put(replace.newNodeSectionPath(NAME_CATEGORY));

  if (node.lat)
    node.lat = parseFloat(node.lat);

  if (node.lon)
    node.lon = parseFloat(node.lon);

  node = new Node(node);

  // Update node from query param if no errors occured.
  yield put(changeNode(node));

  const location = node.location();

  if (location != null)
    yield put(changeMapCenter(location));

  try {
    yield put(load(true));
    yield call(api.validateNode, node);
  } catch(error) {
    if (error instanceof api.HTTPError) {
      const { errors } = error;

      yield put(replace.newNodeSectionPath(NAME_CATEGORY));
      yield put(setErrors(errors));

      return;
    }

    throw error;
  } finally {
    yield put(load(false));
  }
}