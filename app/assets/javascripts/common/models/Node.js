import { Record, List, Seq } from 'immutable';
import underscore from 'mout/string/underscore';
import camelCase from 'mout/string/camelCase';

const PROHIBITED_ATTRS = [ 'state', 'country', 'category' ];

const NodeRecord = new Record({
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
  country: null
});

class Node extends NodeRecord {
  constructor(attrs) {
    super(Node.deserializeAttrs(attrs));
  }

  address() {
    const { city, postcode, street, housenumber, state, country } = this;

    return [
      [ street, housenumber ].filter(part => part != null).join(' '),
      [ postcode, city ].filter(part => part != null).join(' '),
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
    if (!this.hasLocation()) {
      return null;
    }

    return { lat: this.lat, lon: this.lon };
  }
}

Node.create = (attrs) => {
  return new Node(attrs);
};

Node.serializeAttrs = (attrs) => {
  return new Seq(attrs)
    .toKeyedSeq()
    .filter((value, key) => !PROHIBITED_ATTRS.includes(key))
    .mapKeys(key => (key === 'nodeType' ? 'type' : underscore(key)))
    .filter(value => value)
    .toJS();
};

Node.deserializeAttrs = (attrs) => {
  return new Seq(attrs)
    .toKeyedSeq()
    .mapKeys(key => (key === 'type' ? 'nodeType' : camelCase(key)))
    .toJS();
};

Node.fromFeature = (feature) => {
  const { properties, geometry } = feature;
  const { osm_id, city, name, postcode, street, housenumber, state, country } = properties;
  const [ lon, lat ] = geometry.coordinates;

  return new Node({
    id: osm_id, state, country, city, name, postcode, street, housenumber, lat, lon
  });
};

Node.fromFeatures = (features) => {
  return new List(features.map(Node.fromFeature));
};

export default Node;
