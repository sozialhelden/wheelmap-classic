import { take, put, select, call } from 'redux-saga/effects';

import { load, navigateToNextSection, setSimilar } from '../actions';
import { node as nodeSelector } from '../selectors';
import { SIMILAR_NODES } from '../models/sections';
import nodesHelpers from '../../common/helpers/nodes';
import activeSection from './activeSection';
import Node from '../../common/models/Node';

// Fetch similar nodes when the user visits the similar node section.
export default function *fetchSimilar() {
  while (true) {
    yield take(activeSection(SIMILAR_NODES));

    const node = yield select(nodeSelector);
    const { name, lat, lon } = node;

    yield put(load(true));

    try {
      const features = yield call(nodesHelpers.similar, name, { lat, lon, limit: 5 });

      if (features.length === 0) {
        yield put(navigateToNextSection());
        continue;
      }

      const nodes = yield call(Node.fromFeatures, features);

      yield put(setSimilar(nodes));
    } finally {
      yield put(load(false));
    }
  }
}
