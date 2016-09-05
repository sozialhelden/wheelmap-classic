import { take, put, select, call } from 'redux-saga/effects';

import { load, changeMapCenter, changeMapZoom } from '../actions';
import { node as nodeSelector } from '../selectors';
import * as sections from '../models/sections';
import geolocation from '../../common/helpers/geolocation';

import activeSection from './activeSection';

export default function* useGeolocation() {
  yield take(activeSection(sections.ADDRESS));

  const node = yield select(nodeSelector);

  if (yield call([ node, node.hasLocation ])) {
    return;
  }

  yield put(load(true));

  try {
    const position = yield call(geolocation);
    const { latitude: lat, longitude: lon } = position.coords;

    yield put(changeMapCenter({ lat, lon }));
    yield put(changeMapZoom(16));
  } catch (error) {
    // Position error
    if (error.code) {
      return;
    }

    throw error;
  } finally {
    yield put(load(false));
  }
}
