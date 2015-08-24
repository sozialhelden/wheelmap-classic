const { Map } = require('immutable');
const { CHANGE_WIDTH, CHANGE_HEIGHT, CHANGE_CATEGORIES, CHANGE_LOCATION, CHANGE_PROVIDER, INIT, SAVE } = require('./actions');
const uncamelize = require('./helpers/uncamelize');

const DEFAULT_ZOOM = 16;

function changeValue(widget, action, key) {
  return widget.set(key, action[key]);
}

function computeSrc(boundingBox, lat, lon, apiKey) {
  let src = `#/?lat=${lat}&lon=${lon}&zoom=${DEFAULT_ZOOM}`;

  if (boundingBox != null)
    src = `#/?bbox=${boundingBox[1]},${boundingBox[3]},${boundingBox[0]},${boundingBox[2]}`;

  return window.location.origin + Routes.embed_path({ key: apiKey }) + src;
}

function changeLocation(widget, action) {
  let { location } = action,
    boundingBox = location.properties.extent,
    [lon, lat] = location.geometry.coordinates,
    src = computeSrc(boundingBox, lat, lon, widget.apiKey);

  return widget.merge({ lat, lon, boundingBox, src });
}

function init(widget) {
  let { boundingBox, lat, lon, apiKey } = widget,
    src = computeSrc(boundingBox, lat, lon, apiKey);

  return widget.set('src', src);
}

function save(widget) {
  // @TODO Move this to an action
  $.post(Routes.widgets_path({ id: widget.id }), { widget: uncamelize(widget.toJS()) });

  return widget;
}

module.exports = function(state, action) {
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
  }

  return state;
};