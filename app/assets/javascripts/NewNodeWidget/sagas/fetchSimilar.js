import { take, put, select, call } from 'redux-saga/effects';

import { load, setSimilar } from '../actions';
import { node as nodeSelector } from '../selectors';
import { SIMILAR_NODES } from '../models/sections';
import { findSimilar } from '../../common/helpers/nodes';
import Node from '../../common/models/Node';

import activeSection from './activeSection';

// Fetch similar nodes when the user visits the similar node section.
export default function* fetchSimilar() {
  while (true) {
    yield take(activeSection(SIMILAR_NODES));

    const node = yield select(nodeSelector);
    const { name, lat, lon } = node;

    yield put(load(true));

    try {
      const features = yield call(findSimilar, name, { lat, lon, limit: 5 });
      const nodes = yield call(Node.fromFeatures, features);

      yield put(setSimilar(nodes));
    } finally {
      yield put(load(false));
    }
  }
}
