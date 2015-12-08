import { Map } from 'immutable';
import { CHANGE_WIDTH, CHANGE_HEIGHT, CHANGE_CATEGORIES, CHANGE_LOCATION, CHANGE_PROVIDER } from '../actions/widget';

const DEFAULT_ZOOM = 16;

export default function(widget = Map(), action) {
  switch (action.type) {
    case CHANGE_WIDTH:
      return widget.set('width', action.width);

    case CHANGE_HEIGHT:
      return widget.set('height', action.height);

    case CHANGE_CATEGORIES:
      return widget.set('categories', action.categories);

    case CHANGE_LOCATION:
      let { location } = action,
        boundingBox = location.properties.extent,
        [lon, lat] = location.geometry.coordinates,
        src = `#/?lat=${lat}&lon=${lon}&zoom=${DEFAULT_ZOOM}`;

      if (boundingBox != null)
        src = `#/?bbox=${boundingBox[1]},${boundingBox[3]},${boundingBox[0]},${boundingBox[2]}`;

      src = Routes.embed_path({ key: widget.apiKey }) + src;

      return widget.merge({ lat, lon, boundingBox, src });

    case CHANGE_PROVIDER:
      return widget.set('providerId', action.providerId);
  }

  return widget;
}