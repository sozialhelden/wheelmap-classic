const { Record, List, Seq } = require('immutable');
const underscore = require('mout/string/underscore');
const camelCase = require('mout/string/camelCase');

const PROHIBITED_ATTRS = ['state', 'country', 'category'];

class Node extends Record({
  id: null,
  name: null,
  nodeType: 'bank',
  wheelchair: 'unknown',
  wheelchairToilet: 'unknown',
  wheelchairDescription: '',
  lat: null,
  lon: null,
  category: null,
  street: null,
  housenumber: null,
  city: null,
  postcode: null,
  website: null,
  phone: null,
  state: null,
  country: 'Germany'
}) {
  constructor(attrs) {
    super(Node.deserializeAttrs(attrs));
  }

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
    return { node: Node.serializeAttrs(this) };
  }

  hasLocation() {
    return this.lat != null && this.lon != null;
  }

  location() {
    if (!this.hasLocation())
      return null;

    return { lat: this.lat, lon: this.lon };
  }
}

Node.serializeAttrs = (attrs) => {
  return Seq(attrs)
    .toKeyedSeq()
    .filter((value, key) => !PROHIBITED_ATTRS.includes(key))
    .mapKeys(key => key === 'nodeType' ? 'type' : key)
    .mapKeys(key => underscore(key))
    .filter(value => value)
    .toJS();
};

Node.deserializeAttrs = (attrs) => {
  return Seq(attrs)
    .toKeyedSeq()
    .mapKeys(key => key === 'type' ? 'nodeType' : key)
    .mapKeys(key => camelCase(key))
    .toJS();
};

Node.fromFeature = (feature) => {
  const { properties, geometry } = feature,
    { osm_id, city, name, postcode, street, housenumber, state, country } = properties,
    [ lat, lon ] = geometry.coordinates;

  return new Node({
    id: osm_id, state, country, city, name, postcode, street, housenumber, lat, lon
  });
};

module.exports = Node;