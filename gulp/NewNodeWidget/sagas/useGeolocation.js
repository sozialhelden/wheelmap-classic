import { take, put, select, call } from 'redux-saga/effects';

import { load, changeMapCenter, changeMapZoom } from '../actions';
import selectors from '../selectors';
import activeSection from './activeSection';
import sections from '../models/sections';
import geolocation from '../../common/helpers/geolocation';

export default function *useGeolocation() {
  yield take(activeSection(sections.ADDRESS));

  const node = yield select(selectors.node);

  if (yield call([node, node.hasLocation]))
    return;

  yield put(load(true));

  try {
    const position = yield call(geolocation),
      { latitude: lat, longitude: lon } = position.coords;

    yield put(changeMapCenter({ lat, lon }));
    yield put(changeMapZoom(16));
  } catch(error) {
    // Position error
    if (error.code) {
      return;
    }

    throw error;
  } finally {
    yield put(load(false));
  }
}
