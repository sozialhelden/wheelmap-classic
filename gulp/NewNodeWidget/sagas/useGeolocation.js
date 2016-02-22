import { take, put } from 'redux-saga/effects';

import { load, changeMapCenter, changeMapZoom } from '../actions';
import selectors from '../selectors';
import activeSection from './activeSection';
import sections from '../models/sections';
import geolocation from '../../common/helpers/geolocation';

export default function *useGeolocation(getState) {
  yield take(activeSection(sections.ADDRESS));

  const state = getState(),
    node = selectors.node(state);

  if (node.hasLocation())
    return;

  yield put(load(true));

  try {
    const position = yield geolocation(),
      { latitude: lat, longitude: lon } = position.coords;

    yield put(changeMapCenter({ lat, lon }));
    yield put(changeMapZoom(16));
  } catch(error) {
    // Position error
    if (error.code) {
      console.error(error.message);
      return;
    }

    throw error;
  } finally {
    yield put(load(false));
  }
}
