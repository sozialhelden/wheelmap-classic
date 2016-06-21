import { handleActions } from 'redux-actions';

import {
  CHANGE_WIDTH,
  CHANGE_HEIGHT,
  CHANGE_CATEGORIES,
  CHANGE_LOCATION,
  CHANGE_PROVIDER,
  INIT,
  SAVE
} from './actions';
import uncamelize from './helpers/uncamelize';

const DEFAULT_ZOOM = 16;

function changeValue(widget, action, key) {
  return widget.set(key, action[key]);
}

function computeSrc(boundingBox, lat, lon, apiKey) {
  let src = `#/?lat=${lat}&lon=${lon}&zoom=${DEFAULT_ZOOM}`;

  if (boundingBox != null) {
    src = `#/?bbox=${boundingBox[1]},${boundingBox[3]},${boundingBox[0]},${boundingBox[2]}`;
  }

  return `//${window.location.host}${Routes.embedPath({ key: apiKey })}${src}`;
}

function changeLocation(widget, action) {
  const { location } = action;
  const boundingBox = location.properties.extent;
  const [ lon, lat ] = location.geometry.coordinates;
  const src = computeSrc(boundingBox, lat, lon, widget.apiKey);

  return widget.merge({ lat, lon, boundingBox, src });
}

function init(widget) {
  const { boundingBox, lat, lon, apiKey } = widget;
  const src = computeSrc(boundingBox, lat, lon, apiKey);

  return widget.set('src', src);
}

function save(widget) {
  // @TODO Move this to an action
  $.post(Routes.widgetsPath({ id: widget.id }), { widget: uncamelize(widget.toJS()) });

  return widget;
}

export default handleActions({
  [CHANGE_WIDTH]: (state, action) => changeValue(state, action, 'width'),
  [CHANGE_HEIGHT]: (state, action) => changeValue(state, action, 'height'),
  [CHANGE_CATEGORIES]: (state, action) => changeValue(state, action, 'categories'),
  [CHANGE_PROVIDER]: (state, action) => changeValue(state, action, 'providerId'),
  [CHANGE_LOCATION]: changeLocation,
  [INIT]: init,
  [SAVE]: save
});
