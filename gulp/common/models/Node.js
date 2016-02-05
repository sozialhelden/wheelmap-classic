const { Record, List } = require('immutable');

const Node = Record({
  id: null,
  name: 'Test',
  nodeType: null,
  wheelchair: 'unknown',
  wheelchairToilet: 'unknown',
  lat: 52.520007,
  lon: 13.404954,
  category: null,
  street: null,
  housenumber: null,
  city: null,
  postcode: null,
  website: null,
  phone: null,
  state: null,
  country: null
});

Node.fromFeature = (feature) => {
  const { properties, geometry } = feature,
    { osm_id, city, name, postcode, street, housenumber, state, country } = properties,
    [ lat, lon ] = geometry.coordinates;

  return new Node({
    id: osm_id, state, country, city, name, postcode, street, housenumber, lat, lon
  });
};

Node.address = (node) => {
  const { city, postcode, street, housenumber, state, country } = node;

  return [
    [street, housenumber].filter(part => part != null).join(' '),
    [postcode, city].filter(part => part != null).join(' '),
    state !== city ? state : null,
    country
  ].filter(part => part != null && part !== '').join(', ');
};

module.exports = Node;