import { take, put } from 'redux-saga/effects';

import { load, navigateToNextSection, setSimilar } from '../actions';
import selectors from '../selectors';
import { SIMILAR_NODES } from '../models/sections';
import photon from '../../common/helpers/photon';
import activeSection from './activeSection';
import Node from '../../common/models/Node';

// Fetch similar nodes when the user visits the similar node section.
export default function *fetchSimilar(getState) {
  while(true) {
    yield take(activeSection(SIMILAR_NODES));

    const state = getState(),
      node = selectors.node(state),
      { name, lat, lon } = node;

    yield put(load(true));

    try {
      const features = yield photon.search(name, { lat, lon, limit: 5, osm_tag: 'amenity' });

      if (features.length === 0) {
        yield put(navigateToNextSection());
        continue;
      }

      yield put(setSimilar(features.map(Node.fromFeature)));
    } finally {
      yield put(load(false));
    }
  }
}