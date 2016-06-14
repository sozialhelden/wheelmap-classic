jest.dontMock('../Node');

const Node = require('../Node');

describe('Node', () => {
  const address = {
    city: 'Berlin',
    street: 'Andreasstraße',
    postcode: '10243',
    housenumber: '10',
    state: 'Berlin',
    country: 'Germany'
  };

  const attrs = {
    ...address,
    name: 'Sozialhelden',
    wheelchair: 'yes',
    wheelchair_toilet: 'yes',
    type: 'office',
    category: null,
    id: null,
    lat: 14.5,
    lon: 13.5,
    phone: null,
    website: null,
    wheelchair_description: 'Ask at the reception.'
  };

  const deserializedAttrs = {
    ...attrs,
    nodeType: attrs.type,
    wheelchairToilet: attrs.wheelchair_toilet,
    wheelchairDescription: attrs.wheelchair_description
  };

  delete deserializedAttrs.type;
  delete deserializedAttrs.wheelchair_toilet;
  delete deserializedAttrs.wheelchair_description;

  const featureAttrs = {
    ...deserializedAttrs,
    id: 1,
    nodeType: 'bank',
    wheelchair: 'unknown',
    wheelchairDescription: '',
    wheelchairToilet: 'unknown'
  };

  function createFeature(id) {
    const { city, name, postcode, street, housenumber, state, country } = attrs,
      properties = { city, name, postcode, street, housenumber, state, country },
      coordinates = [attrs.lon, attrs.lat];

    properties.osm_id = id;

    return { properties, geometry: { coordinates } };
  }

  it('deserializes attributes', () => {
    expect(Node.deserializeAttrs(attrs))
      .toEqual(deserializedAttrs);
  });

  it('serializes attributes', () => {
    const serializedAttrs = { ...attrs };

    // Prohibited attributes
    delete serializedAttrs.state;
    delete serializedAttrs.country;
    delete serializedAttrs.category;

    // Null attributes
    delete serializedAttrs.id;
    delete serializedAttrs.phone;
    delete serializedAttrs.website;

    expect(Node.serializeAttrs(deserializedAttrs))
      .toEqual(serializedAttrs);
  });

  it('creates an deserialized node', () => {
    expect(new Node(attrs).toJS())
      .toEqual(deserializedAttrs);
  });

  it('has an address', () => {
    const node = new Node();

    expect(node.merge({ ...address, country: null }).address())
      .toBe('Andreasstraße 10, 10243 Berlin');

    expect(node.merge({ ...address, city: null }).address())
      .toBe('Andreasstraße 10, 10243, Berlin, Germany');

    expect(node.merge({ ...address, postcode: null }).address())
      .toBe('Andreasstraße 10, Berlin, Germany');

    expect(node.merge({ ...address, housenumber: null }).address())
      .toBe('Andreasstraße, 10243 Berlin, Germany');

    expect(node.merge(address).address())
      .toBe('Andreasstraße 10, 10243 Berlin, Germany');
  });

  it('creates from feature', () => {
    const feature = createFeature(1);

    expect(Node.fromFeature(feature).toJS())
      .toEqual({ ...featureAttrs, id: 1 });
  });

  it('creates from features', () => {
    const features = [createFeature(1), createFeature(2)];

    expect(Node.fromFeatures(features).toJS())
      .toEqual([
        { ...featureAttrs, id: 1 },
        { ...featureAttrs, id: 2 }
      ]);
  });
});

