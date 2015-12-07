import { Record, List } from 'immutable';
import camelCase from 'mout/string/camelCase';
import forEach from 'mout/collection/forEach';

let Widget = Record({
  id: null,
  apiKey: null,
  height: 500,
  width: 400,
  lat: 52.50521,
  lon: 13.4231,
  userId: null,
  categories: false,
  boundingBox: null,
  providers: List()
});

export function createWidget(data) {
  let widget = {};

  forEach(data, function(value, key) {
    widget[camelCase(key)] = value;
  });

  return new Widget(widget);
}

export default Widget;