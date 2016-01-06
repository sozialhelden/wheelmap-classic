const { Record, List } = require('immutable');

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
  src: null,
  providers: List()
});

module.exports = Widget;