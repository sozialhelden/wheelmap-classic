const { Record, List } = require('immutable');
const underscore = require('mout/string/underscore');

const PROHIBITED_ATTRS = ['state', 'country', 'category'];

class Node extends Record({
  id: null,
  name: 'Test',
  nodeType: 'bank',
  wheelchair: 'unknown',
  wheelchairToilet: 'unknown',
  wheelchairDescription: '',
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
}) {
  address() {
    const { city, postcode, street, housenumber, state, country } = this;

    return [
      [street, housenumber].filter(part => part != null).join(' '),
      [postcode, city].filter(part => part != null).join(' '),
      state !== city ? state : null,
      country
    ].filter(part => part != null && part !== '').join(', ');
  }

  serialize() {
    const node = this.toKeyedSeq()
      .filter((value, key) => !PROHIBITED_ATTRS.includes(key))
      .mapKeys(key => key === 'nodeType' ? 'type' : key)
      .mapKeys(key => underscore(key))
      .toJS();

    return { node };
  }
}

Node.fromFeature = (feature) => {
  const { properties, geometry } = feature,
    { osm_id, city, name, postcode, street, housenumber, state, country } = properties,
    [ lat, lon ] = geometry.coordinates;

  return new Node({
    id: osm_id, state, country, city, name, postcode, street, housenumber, lat, lon
  });
};

module.exports = Node;