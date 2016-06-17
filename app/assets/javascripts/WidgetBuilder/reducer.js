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

export default function (state, action) {
  switch (action.type) {
    case CHANGE_WIDTH:
      return changeValue(state, action, 'width');

    case CHANGE_HEIGHT:
      return changeValue(state, action, 'height');

    case CHANGE_CATEGORIES:
      return changeValue(state, action, 'categories');

    case CHANGE_PROVIDER:
      return changeValue(state, action, 'providerId');

    case CHANGE_LOCATION:
      return changeLocation(state, action);

    case INIT:
      return init(state, action);

    case SAVE:
      return save(state, action);

    default:
      return state;
  }
}
